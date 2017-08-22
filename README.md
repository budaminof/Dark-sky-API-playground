## Outside is / Dark Sky

 [outside-is](https://outside-is.herokuapp.com)


To run this project in development:

`` npm install ``

You will have to create an .env file with you Dark Sky API KEY, for exmaple:

`` API_KEY=jhvsdfjhvblfduvkvjvhsdbflvhdfbv ``

Then in two different tab run:

`` npm run dev ``

`` npm run server ``

To run the tests (you will have to run the server):

`` npm run test  ``

Since Webpack is building this app, during development you will need to run one tab for server and one of Webpack.


*NOTES:*

Dark Sky API disable CORS, so I setup a basic sever to do the API call.
