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
 new Promise((resolve, reject) => {

  let formCtrls = {
    emailBtn: document.getElementById('btn-email'),
    emailSubmit: document.getElementById('btn-submit'),
    emailReset: document.getElementById('btn-reset'),
    emailInput: document.getElementById('form-email'),
    form: document.getElementById('form-contact')
  }

  if (formCtrls) {
    resolve(formCtrls); // We pass all the elements used for controls
  } else {
    // Will listen to the links across the page in all cases
    reject('Prefill email button element does not exist')
  }
})
.then(result => {
  // When clicking the button to prefill with @gmail.com
  result.emailBtn.addEventListener('click', e => {
    result.emailInput.value = result.emailInput.value + '@gmail.com';
  })

  // Confirmation alert before submitting form
  result.emailSubmit.addEventListener('click', e => {
    e.preventDefault(); // we prevent the default submission
    
    if (confirm('This email will be sent to me. Are you happy to proceed?')) {
      result.form.submit();
    }
  })

  // Confirmation alert before resetting form
  result.emailReset.addEventListener('click', e => {
    e.preventDefault(); // we prevent the default reset
    
    if (confirm('You are about to reset the whole form. Are you happy to proceed?')) {
      result.form.reset();
    }
  })
}, err => console.error('error:', err))
.finally(() => {
  moduleRouter.linksListener('js-link--content');
})
