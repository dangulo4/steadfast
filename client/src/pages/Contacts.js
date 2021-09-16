import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';

import { Link, withRouter } from 'react-router-dom';
import { Col, Row} from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';
import Page from './Page'



function Contacts() {
  // Setting our component's initial state
  const [contacts, setContacts] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all contacts and store them with setContacts
  useEffect(() => {
    loadContacts();
  }, []);

  function loadContacts() {
    API.getContacts()
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }

  // Delets a contact from the database with a given id, then reloads contacts from the db
  function deleteContact(id) {
    API.deleteContact(id)
      .then((res) => loadContacts())
      .catch((err) => console.log(err));
  }

  // Handles updateing component state the user types into the input field
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveContact method to save the contact data
  // Then reload contacts from the database
  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      formObject.firstName &&
      formObject.lastName &&
      formObject.company &&
      formObject.position &&
      formObject.email
    ) {
      API.saveContact({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        company: formObject.company,
        position: formObject.position,
        email: formObject.email,
        notes: formObject.notes,
      })
        .then((res) => loadContacts())
        .catch((err) => console.log(err));
    }
  }

  return (

    <Page title = "Contacts" >

      <Row>
        <Col size="md-6">
          <h2 className="text-center">
            Hello <strong>{localStorage.getItem('steadfastUsername')}</strong>,
            your CMS Journey is moving steady.
          </h2>
          <hr></hr>
          <form>
            <h2 className="line text-center" style = {{color: "white"}}>
              Your CMS Journey is moving steady.
            </h2>
            <hr style = {{backgroundColor: "white"}}></hr>
            <Input
              onChange={handleInputChange}
              name="firstName"
              placeholder="First Name"
            />
            <Input
              onChange={handleInputChange}
              name="lastName"
              placeholder="Last Name"
            />
            <Input
              onChange={handleInputChange}
              name="company"
              placeholder="Company Name"
            />
            <Input
              onChange={handleInputChange}
              name="position"
              placeholder="Position"
            />
            <Input
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
            />
            <TextArea
              onChange={handleInputChange}
              name="notes"
              placeholder="Notes"
            />
            <FormBtn
              disabled={
                !(
                  formObject.firstName &&
                  formObject.lastName &&
                  formObject.email &&
                  formObject.position &&
                  formObject.company
                )
              }
              onClick={handleFormSubmit}
            >
              Submit Notes
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <div>
            <h1>CMS Contact Notes:</h1>
          </div>
          {contacts.length ? (
            <List>
              {contacts.map((contact) => (
                <ListItem key={contact._id}>
                  <Link to={'/contacts/' + contact._id}>
                    <strong>
                      {contact.email} at {contact.company}, {contact.position}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteContact(contact._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Page>
  );
}

export default Contacts;
