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
    * @private
    */
  function _getErrorPageTemplate() {
  wrapTemplate.innerHTML = 'loading...';
  const activeTemplate = '/404';
  const activePage = 'Page not found';
  const activeUrl = location.origin + '#page=404';
  fetch(activeTemplate, { method: 'GET' })
      .then(response => {return response.text()})// turn HTML response into a string
      .then(content => {
          //This is where we update the address bar with the 'activeUrl' parameter
          window.history.replaceState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl)
          document.title = activePage; // Defines tab title
          wrapTemplate.innerHTML = content; // Fills the wrap with template
          return _getPageController(activeTemplate) // Adds template's controller
      })
      .catch(error => console.error('error:', error))
  }

  /**
    * Populate the wrapTemplate element with the current page's HTML template
    * @private
    */
  function _getCurrentPageTemplate() {
    wrapTemplate.innerHTML = 'loading...';
    const activeTemplate = history.state.template;
    const activePage = history.state.page;
    const activeUrl = history.state.url;
    fetch(activeTemplate, { method: 'GET' }).then(response => {return response.text()}) // turn HTML response into a string
    .then(content => {
      //This is where we update the address bar with the 'activeUrl' parameter
      history.replaceState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl);
      document.title = activePage; // Defines tab title
      wrapTemplate.innerHTML = content; // Fills the wrap with template
      return _getPageController(activeTemplate) // Adds template's controller
    })
    .catch(error => console.error('error:', error))
  }

  /**
    * Populate the wrapTemplate element with the targeted HTML template
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
          _getErrorPageTemplate()
          throw new Error('No template for this page - 404')
        }
      }) 
      .then(content => {
        //This is where we update the address bar with the 'activeUrl' parameter
        window.history.pushState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl)
        document.title = activePage; // Defines tab title
        wrapTemplate.innerHTML = content; // Fills the wrap with template
        return _getPageController(activeTemplate) // Adds template's controller
      })
      .catch(error => console.error('error: ', error))
  }

  /**
    * On first load/location.origin: calls home page's template
    * Or refresh: calls current page's template
    * Serves also as fallback if history state is compromised or innexistant: we are redirected to Home page
    * This is mostly an exception error handler in the above case.
    * @private
    */
  function _callTemplate() {
    // Are we refreshing an existing page, otherwise we fall back onto homepage
    (history && history.state) ? 
    _getCurrentPageTemplate() : 
    _getPageTemplate('/home', 'Home', '#page=home');
  }

  /**
    * Is called on load
    * Set up the event listeners for the navigation and the generation of templates
    * within the single page wrap.
    * @private
    */
  function _navListener() {
    // Array with all navigation links
    Array.from(document.getElementsByClassName('nav__link')).forEach((navLink) => {
      // Event listener on each link
      navLink.addEventListener('click', function(e) {
        // If page selected is different than actual one we trigger a push state
        if(this.dataset.template !== history.state.template) {
          _getPageTemplate(this.dataset.template, navLink.text, this.href);
        }
        //This prevents the browser from actually following the link
        e.preventDefault();
        e.stopPropagation();
      }, false)
    })
  }

  /**
    * Is called on hashchange or popstate event (back/forward)
    * Check if the page we try to access exists
    * If yes calls its template and controller
    * If no calls its template and controller
    * @private
    */
  function _navStateOrHashChange() {
    wrapTemplate.innerHTML = 'loading...';
    // we check if the new url has got a corresponding template
    fetch(location.href.replace('#page=',''), { method: 'GET' }).then(response => {
      if(response.status !== 404) {
        return response.text(); // has a template
      } else {
        _getErrorPageTemplate(); // no template => 404 page
        throw new Error('No template for this page - 404')
      }
    })
    .then(content => {
      wrapTemplate.innerHTML = content;  // page is filled with new template
      return _getPageController(location.hash.replace('#page=','/')) // we get the controller for the page accessed
    })
    .catch(error => console.error('error: ', error))
  }

  /*** PUBLIC METHODS ***/

  function navListener() {
    _navListener();
  }

  function callTemplate() {
    _callTemplate();
  }

  function navStateOrHashChange() {
    _navStateOrHashChange();
  }

  return {
    navListener: navListener,
    callTemplate: callTemplate,
    navStateOrHashChange: navStateOrHashChange
  };
})();
