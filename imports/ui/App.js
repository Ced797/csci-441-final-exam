/*
  1. import as needed
  2. render the Register component and the Contact_list component
  3. obtain and pass the contact info as a prop to the Contact_list component
*/
import React from 'react';
import {Contact_Info_Collection_Access} from './../api/contact_info.js';
import PropTypes from 'prop-types';
import Register from './Register.js';
import Render_contacts from './Render_contacts';
import Contact_list from './Contact_list';


export default class App extends React.Component {
  render() {
    return (
      <>
      <div>
        <Register

        />
        <Contact_list

        passedContacts = {this.props.passedAllContacts}
        />
      </div>

      </>
    )
  }

};
App.propTypes = {
    passedAllContacts: PropTypes.array.isRequired,
};
