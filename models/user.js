const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

//automatically implements username,password,salting and hashing
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
