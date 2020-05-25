import React from 'react';

function Header(props) {
  return (
    <form>
      <div 
            style={{ height: 200, clear: "both", paddingTop: 50, textAlign: "left" }}
      className="form-group">
        <label htmlFor="search">
          <h3>Find contacts and leads fast. Get back to business</h3>
        </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Contact Name"
          id="search"
        />
        <br></br>
        <p>
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Find Contact
          </button>
        </p>
      </div>
    </form>
  );
}
export default Header;
