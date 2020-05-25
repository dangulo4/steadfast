import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <form>
        <div
          style={{
            height: 200,
            clear: 'both',
            paddingTop: 50,
            textAlign: 'left',
          }}
          className="form-group"
        >
          <label htmlFor="search">
            <h3>Find contacts and leads fast. Get back to business</h3>
          </label>

          <br></br>
        </div>
      </form>
    );
  }
}
export default Header;
