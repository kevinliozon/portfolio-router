const moduleViewRenderer = (() => {
    /**
     * Populate the wrapView element with the targeted HTML template
     * 
     * @param {String} activeTemplate The relative path to the template
     * @param {Object} wrapView The element where the content should be injected
     */
    function _getViewTemplate (activeTemplate, wrapView) {
        wrapView.innerHTML = 'loading...';

        fetch(activeTemplate, { method: 'GET' })
            .then( response => {
                if(response.status !== 404) {
                    return response.text(); // turn HTML response into a string
                } else {
                    return wrapView.parentNode.removeChild(wrapView); // remove the container of the non-existant content
                }
            } )
            .then( (content) => {
                    return wrapView.innerHTML = content;
            })
            .catch( (error) => console.error('error:', error));
    }

    /*** PUBLIC METHODS ***/

    function getViewTemplate(activeTemplate, wrapView) {
        _getViewTemplate(activeTemplate, wrapView);
    }

    return {
        getViewTemplate: getViewTemplate
    };
})();
