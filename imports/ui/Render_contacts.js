/*
  1. import as needed
  2. inside of render() - return the following:
      a. user name
      b. email
      c. user phone
      d. a button that will remove the contact from the db
*/
import React from 'react';
import {Contact_Info_Collection_Access} from './../api/contact_info.js';
import Contact_list from './Contact_list';
import App from './App.js';

export default class Render_contacts extends React.Component{

  render(){
        return (
        <>

        <ul className="format" key={this.props.contact_prop_obj._id} > <li>{this.props.contact_prop_obj.username}</li>{" "}
          <li>{this.props.contact_prop_obj.email}</li>{" "}
          <li>{this.props.contact_prop_obj.phone}</li>
             {" "}
         <button onClick={() =>{
        Contact_Info_Collection_Access.remove({_id: this.props.contact_prop_obj._id})
        }}>Delete Contact</button>

         </ul>




        </>
        );
  }


};
