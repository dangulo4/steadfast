import React from 'react';
import NavBar from './components/Navbar';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  state = { users: [], search: '' };

  render() {
    return (
      <>
        <NavBar></NavBar>
        <Header>
          <h1>This is the Header for Steadfast</h1>
        </Header>
        <div className="container">
          <h2>This is a place holder for our Steadfast App</h2>
        </div>
      </>
    );
  }
}
export default App;
