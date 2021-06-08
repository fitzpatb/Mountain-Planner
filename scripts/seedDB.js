const mongoose = require("mongoose");
const db = require("../models");
console.log(process.env)
mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/mountains", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);


const userSeed = [
  {
    firstname: "Steve",
    lastname: "Rodgers",
    username: "avengerscap",
    email: "avengersassemble@gmail.com",
    password: "vibranium"
  },
  {
    firstname: "Tony",
    lastname: "Stark",
    username: "ironman",
    email: "iloveyou3000@gmail.com",
    password: "iamironman"
  }
]

// try {
//   db.Users.create({
//     firstname: "Tony",
//     lastname: "Stark",
//     username: "ironman",
//     email: "iloveyou3000@gmail.com",
//     password: "iamironman"
//   }).then((res) => console.log("res", res));
// } catch (error) {
//   console.log(error);
// }

db.Users
  .deleteMany()
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
   })