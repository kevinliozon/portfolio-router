/**
 * CONTROLLER FOR:
 * PROJECTS PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates projects as links
 * Final state: Building the navigation listener
 * 
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
    if (project.isVisible) {
      document.getElementById('grid').innerHTML += '\
      <article id="project-'+project.id+'" class="c-cell is-filtered u-radius '+project.filters+'">\
        <aside class="c-cell__feat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-20.69 165.94l-184 184a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.75l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63z" class="c-btn__ico"/><path d="M195.31 381.94a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.74l150.06-150a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63l-184 184z" class="c-btn__ico--alt"/></svg></aside>\
        <div class="c-cell__info">\
          <header class="c-cell__header">\
            <h3 class="c-cell__title">\
              <a class="js-link--content c-cell__link"\
              href="'+project.href+'"\
              aria-label="'+project.label+'"\
              data-template="'+project.templatePath+'"\
              target="_top">'+project.name+'</a>\
            </h3>\
            <aside class="c-cell__type u-radius"><img src="/assets/icons/'+project.type+'.svg" alt="Case study about '+project.type+'" class="c-cell__icn"></aside>\
          </header>\
          <footer class="c-cell__footer">\
            <ul id="badges-'+project.id+'" class="l-list"></ul>\
            <p class="c-cell__d">For: '+project.beneficiary+'</p>\
            <p class="c-cell__d">'+project.desc+'</p>\
          </footer>\
        </div>\
        <figure class="c-cell__fig">\
          <img src="'+project.img+'" alt="'+project.imgAlt+'" class="c-cell__img">\
        </figure>\
      </article>';
      moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-'+project.id));
    }
  }
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link--content');
})

//moduleViewRenderer.getViewTemplate('/projects/project1', document.getElementById('project1'));
//moduleViewRenderer.getViewTemplate('/projects/project2', document.getElementById('project2'));
