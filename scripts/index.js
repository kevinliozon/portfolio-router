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
  
  // Building the navigations
  /*if (wrapHeaderNav.childNodes.length === 0) moduleNav.buildNavMain();
  if (wrapFooterNav.childNodes.length === 0) moduleNav.buildNavAlt();*/
  // Calls the template relevant to the page we are loading from
  moduleRouter.callTemplate();
  // Building the navigation listener
  moduleRouter.linksListener('js-link--nav')
});

/**
 * On change in the url or upon state change
 */
window.addEventListener('hashchange', e => moduleRouter.navStateOrHashChange(), false);
