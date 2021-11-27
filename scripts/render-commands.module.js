const moduleCommands = (() => {
  /**
    * Is called on load
    * Set up the event listeners for the command buttons
    * @param {String} commandClass The class of the buttons we want to listen to
    * @private
    */
  function _commandsListener(commandClass) {
    // Array with all command buttons
    Array.from(document.getElementsByClassName(commandClass)).forEach((command) => {
      // Event listener on each button
      command.addEventListener('click', function(e) {
        switch(this.dataset.command) {
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
            console.log(`Sorry, we are out of ${this.dataset.command}.`);
        }
      }, false)
    })
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
        break;
      case 'big':
        localStorage.setItem('font', 'bigger');
        wrapBody.classList.remove('t-fontbig');
        wrapBody.classList.add('t-fontbigger');
        break;
      case 'bigger':
        localStorage.setItem('font', 'normal');
        wrapBody.classList.remove('t-fontbigger');
        break;
      default:
        console.log(`Sorry, we are out of ${this.dataset.command}.`);
    }
  }

  /*** @public ***/

  function commandsListener(commandClass) {
    _commandsListener(commandClass);
  }

  return {
    commandsListener: commandsListener,
  };
})();
