/**
 * CONTROLLER FOR:
 * TERMS AND CONDITIONS PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

new Promise((resolve, reject) => {
  if (document.getElementById('sidenav') && document.getElementById('recommended')) {
    moduleNav.buildNavList(document.getElementById('recommended'), [{
      name: 'Sitemap',
      label: 'Go to sitemap page',
      get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
      get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
    },{
      name: 'Privacy',
      label: 'Go to terms and conditions page',
      get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
      get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
    }]);
    // Detect the links and build their navigation listener
    resolve();
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
