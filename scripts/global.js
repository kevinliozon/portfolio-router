/*** PAGES - Home page should be first ***/
const pages = [{
  name: 'About',
  label: 'Navigate to overview page',
  href: '#page=home',
  templatePath: '/pages/home',
  isMain: true,
  isVisible: true
}, {
  name: 'About',
  label: 'Navigate to this page to learn more about my education, previous roles and ethics',
  href: '#page=about',
  templatePath: '/pages/about',
  isMain: true,
  isVisible: false
}, {
  name: 'Case studies',
  label: 'Navigate to this page to see some case studies from previous projects',
  href: '#page=projects',
  templatePath: '/pages/projects',
  isMain: true,
  isVisible: true
}, {
  name: 'Contact',
  label: 'Navigate to contact page',
  href: '#page=contact',
  templatePath: '/pages/contact',
  isMain: true,
  isVisible: true
}, {
  name: 'Sitemap',
  label: 'Navigate to the sitemap page',
  href: '#page=sitemap',
  templatePath: '/pages/sitemap',
  isMain: false,
  isVisible: true
}, {
  name: 'Cookies',
  label: 'Navigate to this page to learn more about this website\'s cookie policy',
  href: '#page=cookie',
  templatePath: '/pages/cookie',
  isMain: false,
  isVisible: true
}, {
  name: 'Terms',
  label: 'Navigate to this page to learn more about terms and conditions.',
  href: '#page=terms',
  templatePath: '/pages/terms',
  isMain: false,
  isVisible: true
}];

/*** EXTERNAL LINKS ***/
const externalPages = [{
  name: 'LinkedIn',
  label: 'Open a new tab and see my profile on Linkedin',
  href: 'https://www.linkedin.com/in/kevin-liozon-39117bb3',
  isVisible: true
}, {
  name: 'Github',
  label: 'Open a new tab and see my profile on Github',
  href: 'https://github.com/kevinliozon',
  isVisible: true
}, {
  name: 'Stackshare',
  label: 'Open a new tab and see my profile on Stackshare',
  href: 'https://stackshare.io/kevinliozon/lead-product-designer-stack',
  isVisible: true
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

/*** PROJECTS LIST ***/
const projects = [{
  id: 'p1',
  name: 'Project 1',
  label: 'Show all projects',
  filters: 'is-content  is-personal',
  themes: ['Design systems', 'consistency'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}, {
  id: 'p2',
  name: 'Project 2',
  label: 'Show all projects',
  filters: 'is-content is-tech',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}, {
  id: 'p3',
  name: 'Project 3',
  label: 'Show all projects',
  filters: 'is-content is-featured',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}, {
  id: 'p4',
  name: 'Project 4',
  label: 'Show all projects',
  filters: 'is-content is-featured',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}];
