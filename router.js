/**
 * After refresh or change of page
 * Replaces existing script tag for page controller by the new page's one
 * 
 * @param {String} activeTemplate The relative path to the template
 */
async function getPageController(activeTemplate) {
    // Detect the last script in the list (previous page controller) and removes it
    let lastScriptTag = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
    lastScriptTag.parentNode.removeChild(lastScriptTag);
    
    // Create the script tag calling the controller of the new page
    let scriptTag = document.createElement('script'); // create a script tag
    scriptTag.type= 'text/javascript';
    scriptTag.defer = true; // script is loaded when the page is parsed
    scriptTag.async = false;
    scriptTag.src = activeTemplate+'/index.js'; // set the source of the script to your script

    try {
        const response = await fetch(scriptTag.src, { method: 'GET' });
        if (response.status !== 404) {
            document.body.append(scriptTag); // append the script to the DOM
        } else {
            scriptTag.src = '';
            document.body.append(scriptTag); // append the script to the DOM
        }
    } catch (error) {
        return console.error('error:', error);
    }
}

/**
 * Populate the wrapTemplate element with the targeted HTML template
 * 
 * @param {String} activeTemplate The relative path to the template
 * @param {String} activePage Name of the page
 * @param {String} activeUrl The relative url
 */
function getPageTemplate (activeTemplate, activePage, activeUrl) {
    wrapTemplate.innerHTML = 'loading...';

    fetch(activeTemplate, { method: 'GET' })
        .then( response => {
            if(response.status !== 404) {
                return response.text(); // turn HTML response into a string
            } else {
                return wrapTemplate.innerHTML = 'This page does not exist';
            }
        } ) 
        .then( (content) => {
            //This is where we update the address bar with the 'url' parameter
            window.history.replaceState({template: activeTemplate, page: activePage, url: activeUrl}, activePage, activeUrl);
            document.title = activePage; // defines tab title
            wrapTemplate.innerHTML = content;
            return getPageController(activeTemplate)
        })
        .catch( (error) => {
            console.error('error:', error);
        });
}

/**
 * On load or refresh
 */
window.addEventListener('load', (eventLoad) => {

    // Are we refreshing an existing page, otherwise we fall back onto homepage
    (history && history.state) ? 
        getPageTemplate(history.state.template, history.state.page, history.state.url) : 
        getPageTemplate('/home', 'Home', '#page=home');

    // Array with all navigation links
    Array.from(document.getElementsByClassName('nav__link')).forEach((navLink) => {
        // Event listener on each link
        navLink.addEventListener('click', function (e) {
            getPageTemplate(this.dataset.template, navLink.text, this.href);
        
            //This prevents the browser from actually following the link
            e.preventDefault();
            e.stopPropagation();
        
        }, false)
    });
});

/**
 * On change in the url
 */
window.addEventListener('hashchange', function(event){
    for (let page of pages) {
        // does this url corresponds to any of those in the pages array?
        if (location.hash === page.href) {
            return getPageTemplate(page.templatePath, page.name, page.href);
        }
    }
    return window.history.go(-1); // if no path corresponds we fall back to previous page
});
