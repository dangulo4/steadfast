import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

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
      formObject.email
    ) {
      API.saveContact({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        company: formObject.company,
        email: formObject.email,
        notes: formObject.notes,
      })
        .then((res) => loadContacts())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <form>
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
                      {contact.email} at {contact.company}
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
    </Container>
  );
}

export default Contacts;
