/*** PAGES - Home page should be first ***/
const pages = [{
  name: 'Home',
  label: 'Navigate to overview page',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
  isMain: true,
  isVisible: true
}, {
  name: 'About',
  label: 'Navigate to this page to learn more about my education, previous roles and ethics',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
  isMain: true,
  isVisible: false
}, {
  name: 'Projects',
  label: 'Navigate to this page to see some case studies from previous projects',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
  isMain: true,
  isVisible: true
}, {
  name: 'Contact',
  label: 'Navigate to contact page',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
  isMain: true,
  isVisible: true
}, {
  name: 'Sitemap',
  label: 'Navigate to the sitemap page',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
  isMain: false,
  isVisible: true
}, {
  name: 'Privacy',
  label: 'Privacy and cookie policy page',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
  isMain: false,
  isVisible: true
}, {
  name: 'Terms',
  label: 'Navigate to this page to learn more about terms and conditions.',
  get href() { return '#page='+this.name.replace(/\s/g, '').toLowerCase() },
  get templatePath() { return '/pages/'+this.name.replace(/\s/g, '').toLowerCase() },
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
const projectAnchors = [{
  name: 'Specifics',
  label: 'Go to specifics',
  href: '#specifics',
  target: 'specifics'
}, {
  name: 'Problem',
  label: 'Go to problem',
  href: '#problem',
  target: 'problem'
}, {
  name: 'Context',
  label: 'Go to context',
  href: '#context',
  target: 'context'
}, {
  name: 'Solution',
  label: 'Go to  solution',
  href: '#solution',
  target: 'solution'
}, {
  name: 'Outcomes',
  label: 'Go to outcomes',
  href: '#outcomes',
  target: 'outcomes'
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

/*** HOME - PROJECTS GRID ***/
const projectsHome = [{
  id: 'ph1',
  name: 'Fuse: Design process',
  label: 'Need to optimise your design process?',
  themes: ['Process', 'consistency'],
  desc: 'See how together with our product managers at Fuse we managed to nail a process that works and defines accountability for everyone.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-process',
  templatePath: '/pages/projects/fuse-process'
}, {
  id: 'ph2',
  name: 'Want to upskill your pool of design talents?',
  label: 'Want to upskill your pool of design talents?',
  themes: ['Design systems', 'consistency'],
  desc: 'We can work together towards making sure your designers stay involved and are motivated to upskills, even through periods of change.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}, {
  id: 'ph3',
  name: 'Aim to design a consistent, accessible and scalable product?',
  label: 'Aim to design a consistent, accessible and scalable product?',
  themes: ['Design systems', 'consistency'],
  desc: 'Better getting things done properly from the start. A design system will save you a lot of time down the line with its reusable components so you can focus.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}, {
  id: 'ph4',
  name: 'Not sure what tools can help your user research?',
  label: 'Not sure what tools can help your user research?',
  themes: ['Design systems', 'consistency'],
  desc: 'Basing your research on user interviews is ideal but you could make the most of these insights for your future projects.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}];

/*** HOME - PROJECTS CAROUSEL ***/
const projectsCarousel = [{
  id: 'pc1',
  name: 'Need to optimise your design process?',
  label: 'About Defining a design process',
  themes: ['Process', 'consistency'],
  desc: 'See how together with our product managers at Fuse we managed to nail a process that works and defines accountability for everyone.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-process',
  templatePath: '/pages/projects/fuse-process'
}, {
  id: 'pc2',
  name: 'Want to upskill your pool of design talents?',
  label: 'Getting the best from your people',
  themes: ['Design systems', 'consistency'],
  desc: 'We can work together towards making sure your designers stay involved and are motivated to upskills, even through periods of change.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}, {
  id: 'pc3',
  name: 'Aim to design a consistent, accessible and scalable product?',
  label: 'Building a bullet proof design system',
  themes: ['Design systems', 'consistency'],
  desc: 'Better getting things done properly from the start. A design system will save you a lot of time down the line with its reusable components so you can focus.',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse',
  templatePath: '/pages/projects/fuse'
}];

/*** PROJECTS GRID ***/
const projects = [{
  id: 'p1',
  name: 'Optimising a design process',
  label: 'Design process at Fuse',
  type: 'management',
  filters: 'is-content is-manage is-featured',
  themes: ['Design systems', 'consistency'],
  desc: 'Adapting a process for a medium sized organisation.',
  beneficiary: 'Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-process',
  templatePath: '/pages/projects/fuse-process',
  isVisible: true
}, {
  id: 'p2',
  name: 'Design systems for non-designers',
  label: 'Design systems at Fuse',
  type: 'tools',
  filters: 'is-content is-tools is-featured',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-system',
  templatePath: '/pages/projects/fuse-system',
  isVisible: true
}, {
  id: 'p3',
  name: 'Defining a career ladder',
  label: 'Career ladder at Fuse',
  type: 'documentation',
  filters: 'is-content is-doc',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-careerladder',
  templatePath: '/pages/projects/fuse-careerladder',
  isVisible: true
}, {
  id: 'p4',
  name: 'Tooling up your user research',
  label: 'User research tools at Fuse',
  type: 'projects',
  filters: 'is-content is-proj',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-researchtools',
  templatePath: '/pages/projects/fuse-researchtools',
  isVisible: true
}, {
  id: 'p5',
  name: 'Conducting an accessibility audit',
  label: 'Show all projects',
  type: 'default',
  filters: 'is-content is-manage',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-a11y',
  templatePath: '/pages/projects/fuse-a11y',
  isVisible: true
}, {
  id: 'p6',
  name: 'Designing dashboards',
  label: 'Show all projects',
  type: 'default',
  filters: 'is-content is-tools',
  themes: ['Management', 'HR', 'upskilling'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  beneficiary: 'Migros via Fuse',
  img: '/assets/img/placeholder.jpg',
  imgAlt: 'placeholder',
  href: '#page=projects/fuse-dashboards',
  templatePath: '/pages/projects/fuse-dashboards',
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

/*** NDA URLS LIST ***/

const protectedProjectsUrls = ['#page=projects/fuse-process','#page=projects/fuse'];
