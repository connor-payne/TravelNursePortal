const config = require("../config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({

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
  license: {
    states:{
      type: Array,
      minlength: 5,
      maxlength: 50,
    }
  },
  computerSkills:{
    skill:{
      type: String
    },
    experience:{
      type: String
    }
  },
  highlights:{
    type:Array
  },
  experience:{
    type:Array
  },
  certifications:{
    type:Array
  },
  workHistory:{,
    type:Array,
    
    facilityName:{
      type:String
    },
    city:{
      type:String
    },
    state:{
      type:String
    },
    startDate:{
      type:Date
    },
    endDate:{
      type:Date,
      present:{
        type:Boolean
      }
    }
  }
});


const NurseProfile = mongoose.model("NurseProfile", userSchema);

function validateProfile(user) {
  const schema = {
    firstname: Joi.string()
      .max(50)
      .required(),
    lastname: Joi.string()
      .max(50),
      .required()
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .min(5)
      .max(255)
      .required(),
  };

  return Joi.validate(user, schema);
}

exports.NurseProfile = NurseProfile;
exports.validateProfile = validateProfile;
