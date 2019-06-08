const config = require("../config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
    required: true
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin, name: this.name },
    config.jwtPrivateKey
  );
  // console.log("token: ", token);
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    firstname: Joi.string()
      .max(50)
      .required(),
    lastname: Joi.string()
      .max(50)
      .required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
      // .regex(/^[a-zA-Z0-9]{3,30}$/)

  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
