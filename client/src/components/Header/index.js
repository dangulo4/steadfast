import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <form>
        <div
          style={{
            height: 100,
            clear: 'both',
            paddingTop: 30,
            textAlign: 'left',
          }}
          className="form-group"
        >
          <h3>Find contacts and leads fast. Get back to business</h3>
        </div>
      </form>
    );
  }
}
export default Header;
