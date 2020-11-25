for(let navLink of document.getElementsByClassName('nav__link')) {
    navLink.addEventListener('click', function (e) {
        url = this.attr("href");
    
        fetch(url, { method: 'GET' })
              .then( response => $("#wrap").html(response) )
              .catch( error => console.error('error:', error) );
    
        //This is where we update the address bar with the 'url' parameter
        window.history.pushState('projects', 'My projects', url);
    
        //This stops the browser from actually following the link
        e.preventDefault();
    
    }, false)
}
