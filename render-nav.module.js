const moduleNav = (() => {

    /**
     * Generate the main navigation for header and footer
     * 
     * @private
     */
    function _buildNavMain() {
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
     * @private
     */
    function _buildNavAlt() {
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

    function buildNavMain() {
        _buildNavMain();
    }

    function buildNavAlt() {
        _buildNavAlt();
    }

    return {
        buildNavMain: buildNavMain,
        buildNavAlt: buildNavAlt
    };
})();
