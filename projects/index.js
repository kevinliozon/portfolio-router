/**
 * CONTROLLER FOR:
 * PROJECTS PAGE
 * 
 * This script will replace the previous page's controller thanks to _getPageController()
 * in router module
 */

/* On load or refresh */
window.addEventListener('load', (event) => {
    moduleViewRenderer.getViewTemplate('/projects/project1', document.getElementById('project1'));
    moduleViewRenderer.getViewTemplate('/projects/project2', document.getElementById('project2'));
});
