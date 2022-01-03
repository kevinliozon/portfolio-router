/**
 * CONTROLLER FOR:
 * FUSE PROJECT PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

new Promise((resolve, reject) => {
  if (document.getElementById('sidenav')) {
    moduleNav.buildNavProject(document.getElementById('sidenav')) // Build the sidenav
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Sidenav element does not exist')
  }
})
.then(result => {
  moduleRouter.hashListener('js-link--hash');
  moduleViewRenderer.getViewBadges(['skill 1', 'skill 2', 'skill3'], document.getElementById('skills'));
  moduleViewRenderer.getViewBadges(['Process', 'Management'], document.getElementById('badges'));
  moduleViewRenderer.getViewSidebar();
}, err => console.error('error:', err))
.finally(() => moduleRouter.linksListener('js-link--content'))
