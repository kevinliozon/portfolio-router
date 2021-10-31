/**
 * CONTROLLER FOR:
 * PROJECTS PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates projects as links
 * Final state: Building the navigation listener
 * todo: Make sure the const projects has been declared in global file
 */
new Promise((resolve, reject) => {
  if (projects) {
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Filters element do not exist')
  }
})
.then(result => {
  for (let project of projects) {
    document.getElementById('grid').innerHTML += '<div>\
    <a class="'+project.filters+' js-link--content"\
    href="'+project.href+'"\
    aria-label="'+project.label+'"\
    data-template="'+project.templatePath+'"\
    target="_top">\
    '+project.name+'\
    </a></div>';
  }
}, err => console.error('error:', err))
.finally(() => moduleRouter.linksListener('js-link--content'))

//moduleViewRenderer.getViewTemplate('/projects/project1', document.getElementById('project1'));
//moduleViewRenderer.getViewTemplate('/projects/project2', document.getElementById('project2'));
