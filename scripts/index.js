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
  // Building the navigation listener
  moduleRouter.navListener();
  // Calls the template relevant to the page we are loading from
  moduleRouter.callTemplate();
});

/**
 * On change in the url or upon state change
 */
window.addEventListener('hashchange', e => moduleRouter.navStateOrHashChange(), false);
