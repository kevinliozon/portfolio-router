const routes = [{
    name: 'Home',
    path: '/'
},
{
    name: 'Projects',
    path: '/projects'
},
{
    name: 'Experiences',
    path: '/experiences'
}];

/*** COMPONENTS ***/
const navWrap = document.getElementById('#nav');
const titleWrap = document.getElementById('#title');

for (let page of routes) {
    if (window.location.href.indexOf(page.path) >= 0) {
        titleWrap.innerHTML = page.name;
    }
    //let link = '<a href="'+page.path+'/index.html" onClick="navToPage(\''+page.name+'\')">'+page.name+'</a>';
    let link = '<a href="" onClick="navToPage(\''+page.name+'\',\''+page.path+'\')">'+page.name+'</a>';
    navWrap.innerHTML += link;
}

function navToPage(name, path) {
    console.log(path)
    //titleWrap.innerHTML = name;
    //window.history.pushState(null, name, path);
    var xhr= new XMLHttpRequest();
    xhr.open('GET', window.location.pathname+path+'/index.html', true);
    console.log(path+'/index.html')
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        console.log(this.status)
        document.getElementById('wrap').innerHTML= this.responseText;
    };
}
