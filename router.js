/**
 * Populate the wrapTemplate element with the targeted HTML template
 * 
 * @param {String} activeTemplate The relative path to the template
 * @param {String} activePage Name of the page
 * @param {String} activeUrl The relative url
 */
function getTemplate (activeTemplate, activePage, activeUrl) {
    wrapTemplate.innerHTML = 'loading...';

    fetch(activeTemplate, { method: 'GET' })
        .then( response => response.text() ) // turn HTML response into a string
        .then( (content) => {
                //This is where we update the address bar with the 'url' parameter
                window.history.pushState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl);
                document.title = activePage; // defines tab title
                return wrapTemplate.innerHTML = content;
        })
        .catch( (error) => {
            console.error('error:', error);
            return wrapTemplate.innerHTML = 'This page does not exist';
        });
}

window.addEventListener('load', (eventLoad) => {

    (history && history.state) ? 
        getTemplate(history.state.template, history.state.page, history.state.url) : 
        getTemplate('/home', 'Home', '#page=home'); // If no history, fall back onto home page

    Array.from(document.getElementsByClassName('nav__link')).forEach((navLink) => {
        navLink.addEventListener('click', function (e) {
            getTemplate(this.dataset.template, navLink.text, this.href);
        
            //This stops the browser from actually following the link
            e.preventDefault();
            e.stopPropagation();
        
        }, false)
    });
});

window.addEventListener('hashchange', function(){
    for (let page of pages) {
        if (page.href === location.hash) { // does this url corresponds to any of those in the pages array?
            getTemplate(page.templatePath, page.name, page.href);
            return;
        }
    }
    getTemplate('/home', 'Home', '#page=home'); // if not, fall back onto home page
})
