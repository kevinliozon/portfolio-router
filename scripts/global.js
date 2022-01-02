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

/*** BRANDS LIST ***/
const brands = [{
  id: 'b1',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b2',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b3',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b4',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b5',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b6',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b7',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}, {
  id: 'b8',
  name: 'Placeholder',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
}];

/*** HOME - PROJECTS LIST ***/
const projectsHome = [{
  id: 'ph1',
  name: 'Need to optimise your design process?',
  label: 'About Defining a design process',
  themes: ['Process', 'consistency'],
  desc: 'See how together with our product managers at Fuse we managed to nail a process that works and defines accountability for everyone.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-process',
  templatePath: '/pages/projects/fuse-process'
}, {
  id: 'ph2',
  name: 'Want to upskill your pool of design talents?',
  label: 'Getting the best from your people',
  themes: ['Design systems', 'consistency'],
  desc: 'We can work together towards making sure your designers stay involved and are motivated to upskills, even through periods of change.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}, {
  id: 'ph3',
  name: 'Aim to design a consistent, accessible and scalable product?',
  label: 'Building a bullet proof design system',
  themes: ['Design systems', 'consistency'],
  desc: 'Better getting things done properly from the start. A design system will save you a lot of time down the line with its reusable components so you can focus.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}, {
  id: 'ph4',
  name: 'Not sure what tools can help your user research?',
  label: 'Building a bullet proof design system',
  themes: ['Design systems', 'consistency'],
  desc: 'Basing your research on user interviews is ideal but you could make the most of these insights for your future projects.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}];

/*** PROJECTS LIST ***/
const projects = [{
  id: 'p1',
  name: 'Project 1',
  label: 'Show all projects',
  type: 'management',
  filters: 'is-content is-manage is-featured',
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
  type: 'tools',
  filters: 'is-content is-tools is-featured',
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
  type: 'documentation',
  filters: 'is-content is-doc',
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
  type: 'projects',
  filters: 'is-content is-proj',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}, {
  id: 'p5',
  name: 'Project 5',
  label: 'Show all projects',
  type: 'default',
  filters: 'is-content is-manage',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}, {
  id: 'p6',
  name: 'Project 6',
  label: 'Show all projects',
  type: 'default',
  filters: 'is-content is-tools',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}, {
  id: 'p7',
  name: 'Project 7',
  label: 'Show all projects',
  type: 'default',
  filters: 'is-content is-doc',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse',
  isVisible: true
}];
