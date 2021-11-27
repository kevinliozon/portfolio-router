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
          default:
            console.log(`Sorry, we are out of ${this.dataset.command}.`);
        }
      }, false)
    })
  }

  /**
   * On load or refresh:
   * - Build the header and footer navs as well as their respective listeners
   * - Call the template
    * @private
   */
  function _scrollToTop() {
    if (isIE()) {
      window.scrollTo(0);
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
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
