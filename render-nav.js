for (let page of pages) {
    if (page.isMain) {
        wrapHeaderNav.innerHTML += '<a\
        class="nav__link"\
        href="'+page.href+'"\
        aria-label="'+page.label+'"\
        data-template="'+page.templatePath+'"\
        target="_top">\
        '+page.name+'\
        </a>';
    } else {
        wrapFooterNav.innerHTML += '<a\
        class="nav__link"\
        href="'+page.href+'"\
        aria-label="'+page.label+'"\
        data-template="'+page.templatePath+'"\
        target="_top">\
        '+page.name+'\
        </a>';
    }
}

for (let externalLink of externalLinks) {
    wrapFooterNav.innerHTML += '<a\
    class="nav__link--external"\
    href="'+externalLink.href+'"\
    aria-label="'+externalLink.label+'"\
    data-template="'+externalLink.templatePath+'"\
    target="_blank">\
    '+externalLink.name+'\
    </a>';
}
