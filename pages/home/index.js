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
  moduleViewRenderer.imagesListener(wrapTemplate, wrapModal); // Building the images listener

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
            target="_top">'+project.name+'</a>\
          </h3>\
        </header>\
        <footer class="c-cell__footer">\
          <ul id="badges-'+project.id+'" class="l-list"></ul>\
          <p class="c-cell__d">'+project.desc+'</p>\
        </footer>\
      </div>\
      <figure class="c-cell__fig">\
        <img src="'+project.img+'" alt="'+project.imgAlt+'" class="c-cell__img">\
      </figure>\
    </article>';
    
    moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-'+project.id));
  }

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
            target="_top">'+project.name+'</a>\
          </h3>\
        </header>\
        <footer class="c-slide__footer">\
          <ul id="badges-'+project.id+'" class="l-list"></ul>\
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

    slideIndex++; // first slide is 1, +1 for each additional one

    moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-'+project.id));
  }

  for (let brand of brands) {
    document.getElementById('brands').innerHTML += '\
    <figure id="brand-'+brand.id+'" class="c-fig c-section__i">\
      <img src="'+brand.img+'" alt="'+brand.imgAlt+'" class="c-fig__img">\
      <figcaption class="c-fig__c">'+brand.name+'</figcaption>\
    </figure>';
  }
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link--content');
  let prevBtn = document.getElementById('sliderPrev');
  let nextBtn = document.getElementById('sliderNext');
  moduleViewRenderer.getViewSlide(selectedSlideIndex); // default thumbnail selected
  console.log(selectedSlideIndex)
  prevBtn.disabled = true; // when page load, prev button is disabled

  let slideThumbs = document.querySelectorAll('.c-slideselector__btn'); // Get a NodeList of all .c-slide elements
  let slideThumbActive = document.body.querySelector('.c-slideselector__btn[data-slideindex="'+selectedSlideIndex+'"]'); // Get the slide with equivalent index
  slideThumbActive.classList.add('u-active'); // when page load, first item is active

  prevBtn.addEventListener('click', e => {
    console.log(selectedSlideIndex)
    // We can go to previous as long as the first slide is not selected
    if (selectedSlideIndex > 1) {
      console.log(selectedSlideIndex)
      nextBtn.disabled = false;
      selectedSlideIndex -= 1;

      

      slideThumbs.forEach(slideThumb => slideThumb.classList.remove('u-active')); // all images are not active anymore
      slideThumbActive = document.body.querySelector('.c-slideselector__btn[data-slideindex="'+selectedSlideIndex+'"]');  // Get the slide with equivalent index

      slideThumbActive.classList.add('u-active'); // selected image is active

      if (selectedSlideIndex <= 1) {
        prevBtn.disabled = true; // if first slide, prev button is disabled
      }
      moduleViewRenderer.getViewSlide(selectedSlideIndex);
    } else {
      console.log('fails',selectedSlideIndex)
      prevBtn.disabled = true;
    }
  });

  nextBtn.addEventListener('click', e => {
    console.log(selectedSlideIndex)
    // we use the number of thumbnails as a reference for the max number of slides
    // As long as index below that value then we can go to the next
    if (selectedSlideIndex < document.querySelectorAll('.c-slideselector__btn').length) {
      prevBtn.disabled = false;
      selectedSlideIndex +=1;

      slideThumbs.forEach(slideThumb => slideThumb.classList.remove('u-active')); // all images are not active anymore
      slideThumbActive = document.body.querySelector('.c-slideselector__btn[data-slideindex="'+selectedSlideIndex+'"]');  // Get the slide with equivalent index
      slideThumbActive.classList.add('u-active'); // selected image is active

      if (selectedSlideIndex >= document.querySelectorAll('.c-slideselector__btn').length) {
        nextBtn.disabled = true; // if last slide, next button is disabled
      }
      moduleViewRenderer.getViewSlide(selectedSlideIndex);
    } else {
      nextBtn.disabled = true;
    }
  });



  /*var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    console.log('link')
    // Array with all navigation links
    Array.from(document.getElementsByClassName('column')).forEach((link) => {
        console.log(link)
      // Event listener on each link
      link.addEventListener('click', function(e) {
        console.log(link, link.dataset.slide)
        showSlides(slideIndex = link.dataset.slide);
        //This prevents the browser from actually following the default link
        e.stopPropagation();
        e.preventDefault();
      }, false)
    })

    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }*/
})
