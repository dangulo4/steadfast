import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NoMatch from './pages/NoMatch';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Col from './components/Col';
import Leads from './utils';
import './App.css';
import Detail from './pages/Detail';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Router>
            <Col size="md-12">
              <NavBar />
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/contacts/:id" component={Detail} />
                <Route exact path="/search" component={Leads} />
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
            </Col>
          </Router>
          <Col size="md-12">
            <Header>
              <h1>This is the Header for Steadfast</h1>
            </Header>
          </Col>
          <Jumbotron>
            <Col size="md-12">
              <div className="container fluid"></div>
            </Col>
          </Jumbotron>
        </div>
        <hr></hr>

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
