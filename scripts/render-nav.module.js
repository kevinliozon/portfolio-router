const moduleNav = (() => {

  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */
  function _buildNavMain() {
    for (let page of pages) {
      if (page.isVisible) {
        if (page.isMain) {
          wrapHeaderNav.innerHTML += '<a\
          class="c-nav__link l-header__nav__link js-link--nav"\
          href="'+page.href+'"\
          aria-label="'+page.label+'"\
          data-template="'+page.templatePath+'"\
          data-name="'+page.name+'"\
          target="_top">'+page.name+'</a>';
        } else {
          wrapFooterNav.innerHTML += '<a\
          class="c-nav__link l-footer__nav__link js-link--nav"\
          href="'+page.href+'"\
          aria-label="'+page.label+'"\
          data-template="'+page.templatePath+'"\
          data-name="'+page.name+'"\
          target="_top">'+page.name+'</a>';
        }
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
      if (externalPage.isVisible) {
        wrapFooterNavAlt.innerHTML += '<a\
        class="c-nav__link l-footer__nav__link"\
        href="'+externalPage.href+'"\
        aria-label="'+externalPage.label+'"\
        data-template="'+externalPage.templatePath+'"\
        data-name="'+externalPage.name+'"\
        target="_blank">\
        '+externalPage.name+'\
        </a>';
      }
    }
  }

  /**
    * Generate the hash nav for project page
    * 
    * @param {Object} el The parent element
    * 
    * @private
    */
  function _buildNavProject(el) {
    for (let projectFragment of projectFragments) {
      el.innerHTML += '\
      <li class="c-list__i">\
        <a class="c-link js-link--hash"\
        href="'+projectFragment.href+'"\
        aria-label="'+projectFragment.label+'"\
        data-name="'+projectFragment.hash+'">'+projectFragment.name+'</a>\
      </li>';
    }
  }

  /**
    * Generate a list with links to other pages
    * 
    * @param {Object} el The parent element
    * @param {Array} links The array of links
    * 
    * @private
    */
  function _buildNavList(el, links) {
    for (let link of links) {
      el.innerHTML += '\
      <li class="c-list__i">\
        <a class="c-link js-link--hash"\
        href="'+link.href+'"\
        aria-label="'+link.label+'"\
        data-template="'+link.templatePath+'"\
        data-name="'+link.name+'"\
        target="_top">'+link.name+'</a>\
      </li>';
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

  function buildNavList(el, links) {
    _buildNavList(el, links);
  }

  return {
    buildNavMain: buildNavMain,
    buildNavAlt: buildNavAlt,
    buildNavProject: buildNavProject,
    buildNavList: buildNavList
  };
})();
