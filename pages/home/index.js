/**
 * CONTROLLER FOR:
 * HOME PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates projects as links and brands
 * Final state: Building the navigation listener
 * 
 */
 new Promise((resolve, reject) => {
  if (projectsHome && brands) {
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Filters element do not exist')
  }
})
.then(result => {
  slideIndex = 1; // first slide is 1 - don't remove
  selectedSlideIndex = slideIndex; // reset default slide index
  moduleViewRenderer.imagesListener(wrapTemplate, wrapModal); // Building the images listener

   // generate projects in grid
  for (let project of projectsHome) {
    document.getElementById('grid').innerHTML += '\
    <article id="project-'+project.id+'" class="c-cell c-cell--lg">\
      <div class="c-cell__info">\
        <header class="c-cell__header">\
          <h3 class="c-cell__title">\
            <a class="js-link--content c-cell__link"\
            href="'+project.href+'"\
            aria-label="'+project.label+'"\
            data-template="'+project.templatePath+'"\
            data-name="'+project.name+'"\
            target="_top">'+project.label+'</a>\
          </h3>\
        </header>\
        <footer class="c-cell__footer">\
          <ul id="badges-'+project.id+'" class="c-list"></ul>\
          <p class="c-cell__d">'+project.desc+'</p>\
        </footer>\
      </div>\
      <figure class="c-cell__fig">\
        <img src="'+project.img+'" alt="'+project.imgAlt+'" class="c-cell__img">\
      </figure>\
    </article>';
    
    moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-'+project.id)); // generate badges
  }

  // generate projects in carousel
  for (let project of projectsCarousel) {
    document.getElementById('carouselSlider').innerHTML += '\
    <article id="slide-'+project.id+'" class="c-slide" data-slide="'+ slideIndex +'">\
      <div class="c-slide__info">\
        <header class="c-slide__header">\
          <h3 class="c-slide__title">\
            <a class="js-link--content c-slide__link"\
            href="'+project.href+'"\
            aria-label="'+project.label+'"\
            data-template="'+project.templatePath+'"\
            data-name="'+project.name+'"\
            target="_top">'+project.label+'</a>\
          </h3>\
        </header>\
        <footer class="c-slide__footer">\
          <ul id="badges-'+project.id+'" class="c-list"></ul>\
          <p class="c-slide__d">'+project.desc+'</p>\
        </footer>\
      </div>\
      <figure class="c-slide__fig">\
        <img src="'+project.img+'" alt="'+project.imgAlt+'" class="c-slide__img">\
      </figure>\
    </article>';

    document.getElementById('carouselSelector').innerHTML += '\
    <button id="slideIndex-'+project.id+'" class="c-btn c-slideselector__btn js-img" data-slideindex="'+ slideIndex +'">\
      <img class="c-fig__img c-btn__img" src="'+project.img+'" alt="'+project.imgAlt+'">\
    </button>';

    slideIndex++; // slide increment by +1 for each additional one

    moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-'+project.id)); // generate badges
  }

  // generate brands
  for (let brand of brands) {
    document.getElementById('brands').innerHTML += '\
    <figure id="brand-'+brand.id+'" class="c-fig c-section__i">\
      <img src="'+brand.img+'" alt="'+brand.imgAlt+'" class="c-fig__img">\
      <figcaption class="c-fig__c">'+brand.name+'</figcaption>\
    </figure>';
  }
}, err => console.error('error:', err))
.finally(() => {
  /* variables */
  let prevBtn = document.getElementById('sliderPrev');
  let nextBtn = document.getElementById('sliderNext');
  let slideThumbs = document.querySelectorAll('.c-slideselector__btn'); // Get a NodeList of all .c-slide elements
  let slideThumbActive = document.body.querySelector('.c-slideselector__btn[data-slideindex="'+selectedSlideIndex+'"]'); // Get the slide with equivalent index
  let slideToDisplay = document.body.querySelector('.c-slide[data-slide="'+selectedSlideIndex+'"]');

  /* modules */
  moduleRouter.linksListener('js-link--content');
  moduleViewRenderer.getViewSlide(selectedSlideIndex, slideToDisplay); // default thumbnail selected

  /* set default */
  prevBtn.disabled = true; // when page load, prev button is disabled
  slideThumbActive.classList.add('u-active'); // when page load, first item is active

  prevBtn.addEventListener('click', e => {
    // We can go to previous as long as the first slide is not selected
    if (selectedSlideIndex > 1) {
      nextBtn.disabled = false; // enables next button
      selectedSlideIndex -= 1; // decrement of 1

      if (selectedSlideIndex <= 1) {
        prevBtn.disabled = true; // if first slide, prev button is disabled
      }

      slideToDisplay = document.body.querySelector('.c-slide[data-slide="'+selectedSlideIndex+'"]'); // update slide by dataset
      moduleViewRenderer.getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex); // highlights thumbnail
      moduleViewRenderer.getViewSlide(selectedSlideIndex, slideToDisplay); // displays slide
    } else {
      prevBtn.disabled = true;
    }
  });

  nextBtn.addEventListener('click', e => {
    // we use the number of thumbnails as a reference for the max number of slides
    // As long as index below that value then we can go to the next
    if (selectedSlideIndex < slideThumbs.length) {
      prevBtn.disabled = false; // enables prev button
      selectedSlideIndex +=1; // increment of 1

      if (selectedSlideIndex >= slideThumbs.length) {
        nextBtn.disabled = true; // if last slide, next button is disabled
      }

      slideToDisplay = document.body.querySelector('.c-slide[data-slide="'+selectedSlideIndex+'"]'); // targets slide by dataset
      moduleViewRenderer.getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex); // highlights thumbnail
      moduleViewRenderer.getViewSlide(selectedSlideIndex, slideToDisplay); // displays slide
    } else {
      nextBtn.disabled = true;
    }
  });
})
