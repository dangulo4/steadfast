import React from 'react';
import ContactCard from '../components/ContactCard';
import SearchForm from '../components/SeachForm';
import Wrapper from '../components/Wrapper';
import Col from '../components/Col';
import API from './API';
import Page from '../pages/Page'
import './App.css';

class Leads extends React.Component {
  state = { contacts: [], search: '' };

  componentDidMount() {
    this.searchContacts('hunterio.com');
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchContacts = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({
          contacts: res.data.data.emails.map((e, i) => ({
            firstName: e.first_name,
            lastName: e.last_name,
            email: e.value,
            position: e.position,
            phone: e.phone_number,
            department: e.department,
            company: res.data.data.organization,
            state: res.data.data.state,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
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
      <Page title="Search">
      <Wrapper>
        <div className="container fluid">
          <div className="row">
            <Col size="md-6">
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
                    <th>Company</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>State</th>
                  </tr>
                </thead>

                {[...this.state.contacts].map((item) => (
                  <ContactCard
                    company={item.company}
                    department={item.department}
                    position={item.position}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    state={item.state}
                    key={item.key}
                  />
                ))}
              </table>
            </Col>
          </div>
        </div>
      </Wrapper>
      </Page>
    );
  }
}

export default Leads;
