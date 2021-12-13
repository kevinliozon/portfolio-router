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
    if (project.isVisible) {
      document.getElementById('grid').innerHTML += '<article class="c-cell '+project.filters+' u-radius">\
        <aside class="c-cell__feat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.53 171.5l-146.36-21.3-65.43-132.39c-11.71-23.59-45.68-23.89-57.48 0L193.83 150.2 47.47 171.5c-26.27 3.79-36.79 36.08-17.75 54.58l105.91 103-25 145.49c-4.52 26.3 23.22 46 46.48 33.69L288 439.56l130.93 68.69c23.26 12.21 51-7.39 46.48-33.69l-25-145.49 105.91-103c19-18.49 8.48-50.78-17.79-54.57zm-90.89 71l-66.05 64.23 15.63 90.86a12 12 0 0 1-17.4 12.66L288 367.27l-81.82 42.94a12 12 0 0 1-17.4-12.66l15.63-90.86-66-64.23A12 12 0 0 1 145 222l91.34-13.28 40.9-82.81a12 12 0 0 1 21.52 0l40.9 82.81L431 222a12 12 0 0 1 6.64 20.46z" class="c-btn__ico"/><path d="M437.64 242.46l-66.05 64.23 15.63 90.86a12 12 0 0 1-17.4 12.66L288 367.27l-81.82 42.94a12 12 0 0 1-17.4-12.66l15.63-90.86-66-64.23A12 12 0 0 1 145 222l91.34-13.28 40.9-82.81a12 12 0 0 1 21.52 0l40.9 82.81L431 222a12 12 0 0 1 6.64 20.46z" class="c-btn__ico--alt"/></svg></aside>\
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
        <figure class="c-cell__fig">\
          <img src="'+project.img+'" alt="'+project.imgAlt+'" class="c-cell__img">\
        </figure>\
        <footer class="c-cell__info">\
          <ul id="badge-'+project.id+'" class="l-list"></ul>\
          <p>For: '+project.beneficiary+'</p>\
          <p>'+project.desc+'</p>\
        </footer>\
      </article>';
      moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badge-'+project.id));
    }
  }
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link--content');
})

//moduleViewRenderer.getViewTemplate('/projects/project1', document.getElementById('project1'));
//moduleViewRenderer.getViewTemplate('/projects/project2', document.getElementById('project2'));
