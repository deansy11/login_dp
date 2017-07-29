// 
// const childprocess = require('child_process');
//
// // because "bestLogger()" is a function - on index.js - that contains middleware, it has to return a function.
// module.exports = function (isLoggedIn) {
//   return function bestLoggerMiddleware(req, res, next) {
//     let message = req.query.message;
//     if(isLoggedIn) {
//       console.log("Logged In!");
//       res.render()
//       )
//     }
//     console.log(req.url, new Date(), req.query);
//     next();
//   }
// }
