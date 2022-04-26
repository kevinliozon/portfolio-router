/**
 * CONTROLLER FOR:
 * FUSE PROJECT PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

new Promise((resolve, reject) => {
  if (document.getElementById('sidenav')) {
    moduleNav.buildHashList(document.getElementById('sidenav'), projectAnchors) // Build the sidenav
    resolve(); // Detect the links and build their navigation listener
  } else {
    reject('Sidenav element does not exist'); // Will listen to the links across the page in all cases
  }
})
.then(result => {
  moduleRouter.hashListener('js-link--hash', 'specifics');
  moduleViewRenderer.imagesListener(wrapTemplate, wrapModal); // Building the images listener
  moduleViewRenderer.getViewBadges(['UI', 'Research', 'Data', 'WCAG standards'], document.getElementById('skills'));
  moduleViewRenderer.getViewBadges(['Data', 'Accessibility'], document.getElementById('badges'));
  moduleViewRenderer.getViewSidebar();
}, err => console.error('error:', err))
.finally(() => moduleRouter.linksListener('js-link'))
