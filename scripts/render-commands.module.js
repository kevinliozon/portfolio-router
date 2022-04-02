const moduleCommands = (() => {
  /**
    * Is called on load
    * Set up the event listeners for the command buttons
    * @param {String} commandClass The class of the buttons we want to listen to
    * @private
    */
  function _commandsListener(commandClass) {
    // Array with all command buttons
    for (let cmd of Array.from(document.getElementsByClassName(commandClass))) {
      // Event listener on each button
      cmd.addEventListener('click', e => {
        switch(cmd.dataset.command) {
          case 'back':
            history.back();
            break;
          case 'forward':
            history.forward();
            break;
          case 'top':
            _scrollToTop()
            break;
          case 'tint':
            _changeTheme();
            break;
          case 'textsize':
            _changeFontSize()
            break;
          default:
            console.log(`Sorry, we are out of ${cmd.dataset.command}.`);
        }
      }, false)
    }
  }

  /**
    * Is called on load
    * Checks if no UI settings have been applied from localstorage
    * - if no active setting => set the default setting
    * - if active setting => apply the class relevant to the localstorage item
    * @param {String} activeTheme The localstorage item value for theme
    * @param {String} activeFont The localstorage item value for font
    * @private
    */
  function _getSettings(activeTheme, activeFont) {
    if (!activeTheme) {
      localStorage.setItem('theme', 'light')
    } else {
      switch(localStorage.getItem('theme')) {
        case 'dark':
          wrapBody.classList.add('t-dark');
          break;
        default:
          console.log(`Theme is ${activeTheme}.`);
      }
    };

    if (!activeFont) {
      localStorage.setItem('font', 'normal')
      fontSizeCount.innerHTML = 'x1';
    } else {
      switch(localStorage.getItem('font')) {
        case 'big':
          wrapBody.classList.add('t-fontbig');
          fontSizeCount.innerHTML = 'x2';
          break;
        case 'bigger':
          wrapBody.classList.add('t-fontbigger');
          fontSizeCount.innerHTML = 'x3';
          break;
        default:
          console.log(`Font is ${activeFont}.`);
      }
    };
  }

  /**
   * Scroll to top of the page
   * @private
   */
  function _scrollToTop() {
    if (isIE()) {
      window.scrollTo(0);
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  /**
   * Check if the theme is already light with localStorage
   * - if yes => set the localStorage to dark and add a dark theme class to body
   * - if no => set the localStorage to light and remove dark theme class from body
   * @private
   */
  function _changeTheme() {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
      wrapBody.classList.add('t-dark');
    } else {
      localStorage.setItem('theme', 'light');
      wrapBody.classList.remove('t-dark');
    }
  }

  /**
   * Check the font size with localStorage
   * - if normal => set the localStorage to big and add a big font theme class to body
   * - if big => set the localStorage to bigger and add a bigger font theme class to body
   * - if bigger => set the localStorage to normal and remove bigger theme class from body
   * @private
   */
  function _changeFontSize() {
    switch(localStorage.getItem('font')) {
      case 'normal':
        localStorage.setItem('font', 'big');
        wrapBody.classList.add('t-fontbig');
        fontSizeCount.innerHTML = 'x2';
        break;
      case 'big':
        localStorage.setItem('font', 'bigger');
        wrapBody.classList.remove('t-fontbig');
        wrapBody.classList.add('t-fontbigger');
        fontSizeCount.innerHTML = 'x3';
        break;
      case 'bigger':
        localStorage.setItem('font', 'normal');
        wrapBody.classList.remove('t-fontbigger');
        fontSizeCount.innerHTML = 'x1';
        break;
      default:
        console.log(`Sorry, we are out of ${this.dataset.command}.`);
    }
  }

  /**
   * Close modal window when visible
   * 
   * @param {Object} modalContainer the modal window
   * @param {Object} modalClose the modal close button
   * @private
   */
  function _closeViewModal(modalContainer, modalClose) {
    modalClose.addEventListener('click', function(e) {
      modalContainer.style.display = 'none';
    }, false)

    modalContainer.addEventListener('click', function(e) {
      modalContainer.style.display = 'none';
    }, false)
  }

  /*** @public ***/

  function commandsListener(commandClass) {
    _commandsListener(commandClass);
  }

  function getSettings(activeTheme, activeFont) {
    _getSettings(activeTheme, activeFont);
  }

  function closeViewModal(modalContainer, modalClose) {
    _closeViewModal(modalContainer, modalClose);
  }

  return {
    commandsListener: commandsListener,
    getSettings: getSettings,
    closeViewModal: closeViewModal
  };
})();
