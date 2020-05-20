import React from 'react';

function Header(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">
          Find contacts and leads fast. Get back to business
        </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Company"
          id="search"
        />
        <p>
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Get Started
          </button>
        </p>
      </div>
    </form>
  );
}
export default Header;
