// We're using jQuery functions to make our lives loads easier
$('a').click(function(e) {
    url = $(this).attr("href");

    //This function would get content from the server and insert it into the id="content" element
    $.getJSON("/projects/index.html", {contentid : url},function (data) {
        $("#wrap").html(data);
    });

    //This is where we update the address bar with the 'url' parameter
    window.history.pushState('projects', 'My projects', url);

    //This stops the browser from actually following the link
    e.preventDefault();
});
