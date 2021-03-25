/*** CONTAINERS ***/
const wrapHeaderNav = document.getElementById('header-nav');
const wrapFooterNav = document.getElementById('footer-nav');
const wrapFooterNavAlt = document.getElementById('footer-nav-alt');
const wrapTemplate = document.getElementById('wrap');

/**
 * On load or refresh:
 * - Build the header and footer navs as well as their respective listeners
 * - Call the template
 */
window.addEventListener('load', e => {
  // Building the navigations
  moduleNav.buildNavMain();
  moduleNav.buildNavAlt();
  // Building the navigation listener
  moduleRouter.linksListener('js-link--nav');
  // Calls the template relevant to the page we are loading from
  moduleRouter.callTemplate();
});

/**
 * On change in the url or upon state change
 * We cannot force the url to inject the root wrap (with header/wrap/footer) within itself: when hash === "#page="
 * We cannot force the url to inject the root folder (with links) within the wrap for security reasons: when hash does not include "#page="
 * Outcomes:
 * - page selected is valid and does not contain a fragment: Go to page
 * - page selected is valid and contains a fragment: Scroll to fragment
 * - page selected is invalid: 404
 */
window.addEventListener('hashchange', e => {
  if (location.hash.indexOf('#page=') > -1 && location.hash !== '#page=') {
    // If the hash contains the string '#page=' but does not match it (root folder)
    if (location.hash.replace(/[^#]/g, '').length <= 1) {
      // There are less than two # in the url: it means we have no fragment selected (just the one of the active page)
      moduleRouter.navStateOrHashChange();
    } else {
      // There are at least two # in the url: it means we have a fragment selected
      // We parse the hash in order to retrieve the id of the element we want to target (we get what stands after the second #: the fragment)
      document.getElementById(location.hash.split('#').slice(2)).scrollIntoView();
    }
  } else {
    moduleRouter.getErrorPageTemplate(); // no template => 404 page
  }
}, false);
