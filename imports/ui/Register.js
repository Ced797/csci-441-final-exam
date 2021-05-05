/*
  1. import as needed
  2. inside of render, create a Member Registration form with three text inputs
      a. user name
      b. email
      c. phone number
  3. when someone clicks the submit button, call processFormData(event)
  4. inside of processFormData(event)
      a. obtain the name, email, and phone values
      b. if vaules were submitted - clear the form and insert the values into the db
*/
import React from 'react';
import PropTypes from 'prop-types';
import {Contact_Info_Collection_Access} from './../../imports/api/contact_info.js';
export default class Register extends React.Component{

  processFormData(event){
    event.preventDefault()

       let username = event.target.username.value;
       let email = event.target.email.value;
       let phone = event.target.phone.value;

       if(username && email && phone){

         event.target.username.value= '';
         event.target.email.value=''
         event.target.phone.value=''
       Contact_Info_Collection_Access.insert({
         username: username,
         email : email,
         phone : phone,

      });
    };
  }

  render(){
    return (

      <div className="formborder">
        <h1>Member Reigistration</h1>
          <form className="formborder" onSubmit = {this.processFormData.bind(this)}>
            <input type='text' name="username" placeholder='username'/>

            <input type='text' name="email" placeholder='email'/>

            <input type='text' name="phone" placeholder='phone'/>

              <input type="submit" placeholder="submit"/>
          </form>
        </div>
    );
  }
};
