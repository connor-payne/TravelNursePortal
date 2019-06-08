import React, { Component } from "react";
import Joi from "joi-browser";
import FormInput from "./FormInput";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };



render() {
  return (
    <FormInput
    />
  );
}

}

export default Form;
