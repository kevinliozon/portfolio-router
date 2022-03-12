/**
 * CONTROLLER FOR:
 * CONTACT PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates controls for contact form
 * Final state: Building the navigation listener
 * 
 */


const contactForm = document.getElementById('form-contact');
let emailField = document.getElementById('form-email');

new Promise((resolve, reject) => {

  // The form exists
  if (contactForm) {
    resolve(); // We pass all the elements used for controls
  } else reject('Contact form does not exist');
})
.then(result => {
  // When clicking the button to prefill with @gmail.com
  document.getElementById('btn-email').addEventListener('click', e => {
    emailField.value = emailField.value + '@gmail.com';
  })

  // validate form on submit
  contactForm.addEventListener('submit', e => {
    if (!contactForm.checkValidity()) {
      // form is invalid - cancel submit
      e.preventDefault(); // we prevent the default submission
      e.stopImmediatePropagation();
      const fields = contactForm.querySelectorAll(':invalid');
      // Assigns the is-invalid class to all elements marqued as :invalid
      for (let field of fields) field.classList.add('is-invalid');
    } else if (contactForm.checkValidity()) {
      if (confirm('This email will be sent to me. Are you happy to proceed?')) {
        contactForm.submit();
      }
    }
  });

  // Confirmation alert before resetting form
  contactForm.addEventListener('reset', e => {
    if (confirm('You are about to reset the whole form. Are you happy to proceed?')) {
      contactForm.reset();
    } else {
      e.preventDefault(); // we prevent the default reset
      e.stopImmediatePropagation();
    }
  })
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link');
})
