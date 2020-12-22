const moduleNav = (() => {

    /**
     * Generate the main navigation for header and footer
     * 
     * @param {Object} wrapHeaderNav The element containing the header nav
     * @param {Object} wrapFooterNav  The element containing the footer nav
     * 
     * @private
     */
    function _buildNavMain(wrapHeaderNav, wrapFooterNav) {
        for (let page of pages) {
            if (page.isMain) {
                wrapHeaderNav.innerHTML += '<a\
                class="nav__link"\
                href="'+page.href+'"\
                aria-label="'+page.label+'"\
                data-template="'+page.templatePath+'"\
                target="_top">\
                '+page.name+'\
                </a>';
            } else {
                wrapFooterNav.innerHTML += '<a\
                class="nav__link"\
                href="'+page.href+'"\
                aria-label="'+page.label+'"\
                data-template="'+page.templatePath+'"\
                target="_top">\
                '+page.name+'\
                </a>';
            }
        }
    }

    /**
     * Generate the main navigation for header and footer
     * 
     * @param {Object} wrapFooterNavAlt The element containing the footer secondary nav
     * 
     * @private
     */
    function _buildNavAlt(wrapFooterNavAlt) {
        for (let externalPage of externalPages) {
            wrapFooterNavAlt.innerHTML += '<a\
            class="nav__link--external"\
            href="'+externalPage.href+'"\
            aria-label="'+externalPage.label+'"\
            data-template="'+externalPage.templatePath+'"\
            target="_blank">\
            '+externalPage.name+'\
            </a>';
        }
    }

    function buildNavMain(wrapHeaderNav, wrapFooterNav) {
        _buildNavMain(wrapHeaderNav, wrapFooterNav);
    }

    function buildNavAlt(wrapFooterNavAlt) {
        _buildNavAlt(wrapFooterNavAlt);
    }

    return {
        buildNavMain: buildNavMain,
        buildNavAlt: buildNavAlt
    };
})();
