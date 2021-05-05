/*
  1. in render_all_contacts() - use .map to iterate through each contact
  2. inside of the iteration return the Render_contacts component which had
      each contact passed to it as a prop
*/
import React from 'react';
import Render_contacts from './Render_contacts.js';
import PropTypes from 'prop-types';
import App from './App.js';

export default class Contact_list extends React.Component {
  render_all_contacts(){

  return this.props.passedContacts.map((contact) =>{
    return <Render_contacts key={contact._id} contact_prop_obj={contact}/>
  });
}
  render(){
    return (
      <>
        {this.render_all_contacts()}
      </>
    )
  }

};
Contact_list.propTypes = {
 passedContacts: PropTypes.array.isRequired,
};
