/**
 * CONTROLLER FOR:
 * PRIVACY PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

new Promise((resolve, reject) => {
  let startAtAnchor = 'info-type'; // The id of the the first visible container for the nav

  // If sidenav, related contents container and default anchor to target exist
  if (document.getElementById('sidenav') && document.getElementById('recommended') && document.getElementById(startAtAnchor)) {
    moduleNav.buildNavList(document.getElementById('recommended'), [{
      name: 'Sitemap',
      label: 'Go to sitemap page',
      get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
      get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
    },{
      name: 'Terms',
      label: 'Go to terms and conditions page',
      get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
      get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
    }]);
    // Detect the links and build their navigation listener
    resolve(startAtAnchor);
  } else {
    // Will listen to the links across the page in all cases
    reject('Sidenav element does not exist')
  }
})
.then(startAtAnchor => {
  moduleViewRenderer.getViewSidebar(); // toggle side menu
  moduleRouter.hashListener('js-link--hash', startAtAnchor);
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link');

  // Clear the localStorage
  document.getElementById('form-data').addEventListener('submit', e => {
    e.preventDefault(); // we prevent the default submission
    if (confirm('Your settings and access tokens will be deleted. Are you happy to proceed?')) localStorage.clear();
  });
})
