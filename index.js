window.addEventListener('load', (eventLoad) => {
    const wrapHeaderNav = document.getElementById('header-nav');
    const wrapFooterNav = document.getElementById('footer-nav');
    const wrapFooterNavAlt = document.getElementById('footer-nav-alt');

    moduleNav.buildNavMain(wrapHeaderNav, wrapFooterNav);
    moduleNav.buildNavAlt(wrapFooterNavAlt);
});
