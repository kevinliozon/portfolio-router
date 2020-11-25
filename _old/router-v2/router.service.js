

(function (){
    
    // Both set of different routes and template generation functions
    let routes = {};
    let templates = {};

    /*** GENERIC FUNCTIONS ***/

    // Generate DOM tree from a string
    // xmlString is the content
    let createNodeElement = (id, xmlString) => {
        wrapTemplate.innerHTML = '';
        let el = document.createElement('div'); // Node
        el.id = id;
        el.classList.add('page');
        el.innerHTML = xmlString;
        return el;
    };

    // When the template sits in a separate html
    let getTemplateFile = (path) => {
        fetch(path, { method: 'GET' })
          .then( response => response.text() )
          .then( (content) => {
              return wrapTemplate.appendChild(createNodeElement('view3', content))
            })
          .catch( error => console.error('error:', error) );
    };

    // Register a template (this is to mimic a template engine)
    let addTemplate = (name, templateFunction) => {
        return templates[name] = templateFunction;
    };

    // Define the routes. Each route is described with a route path & a template to render
    // when entering that path. A template can be a string, or a function that 
    // will directly create the DOM objects.
    let assignTemplateToRoute = (path, template) => {
        console.log(template);
        if (typeof template == "function") {
          return routes[path] = template;
        } else if (typeof template == "string") {
          return routes[path] = templates[template];
        } else {
          return;
        }
    };

    // Give the correspondent route (template) or fail
    let resolveRoute = (route) => {
        try {
            return routes[route];
        } catch (error) {
            throw new Error("The route is not defined");
        }
    };

    // The actual router, get the current URL and generate the corresponding template
    let router = (evt) => {
        const routeResolved = resolveRoute(window.location.hash.slice(1) || "/");
        routeResolved();
    };

    // For first load or when routes are changed in browser url box.
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);








    

    

    // Register the templates.
    addTemplate('home', () => {
        getTemplateFile('/index.html');
    });

    addTemplate('template-view1', () => {
        const link1 = createNodeElement('view1', "<div><h1>This is View 1 </h1><a href='../'>Go Back to Index</a></div>");
        return wrapTemplate.appendChild(link1);
    });

    addTemplate('template-view2', () => {
        const link2 = createNodeElement('view2', "<div><h1>This is View 2 </h1><a href='../'>Go Back to Index</a></div>");
        return wrapTemplate.appendChild(link2);
    });

    addTemplate('projects', () => {
        getTemplateFile('/projects/index.html');
    });

    addTemplate('project1', () => {
        getTemplateFile('/projects/project1/index.html');
    });


    // Define the mappings route->template.
    assignTemplateToRoute('/', 'home');
    assignTemplateToRoute('/view1', 'template-view1');
    assignTemplateToRoute('/view2', 'template-view2');
    assignTemplateToRoute('/projects', 'projects');
    assignTemplateToRoute('/projects/project1', 'project1');
})()
