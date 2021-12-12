const moduleViewRenderer = (() => {
  /**
   * Populate the wrapView element with the targeted HTML template
   * 
   * @param {String} activeTemplate The relative path to the template
   * @param {Object} wrapView The element where the content should be injected
   */
  function _getViewTemplate (activeTemplate, wrapView) {
    wrapView.innerHTML = 'loading...';

    fetch(activeTemplate, { method: 'GET' })
    .then( response => {
      if(response.status !== 404) {
        return response.text(); // turn HTML response into a string
      } else {
        return wrapView.parentNode.removeChild(wrapView); // remove the container of the non-existant content
      }
    })
    .then( (content) => {
      return wrapView.innerHTML = content;
    })
    .catch( (error) => console.error('error:', error));
  }

  /**
   * Fetch an array of values and turn them into badges
   * 
   * @param {Array} items 
   * @returns badgesList
   */
  function _getViewBadges(items, el) {
    for (let item of items) el.innerHTML += '<li class="c-badge u-radius">'+item+'</li>';
  }

  /**
   * Handles the logic for side menu of single project page on mobile
   * Side menu is always closed when interracting with the page
   * apart if already closed and we click on the burger icon
   * 
   */
  function _getViewSidebar() {
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger-menu');
    let isOpen = false;

    // we list all the elements that handle the side menu toggling (both open and close)
    for (let sidebarTrigger of document.querySelectorAll('#content, #header, #footer, #burger-menu, .js-link--hash')) {
      sidebarTrigger.addEventListener('click', e => {
        if (sidebarTrigger === document.getElementById('burger-menu') && !isOpen){
          // Are we interracting with the burger menu icon while the menu is closed?
          sidebar.classList.add('is-open');
          burger.classList.add('is-open');
          isOpen = true;
        } else if (isOpen) {
          // Are we interracting with all the content while the menu is open?
          sidebar.classList.remove('is-open');
          burger.classList.remove('is-open');
          isOpen = false;
        }
      });
    }
  }

  /*** PUBLIC METHODS ***/

  function getViewTemplate(activeTemplate, wrapView) {
    _getViewTemplate(activeTemplate, wrapView);
  }

  function getViewBadges(items, el) {
    _getViewBadges(items, el);
  }

  function getViewSidebar() {
    _getViewSidebar();
  }

  return {
    getViewTemplate: getViewTemplate,
    getViewBadges: getViewBadges,
    getViewSidebar: getViewSidebar
  };
})();
