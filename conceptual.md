### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.


- What is a single page application?
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.


- What are some differences between client side and server side routing?
With server-side routing you download an entire new webpage whenever you click on a link, with client-side routing the webapp downloads, processes and displays new data for you.

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. 


- What are two ways of handling redirects with React Router? When would you use each?
Using the History API. (When React Router renders a component, it passes 3 props: history, match and location. )

Using <Redirect /> component. Once you import the Redirect component from React Router, you can render the <Redirect /> component based on changes to the local state of the component in question.


- What are two different ways to handle page-not-found user experiences using React Router? 
Redirect the user to a different page when they try to go to a page that doesn't exist.

Use a wildcard placeholder to handle 404 page not found in React router, e.g. <Route path="*" element={<PageNotFound />} />. A route that has an asterisk path * serves as a catch all route. It only matches when no other routes do.


- How do you grab URL parameters from within a component using React Router?
The useParams hook stores info on the URL parameters.


- What is context in React? When would you use it?

Universal data across your application
Data accessible across all components

React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.

Context is useful when: 
Prop drilling / tunneling
Less repetition
Useful for global themes, shared data


- Describe some differences between class-based components and function components in React.
A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element.

There is no render method used in functional components. It must have the render() method returning JSX (which is syntactically similar to HTML)

Functional component run from top to bottom and once the function is returned it cant be kept alive.	Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.


- What are some of the problems that hooks were designed to solve?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.