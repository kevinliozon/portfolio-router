/**
 * CONTROLLER FOR:
 * PRIVACY PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

new Promise((resolve, reject) => {
  if (document.getElementById('sidenav')) {
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Sidenav element does not exist')
  }
})
.then(result => {
  moduleRouter.hashListener('js-link--hash', 'info-type');
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link');
})
