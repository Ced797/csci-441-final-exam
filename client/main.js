/*
  1. add to imports as needed
  2. in Tracker.autorun, create a variable that contains all of the contact info found in the db
  3. use ReactDOM to render the App component in the 'content' section of the html
      - all of the contact is to be passed as a prop to the App component

*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import PropTypes from 'prop-types';
import App from './../imports/ui/App.js';
import {Contact_Info_Collection_Access} from './../imports/api/contact_info.js';
import './main.html';

Meteor.startup(() =>  {



  Tracker.autorun(() => {

    const contact = Contact_Info_Collection_Access.find().fetch();


ReactDOM.render(<App
    passedAllContacts={contact}/>,
    document.getElementById('content'));
  });

});
