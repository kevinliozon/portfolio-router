/**
 * Populate the wrapTemplate element with the targeted HTML template
 * 
 * @param {String} activeTemplate Path to the template
 */
function getTemplate (activeTemplate) {
    fetch(activeTemplate, { method: 'GET' })
        .then( response => response.text() )
        .then( (content) => {
                return wrapTemplate.innerHTML =  content
        })
        .catch( error => console.error('error:', error) );
}

window.addEventListener('load', (eventLoad) => {

    (history && history.state) ? getTemplate(history.state.template) : getTemplate('/home'); // If no history, fallback onto home page

    Array.from(document.getElementsByClassName('nav__link')).forEach((navLink) => {
        navLink.addEventListener('click', function (e) {
            relativePath = this.dataset.template;

            getTemplate(relativePath);
        
            //This is where we update the address bar with the 'url' parameter
            window.history.pushState({page: navLink.text, template: relativePath}, navLink.text, this.href);
            document.title = navLink.text; // defines tab title
        
            //This stops the browser from actually following the link
            e.preventDefault();
            e.stopPropagation();
        
        }, false)
    })
});
