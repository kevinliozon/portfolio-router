/**
 * CONTROLLER FOR:
 * SITEMAP PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates links to projects
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
.then(result => {
  for (let project of result) {
    if (project.isVisible) {
      document.getElementById('projects-list').innerHTML += '\
      <li class="c-list__i">\
        <a class="c-link js-link"\
        href="'+project.href+'"\
        aria-label="'+project.label+'"\
        data-template="'+project.templatePath+'"\
        target="_top">'+project.name+'</a>\
      </li>';
    }
  }
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link');
})
