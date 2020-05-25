import React from 'react';
import ContactCard from '../components/ContactCard';
import SearchForm from '../components/SeachForm';
import Wrapper from '../components/Wrapper';
import Col from '../components/Col';
import API from './API';
import './App.css';

class Contacts extends React.Component {
  state = { results: [], search: '' };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          results: res.data.emails.map((e, i) => ({
            firstName: e.data.emails.first_name,
            lastName: e.data.emails.last_name,
            email: e.data.emails.value,
            phone: e.data.emails.phone_number,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchContacts = (filter) => {
    console.log('Search', filter);
    const filteredList = this.state.results.filter((contacts) => {
      // merge data together, then check to see if employee exists
      let values = Object.values(contacts).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    // Update the employee list with the filtered value
    this.setState({ results: filteredList });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('Handle ', this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Button Clicked', this.state.search, e);
    this.searchContacts(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Col size="md-4">
              <h2>Contact Directory</h2>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>

          <div className="row">
            <Col size="md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Organization</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                  </tr>
                </thead>
                {[...this.state.results].map((item) => (
                  <ContactCard
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                  />
                ))}
              </table>
            </Col>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Contacts;
