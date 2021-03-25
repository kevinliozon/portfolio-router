/*** CONTAINERS ***/
const wrapHeaderNav = document.getElementById('header-nav');
const wrapFooterNav = document.getElementById('footer-nav');
const wrapFooterNavAlt = document.getElementById('footer-nav-alt');
const wrapTemplate = document.getElementById('wrap');

/**
 * On load or refresh
 */
window.addEventListener('load', e => {
  // Building the navigations
  moduleNav.buildNavMain();
  moduleNav.buildNavAlt();
  // Calls the template relevant to the page we are loading from
  moduleRouter.callTemplate();
  // Building the navigation listener
  moduleRouter.linksListener('js-link--nav');
});

/**
 * On change in the url or upon state change
 * We cannot force the url to inject the root wrap (with header/wrap/footer) within itself: when hash === "#page="
 * We cannot force the url to inject the root folder (with links) within the wrap for security reasons: when hash does not include "#page="
 */
window.addEventListener('hashchange', e => {
  if (location.hash.indexOf('#page=') > -1 && location.hash !== '#page=') {
    moduleRouter.navStateOrHashChange();
  } else {
    moduleRouter.getErrorPageTemplate(); // no template => 404 page
  }
}, false);
