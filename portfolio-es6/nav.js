
const routes = [{
    name: 'Home',
    path: ''
},
{
    name: 'Projects',
    path: 'projects'
},
{
    name: 'Experiences',
    path: 'experiences'
}];

/*** COMPONENTS ***/
const navWrap = document.getElementById('nav');
const titleWrap = document.getElementById('title');
const pageWrap = document.getElementById('wrap');

for (let page of routes) {
    if (window.location.href.indexOf(page.path) >= 0) {
        titleWrap.innerHTML = page.name;
    }
    //let link = '<a href="'+page.path+'/index.html" onClick="navToPage(\''+page.name+'\')">'+page.name+'</a>';
    let link = '<a href="javascript:navToPage(\''+page.name+'\',\''+page.path+'\');">'+page.name+'</a>';
    navWrap.innerHTML += link;
}

function navToPage(name, path) {
    let pageUrl = window.location+path+'/index.html';
    titleWrap.innerHTML = name;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {}
    xhr.open('GET', path+'/index.html');
    console.log(xhr)
    xhr.responseType = 'text';
    xhr.send();
    xhr.onreadystatechange= function() {
        console.log(this.responseText)
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        console.log(this.status)
        pageWrap.innerHTML= this.responseText;
    }
}