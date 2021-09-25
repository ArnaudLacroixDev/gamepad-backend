const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    unique: true,
    type: String,
  },
  account: {
    username: {
      required: true,
      type: String,
    },
    //   avatar: mongoose.Schema.Types.Mixed, // A implémenter plus tard
  },
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;
