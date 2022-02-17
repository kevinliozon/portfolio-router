const moduleRouter = (() => {
  /**
    * After refresh or change of page
    * Replaces existing script tag for page controller by the new page's one
    * @param {String} activeTemplate The relative path to the template
    * @private
    */
  async function _getPageController(activeTemplate) {
    // Detect the last script in the list (previous page controller) and removes it
    let lastScriptTag = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
    lastScriptTag.parentNode.removeChild(lastScriptTag);
    
    // Create the script tag calling the controller of the new page
    let scriptTag = document.createElement('script'); // create a script tag
    scriptTag.type= 'text/javascript';
    scriptTag.defer = true; // script is loaded when the page is parsed
    scriptTag.async = false;
    scriptTag.src = activeTemplate+'/index.js'; // set the source of the script to your script

    try {
      const response = await fetch(scriptTag.src, { method: 'GET' });
      if (response.status !== 404) {
        document.body.append(scriptTag); // append the script to the DOM
      } else {
        scriptTag.src = '';
        document.body.append(scriptTag); // append the script to the DOM
      }
    } catch (error) {return console.error('error:', error)}
  }

  /**
    * Populate the wrapTemplate element with the HTML template for 404 errors
    * 
    * @private
    */
  function _getErrorPageTemplate() {
    _loadPage(true);
    const activeTemplate = '/pages/error';

    fetch(activeTemplate, { method: 'GET' })
      .then(response => {
        return response.text() // turn HTML response into a string
      })
      .then(content => {
        _buildPage(activeTemplate, 'Not found', location.origin + '#page=error', content, 'replace');
        return document.getElementById('errorComponent');
      })
      .then(el => {
        el.appendChild(fallbackLinksComponent);
      })
      .catch(error => console.error('error:', error))
  }

  /**
    * Build the page with current page's HTML template
    * 
    * @private
    */
  function _getCurrentPageTemplate() {
    _loadPage(true);
    const activeTemplate = history.state.template;
    // turn HTML response into a string
    fetch(activeTemplate, { method: 'GET' }).then(response => {return response.text() })
    .then(content => {
      if (activeTemplate !== '/pages/error'){
        _buildPage(activeTemplate, history.state.page, history.state.url, content, 'replace');
      } else {
        _getErrorPageTemplate(); // Page we refresh is 404
      }
    })
    .catch(error => {
      _getErrorPageTemplate(); // no template => 404 page
      console.error('error:', error);
    })
  }

  /**
    * Build the page with targeted HTML template
    * 
    * @param {String} activeTemplate The relative path to the template
    * @param {String} activePage Name of the page
    * @param {String} activeUrl The relative url
    * @private
    */
  function _getPageTemplate(activeTemplate, activePage, activeUrl) {
    _loadPage(true);
    fetch(activeTemplate, { method: 'GET' }).then(response => {
      if(response.status !== 404) {
        return response.text(); // turn HTML response into a string
      } else {
        throw new Error('No template for this page - 404')
      }
    }) 
    .then(content => {
      _buildPage(activeTemplate, activePage, activeUrl, content, 'push');
    })
    .catch(error => {
      _getErrorPageTemplate(); // no template => 404 page
      console.error('error: ', error);
    })
  }

  /**
    * On first load/location.origin: calls home page's template
    * Or refresh: calls current page's template
    * Serves also as fallback if history state is compromised or innexistant: we are redirected to Home page
    * This is mostly an exception error handler in the above case.
    * 
    * @private
    */
  function _callTemplate() {
    if (location.href === location.origin + location.pathname || !history) {
      // If no page selected or there is no history registered, we fall back onto homepage
      _getPageTemplate(pages[0].templatePath, pages[0].name, pages[0].href)
    } else {
      // Are we refreshing an existing page? otherwise we go back to the page before hashchange
      (history.state) ? _getCurrentPageTemplate() : history.back();
    }
  }

  /**
    * @param {String} activePage The name of the active page
    * 
    * @private
    */
  function _setPageAsActive(activePage) {
    Array.from(document.getElementsByClassName('js-link--nav')).forEach((link) => {
      link.classList.remove('u-active'); // removes any active state
      link.blur(); // removes any focus

      if (location.hash.indexOf('projects') > -1 && link.dataset.name.replace(/\s/g, '').toLowerCase() === 'projects') {
        link.classList.add('u-active'); // If we are on any project page it highlights the 'projects' menu item
      } else if (link.dataset.name.replace(/\s/g, '').toLowerCase() === activePage.replace(/\s/g, '').toLowerCase()) {
        link.classList.add('u-active'); // converts page's name to lowercase without spaces then adds active state to the relevant nav item
      };
    });
  }

  /**
    * We clear the previous anchor and make the new one active
    * @param {Object} activeHash The element of the active anchor
    * @param {Object} newHash The element of the new active anchor
    * @returns updated element
    * 
    * @private
    */
  function _setHashAsActive(activeHash, newHash) {
    activeHash.classList.remove('u-active'); // removes any active state
    activeHash = newHash;
    activeHash.classList.add('u-active');
    return activeHash;
  }

  /**
    * Is called on load
    * Set up the event listeners for the navigation and the generation of templates
    * within the single page wrap.
    * 
    * @param {String} linkClass The class of the links we want to listen to
    * @private
    */
  function _linksListener(linkClass) {
    // Array with all navigation links
    Array.from(document.getElementsByClassName(linkClass)).forEach((link) => {
      // Event listener on each link
      link.addEventListener('click', function(e) {
        // If page selected is the same as actual one: do nothing
        if(history.state !== null && history.state.template !== null && this.dataset !== undefined && this.dataset.template === history.state.template) {
          return;
        } else {
          _getPageTemplate(this.dataset.template, this.dataset.name, this.href);
        }
        //This prevents the browser from actually following the default link
        e.stopPropagation();
        e.preventDefault();
      }, false)
    })
  }

  /**
    * Is called on load
    * Set up the event listeners for the anchor nav and scroll to the relevant content
    * 
    * @param {String} hashClass The class of the anchor we want to listen to
    * @param {String} elId The id of the element we target
    * @private
    */
  function _hashListener(hashClass, elId) {
    // Active anchor/hash is the first one by default - we refer to the parent node for the styling which is <li>
    let activeHash = document.getElementsByClassName(hashClass)[1].parentNode; // [0] is skip to content
    let hashObserver = new IntersectionObserver(entries => {
      // isIntersecting is true when element and viewport are overlapping
      if(entries[0].isIntersecting === true)
        elId = entries[0].target.id; // The element we target is the visible (75%) one 
        activeHash.classList.remove('u-active'); // reset all anchors

        Array.from(document.getElementsByClassName(hashClass)).forEach((hash) => {
          hash.blur(); // removes any focus
          // If the value of an anchor is same as the value of the element we see
          if(hash.dataset.name === elId) {
            activeHash = _setHashAsActive(activeHash, hash.parentNode); // set active and update variable of the active anchor
          }
        });
    }, { threshold: [0.75] });

    // Array with all navigation links
    Array.from(document.getElementsByClassName(hashClass)).forEach((hash) => {
      hash.parentNode.classList.remove('u-active'); // removes any active state
      activeHash.classList.add('u-active'); // reset all anchors

      // we observe elements using this id
      hashObserver.observe(document.querySelector('#'+hash.dataset.name));

      // Event listener on each hash
      hash.addEventListener('click', e => {

        activeHash = _setHashAsActive(activeHash, hash.parentNode); // set active and update variable of the active anchor

        // The element, its position and the offset for scroll
        const el = document.getElementById(hash.dataset.name);
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition - 100;

        // We focus the element
        el.focus();

        // Scrolls to the content with matching fragment
        if (isIE()) {
          window.scrollBy(0, offsetPosition);
        } else {
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
          });
        }

        //This prevents the browser from actually following the default hash
        e.stopPropagation();
        e.preventDefault();
      }, false)
    })
  }

  /**
    * Is called on hashchange or popstate event (back/forward)
    * Check if the page we try to access exists
    * If yes creates the page
    * If no calls error page
    * 
    * @private
    */
  function _navStateOrHashChange() {
    _loadPage(true);
    // we check if the new url has got a corresponding template
    fetch(location.href.replace('#page=','pages/'), { method: 'GET' }).then(response => {
      if(response.status !== 404) {
        return response.text(); // has a template
      } else {
        throw new Error('No template for this page - 404')
      }
    })
    .then(content => {
      const newPageTemplateLocation = location.hash.replace('#page=','/pages/');

      if (newPageTemplateLocation !== '/pages/error'){
        for (let page of pages) {
          const pageTemplateToMatch = page.templatePath;
          
          if (newPageTemplateLocation === pageTemplateToMatch) {
            _buildPage(pageTemplateToMatch, page.name, page.href, content, 'replace');
          }
        }
        
        for (let project of projects) {
          const projectTemplateToMatch = project.templatePath;
          
          if (newPageTemplateLocation === projectTemplateToMatch) {
            _buildPage(projectTemplateToMatch, project.name, project.href, content, 'replace');
          }
        }
      } else {
        _getErrorPageTemplate(); // next/previous page was 404
      }
    })
    .catch(error => {
      _getErrorPageTemplate(); // no template => 404 page
      console.error('error: ', error)
    })
  }

  /**
    * Updates history
    * Populate the wrapTemplate element with the targeted HTML template
    * 
    * @param {String} activeTemplate The relative path to the template
    * @param {String} activePage Name of the page
    * @param {String} activeUrl The relative url
    * @param {Object} slideToDisplay the content of the page to populate the wrap
    * @param {String} historyState either push or replace
    * @private
    */
  function _buildPage(activeTemplate, activePage, activeUrl, content, historyState) {
    //This is where we update the address bar with the 'activeUrl' parameter
    switch (historyState) {
      case 'push':
        window.history.pushState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl); break;
      case 'replace':
        window.history.replaceState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl); break;
      default:
        console.error('Error: Push or Replace state not defined for history'); break;
    }

    _loadPage(false);
    document.title = activePage; // Defines tab title
    wrapTemplate.innerHTML = content; // Fills the wrap with template
    _setPageAsActive(activePage); // Set page's link as active
    _getPageController(activeTemplate) // Adds template's controller
  }

  /**
    * Fade in effect when changing or loading page
    * 
    * @private
    */
  function _contentTransitionAnimation() {
    let opacity = 0;
    let intervalID = setInterval(function() {
      if (opacity < 1) {
        opacity = opacity + 0.1;
        wrapTemplate.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 25);
  }

  /**
    * The load page replace the main container content
    * 
    * @param {Boolean} isLoading The loading state
    * @private
    */
  function _loadPage(isLoading) {
    if (isLoading) {
      _contentTransitionAnimation();
      wrapTemplate.innerHTML = '\
      <div class="l-float">\
        <div id="loadComponent" class="c-load">\
          <header class="c-load__header">\
            <h1 class="c-load__title">Loading</h1>\
            <svg class="c-load__spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\
              <path d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" class="c-btn__ico--alt"/>\
              <path d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" class="c-btn__ico"/>\
            </svg>\
          </header>\
        </div>\
      </div>';
      document.getElementById('loadComponent').appendChild(fallbackLinksComponent);
      document.getElementById('loadBack').addEventListener('click', e => history.back());
    } else if (!isLoading) {
      _contentTransitionAnimation();
    }
  }

  /*** @public ***/

  function linksListener(linkClass) {
    _linksListener(linkClass);
  }

  function hashListener(hashClass, elId) {
    _hashListener(hashClass, elId);
  }

  function callTemplate() {
    _callTemplate();
  }

  function navStateOrHashChange() {
    _navStateOrHashChange();
  }

  function getErrorPageTemplate() {
    _getErrorPageTemplate()
  }

  return {
    linksListener: linksListener,
    hashListener: hashListener,
    callTemplate: callTemplate,
    navStateOrHashChange: navStateOrHashChange,
    getErrorPageTemplate : getErrorPageTemplate
  };
})();
