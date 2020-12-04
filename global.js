/*** PAGES ***/
const pages = [{
    name: 'Home',
    label: 'Navigate to home page',
    href: '?page=home',
    templatePath: '/home'
}, {
    name: 'About & ethics',
    label: 'Learn more about my education, previous roles and ethics',
    href: '?page=about',
    templatePath: '/about'
}, {
    name: 'Case studies',
    label: 'See some case studies from previous projects',
    href: '?page=projects',
    templatePath: '/projects'
}, {
    name: 'Driving change',
    label: 'Read about a change management case study',
    href: '?page=change',
    templatePath: '/change'
}];

/*** CONTAINERS ***/
const wrapTemplate = document.getElementById('wrap');
const wrapHeaderNav = document.getElementById('header-nav');
const wrapFooterNav = document.getElementById('footer-nav');
