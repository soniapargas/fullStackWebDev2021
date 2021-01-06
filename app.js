// https://nodejs.org/en/docs/guides/getting-started-guide/
// this is a single line comment
/**
 * This is a multi-line
 */
/*
  This is also  mulitline
*/
// var
// const = constant
// uire is a function
// funtion is a piece of reusable code, that accepts any number of paratmeters
// functions usually return values
// this is a special function that node provides

// get the http module
// const http = require('http');

// // create constant variable equal to string '127.0.0.1'
// const hostname = '127.0.0.1';
// // create constant variable equalt to integer 3000
// const port = 3000;
// // 127.0.0.1:300

// // create local server
// // 'reference' the http variable
// // function createServer(callBackFunction) {
// // # there's some custom code here
// // }
// // pointer functions look like this () => {}
// const server = http.createServer(
//   (request, response) => {
//     response.statusCode = 200; // 200 good, ok
//     response.setHeader('Content-Type', 'text/plain'); // 
//     response.end('Hello World');
//   })
// ;

// server.listen(port, hostname, () => {
//   // format strings ``
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//  $ npm install express
var express = require('express'),
app = express(); 

// these routes point to physical folders in your project
// ROUTES:
app.use(
  '/', 
  express.static(__dirname + '/') // index.html
);

app.use(
  '/hello', 
  express.static(__dirname + '/hello.html')
);

app.use('/hola', 
  express.static(__dirname + '/test.html')
);

app.use(
  '/some-other-asdfasdf/here',
  express.static(__dirname + '/subfolder/index.html')
);
// END: ROUTES


const portNumber = 3001;
app.listen(portNumber, () =>  {
  console.log(`Server running at http://127.0.0.1:${portNumber}/`);
});