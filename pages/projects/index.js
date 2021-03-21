/**
 * CONTROLLER FOR:
 * PROJECTS PAGE
 * 
 * This script will replace the previous page's controller thanks to _getPageController()
 * in router module
 */

// Building the navigation listener
moduleRouter.linksListener('js-link--content');

moduleViewRenderer.getViewTemplate('/projects/project1', document.getElementById('project1'));
//moduleViewRenderer.getViewTemplate('/projects/project2', document.getElementById('project2'));
