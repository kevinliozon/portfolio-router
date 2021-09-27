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
        class="c-nav__link l-header__nav__link js-link--nav"\
        href="'+page.href+'"\
        aria-label="'+page.label+'"\
        data-template="'+page.templatePath+'"\
        target="_top">\
        '+page.name+'\
        </a>';
      } else {
        wrapFooterNav.innerHTML += '<a\
        class="c-nav__link l-footer__nav__link js-link--nav"\
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
      class="c-nav__link l-footer__nav__link"\
      href="'+externalPage.href+'"\
      aria-label="'+externalPage.label+'"\
      data-template="'+externalPage.templatePath+'"\
      target="_blank">\
      '+externalPage.name+'\
      </a>';
    }
  }

  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */
  function _buildNavProject(el) {
    for (let projectFragment of projectFragments) {
      el.innerHTML += '<div>\
      <a class="c-nav__link js-link--hash"\
      href="'+projectFragment.href+'"\
      aria-label="'+projectFragment.label+'"\
      data-hash="'+projectFragment.hash+'">\
      '+projectFragment.name+'\
      </a></div>';
    }
  }

  function buildNavMain() {
    _buildNavMain();
  }

  function buildNavAlt() {
    _buildNavAlt();
  }

  function buildNavProject(el) {
    _buildNavProject(el);
  }

  return {
    buildNavMain: buildNavMain,
    buildNavAlt: buildNavAlt,
    buildNavProject: buildNavProject
  };
})();
