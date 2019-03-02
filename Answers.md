1. Explain the differences between `client-side routing` and `server-side routing`.

Routing is the way we navigate through websites/webapps. When we route to a URL in the web browser, the website sends a request for info from a server. The data then gets sent to the browser, and the browser can then render that data on the page. Server-side routing handles and achieves all of this on the server. This causes the whole page to refresh/re-render every time the user routes to another part of the website. Client-side routing uses JavaScript to store all of the different routes in browser memory, and only refreshes/re-renders the components that change.

2. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers?

CRUD operation | HTTP method:
- "C"reate : POST => an HTTP method that sends a request for the server/API to create/store new data
- "R"ead : GET => an HTTP method that sends a request to fetch data that is stored on the server/API.
- "U"pdate : PUT => an HTTP method that sends a body of data to be compared to the current value of that data on the server/API and have the new/different data be updated.
- "D"estroy : DELETE => an HTTP method that sends a request for data stored on a specific endpoint on the server/API to be deleted/destroyed.

3. Mention three tools we can use to make AJAX requests.

The AJAX acronym originally stood for `Asynchronous JavaScript and XML`. AJAX is not a tool or programming language. It is a concept/mindset. AJAX is "the method of exchanging data with a server, and updating parts of a web page without reloading the entire page." One way to do this is through a function that uses a Promise object to run code asynchronously. Another way is to use the `fetch()` method to make HTTP requests asynchronously. Finally, another way to make AJAX requests is by using third party libraries, like Axios, that have methods that make asynchronous HTTP requests. All of these methods use Promises to run code asynchronously that makes HTTP requests to manipulate data on a server/web API.