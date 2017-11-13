var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//     email: "bob@gmail.com",
//     name: "bob belcher"
// }, function(err, user){
//     if (err) {
//         console.log("error!");
//     } else {
//         console.log(user);
//     }
// });

// Post.create({
//     title: "how to cook the best pt.3",
//     content: "adfasdfasdfasdfasdfasdfasdfh"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if (err){
//             console.log("error");
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if (err) {
//                     console.log("error");
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// FIND USER
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if (err) {
//         console.log("error");
//     } else {
//         console.log(user);
//     }
// });
// FIND ALL POSTS FOR THAT USER


console.log("server running!");
