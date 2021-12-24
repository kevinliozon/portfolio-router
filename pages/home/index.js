/**
 * CONTROLLER FOR:
 * HOME PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates projects as links
 * Final state: Building the navigation listener
 * 
 */
 new Promise((resolve, reject) => {
  if (projectsHome) {
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Filters element do not exist')
  }
})
.then(result => {
  for (let project of projectsHome) {
    document.getElementById('grid').innerHTML += '\
    <article class="c-cell c-cell--lg u-radius">\
      <div class="c-cell__info">\
        <header class="c-cell__header">\
          <h3 class="c-cell__title">\
            <a class="js-link--content c-cell__link"\
            href="'+project.href+'"\
            aria-label="'+project.label+'"\
            data-template="'+project.templatePath+'"\
            target="_top">'+project.name+'</a>\
          </h3>\
        </header>\
        <footer class="c-cell__footer">\
          <ul id="badge-'+project.id+'" class="l-list"></ul>\
          <p>'+project.desc+'</p>\
        </footer>\
      </div>\
      <figure class="c-cell__fig">\
        <img src="'+project.img+'" alt="'+project.imgAlt+'" class="c-cell__img">\
      </figure>\
    </article>';
    moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badge-'+project.id));
  }
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link--content');
})
