# Simple Doctor Who API
The Simple Doctor Who API uses url endpoints to get data back from a JSON object.
This full-stack app utilizes HTML, CSS, JavaScript, Express, Node.js, MongoDB, and is deployed on Heroku.

![simple-doctor-who-api](https://user-images.githubusercontent.com/103136497/218531168-01b92dbf-1286-40dd-8931-84e22425af69.gif)

**Link to project:** https://simple-doctor-who-api.herokuapp.com/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Node.js, MongoDB, Heroku

Since JavaScript is synchronous and has access to the web apis in the environment of the browser, I wrote an async/await function for the call stack and the event loop to return a promise to the queue and render the DOM. I sprinkled in some HTML, CSS, and client-side JavaScript to listen for the click to call the function.

## Optimizations

Since DOM manipulations are costly, either in time or resources, I would improve this api with react to paint the virtual DOM and improve the aesthetics of the layout.

## Lessons Learned:

I had issues working with the api on a local server and fetching remote hosted data. This was resolved by using CORS. I learned how to create an api and make it responsive server-side and client-side. I also learned how to deploy the api using Heroku.
