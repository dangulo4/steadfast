import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Clients from './pages/Clients';
import NoMatch from './pages/NoMatch';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Seach from './utils/API';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Col from './components/Col';
import './App.css';

class App extends React.Component {
  state = { users: [], search: '' };

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
          <Col size="md-4">
            <Seach></Seach>
            <Header>
              <h1>This is the Header for Steadfast</h1>
            </Header>
          </Col>
          <Jumbotron>
            <Col size="md-12">
              <div className="container">
                <h2>This is a place holder for our Steadfast App</h2>
              </div>
            </Col>
          </Jumbotron>
        </div>
      </Wrapper>
    );
  }
}
export default App;
