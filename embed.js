var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo");

// POST
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// CREATING NEW USER
// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "how to bre polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it!"
// });
// newUser.save(function(err, user) {
//   if (err) {
//     console.log("error!");
//   } else {
//       console.log(user);
//   }
// });

// CREATING NEW POST
// var newPost = new Post({
//   title: "reflections on apples",
//   content: "They are delicious"
// });
// newPost.save(function(err, post) {
//   if (err) {
//     console.log("error");
//   } else {
//       console.log(post);
//   }
// });

User.findOne({ name: "Hermione Granger" }, function(err, user) {
  if (err) {
    // console.log("error!");
  } else {
    user.posts.push({
      title: "3 things i hate",
      content: "voldemort, voldemort, voldemort"
    });
    user.save(function(err, user) {
      if (err) {
        console.log("error!");
      } else {
        console.log(user);
      }
    });
  }
});

console.log("server running!");
