/**
 * CONTROLLER FOR:
 * PRIVACY PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - 
 * Final state: Building the navigation listener
 * 
 */
 new Promise((resolve, reject) => {
  if (projects) {
    resolve(projects); // We pass all the elements used for controls
  } else {
    // Will listen to the links across the page in all cases
    reject('Pojects do not exist')
  }
})
.then(result => {}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link');
})
