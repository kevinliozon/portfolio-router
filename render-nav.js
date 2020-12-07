for (let page of pages) {
    wrapHeaderNav.innerHTML += '<a class="nav__link" href="'+page.href+'" aria-label="'+page.label+'" data-template="'+page.templatePath+'">'+page.name+'</a>';
}
