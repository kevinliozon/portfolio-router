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
  wrapTemplate.innerHTML = 'loading...';
  const activeTemplate = '/pages/404';

  fetch(activeTemplate, { method: 'GET' })
    .then(response => {return response.text()})// turn HTML response into a string
    .then(content => {
      _buildPage(activeTemplate, 'Not found', location.origin + '#page=404', content, 'replace');
    })
    .catch(error => console.error('error:', error))
  }

  /**
    * Build the page with current page's HTML template
    * 
    * @private
    */
  function _getCurrentPageTemplate() {
    wrapTemplate.innerHTML = 'loading...';
    const activeTemplate = history.state.template;

    fetch(activeTemplate, { method: 'GET' }).then(response => {return response.text()}) // turn HTML response into a string
    .then(content => {
      _buildPage(activeTemplate, history.state.page, history.state.url, content, 'replace');
    })
    .catch(error => console.error('error:', error))
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
    wrapTemplate.innerHTML = 'loading...';
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
    * Set up the event listeners for the side nav and scroll to the relevant content
    * 
    * @param {String} linkClass The class of the links we want to listen to
    * @private
    */
  function _hashListener(linkClass) {
    // Array with all navigation links
    Array.from(document.getElementsByClassName(linkClass)).forEach((link) => {
      // Event listener on each link
      link.addEventListener('click', function(e) {
        // The element, its position and the offset for scroll
        const el = document.getElementById(link.dataset.hash);
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

        //This prevents the browser from actually following the default link
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
    wrapTemplate.innerHTML = 'loading...';
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

    document.title = activePage; // Defines tab title
    wrapTemplate.innerHTML = content; // Fills the wrap with template
    _setPageAsActive(activePage); // Set page's link as active
    _getPageController(activeTemplate) // Adds template's controller
  }

  /*** @public ***/

  function linksListener(linkClass) {
    _linksListener(linkClass);
  }

  function hashListener(linkClass) {
    _hashListener(linkClass);
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
