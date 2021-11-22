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
    for (let item of items) el.innerHTML += '<li class="c-badge">'+item+'</li>';
  }

  /**
   * On click:
   * - Build the header and footer navs as well as their respective listeners
   * - Call the template
   * 
   */
  function _getViewSidebar() {
    const sidebar = document.getElementById('sidebar');
    const burger = document.getElementById('burger-open');
    // 
    burger.addEventListener('click', e => {
      sidebar.classList.add('is-open');
      burger.classList.add('is-open');
    });

    for (let sidebarCanceller of document.querySelectorAll('#content, #header, #footer, #burger-close, .js-link--hash')) {
      sidebarCanceller.addEventListener('click', e => {
        if (document.getElementsByClassName('c-side is-open').length > 0) {
          sidebar.classList.remove('is-open');
          burger.classList.remove('is-open');
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
