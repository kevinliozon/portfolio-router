/*** PAGES - Home page should be first ***/
const pages = [{
  name: 'Overview',
  label: 'Navigate to overview page',
  href: '#page=home',
  templatePath: '/pages/home',
  isMain: true
}, {
  name: 'About',
  label: 'Navigate to this page to learn more about my education, previous roles and ethics',
  href: '#page=about',
  templatePath: '/pages/about',
  isMain: true
}, {
  name: 'Case studies',
  label: 'Navigate to this page to see some case studies from previous projects',
  href: '#page=projects',
  templatePath: '/pages/projects',
  isMain: true
}, {
  name: 'Contact',
  label: 'Navigate to contact page',
  href: '#page=contact',
  templatePath: '/pages/contact',
  isMain: true
}, {
  name: 'Sitemap',
  label: 'Navigate to the sitemap page',
  href: '#page=sitemap',
  templatePath: '/pages/sitemap',
  isMain: false
}, {
  name: 'Cookie policy',
  label: 'Navigate to this page to learn more about this website\'s cookie policy',
  href: '#page=cookie',
  templatePath: '/pages/cookie',
  isMain: false
}, {
  name: 'Terms & Conditions',
  label: 'Navigate to this page to learn more about terms and conditions.',
  href: '#page=terms',
  templatePath: '/pages/terms',
  isMain: false
}];

/*** EXTERNAL LINKS ***/
const externalPages = [{
  name: 'Email me',
  label: 'Open your email application to contact me via email',
  href: 'mailto:kevinliozonpro@gmail.com'
}, {
  name: 'LinkedIn',
  label: 'Open a new tab and see my profile on Linkedin',
  href: 'https://www.linkedin.com/in/kevin-liozon-39117bb3'
}, {
  name: 'Github',
  label: 'Open a new tab and see my profile on Github',
  href: 'https://github.com/kevinliozon'
}, {
  name: 'Stackshare',
  label: 'Open a new tab and see my profile on Stackshare',
  href: 'https://stackshare.io/kevinliozon/lead-product-designer-stack'
}];

/*** SIDENAVS FRAGMENTS ***/
const projectFragments = [{
  name: 'Specifics',
  label: 'Move to section about the specifics',
  href: '#specifics',
  hash: 'specifics'
}, {
  name: 'Problem',
  label: 'Move to section about the problem',
  href: '#problem',
  hash: 'problem'
}, {
  name: 'Solution',
  label: 'Move to section about the solution',
  href: '#solution',
  hash: 'solution'
}, {
  name: 'Results',
  label: 'Move to section about results',
  href: '#results',
  hash: 'results'
}];
