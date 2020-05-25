import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Clients from './pages/Clients';
import NoMatch from './pages/NoMatch';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Col from './components/Col';
import './App.css';
import { Input, TextArea, FormBtn } from './components/Form';
import { Row, Container } from './components/Grid';
import React, { useState } from 'react';
import Contacts from './utils';

function handleInputChange(event) {}

// When the form is submitted, use the API.saveBook method to save the book data
// Then reload books from the database
function handleFormSubmit(event) {
  event.preventDefault();
}

// Loads all books and sets them to books

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Router>
            <Col size="md-12">
              <NavBar>
                <Switch>
                  <Route exact path={['/', '/about']}>
                    <About />
                  </Route>
                  <Route exact path="/clients/:id">
                    <Clients />
                  </Route>
                  <Route>
                    <NoMatch />
                  </Route>
                </Switch>
              </NavBar>
            </Col>
          </Router>
          <Col size="md-12">
            <Header>
              <h1>This is the Header for Steadfast</h1>
            </Header>
            <Contacts />
          </Col>
          <Jumbotron>
            <Col size="md-12">
              <div className="container">
                <h2>This is a place holder for our Steadfast App</h2>
              </div>
            </Col>
          </Jumbotron>
        </div>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <form>
                <Input
                  onChange={handleInputChange}
                  name="fname"
                  placeholder="First Name"
                />
                <Input
                  onChange={handleInputChange}
                  name="lname"
                  placeholder="Last Name"
                />
                <Input
                  onChange={handleInputChange}
                  name="company"
                  placeholder="Company Name"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="Notes"
                  placeholder="Notes"
                />
                <FormBtn onClick={handleFormSubmit}>Submit Notes</FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Company Info</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Col size="md-12">
          <Footer>
            <br></br>
            <p>San Diego, CA | Updated 2020</p>
          </Footer>
        </Col>
      </Wrapper>
    );
  }
}
export default App;
