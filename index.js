/*** CONTAINERS ***/
const wrapHeaderNav = document.getElementById('header-nav');
const wrapFooterNav = document.getElementById('footer-nav');
const wrapFooterNavAlt = document.getElementById('footer-nav-alt');
const wrapTemplate = document.getElementById('wrap');

/**
 * On load or refresh
 */
window.addEventListener('load', (event) => {
    moduleNav.buildNavMain();
    moduleNav.buildNavAlt();

    moduleRouter.navListener();
    moduleRouter.navHistoryHandler();
});

/**
 * On change in the url
 */
window.addEventListener('hashchange', (event) => {
    moduleRouter.navChecker();
});
