import axios from 'axios';

const API_URL = 'https://api.hunter.io/v2/domain-search?domain=';

export default {
  search: function (query) {
    return axios.get(
      API_URL + query + '&api_key=' + process.env.REACT_APP_API_KEY
    );
  },
  // Get all contacts
  getContacts: function () {
    return axios.get('/api/contacts');
  },
  // Gets the contact with the given id
  getContact: function (id) {
    return axios.get('/api/contacts/' + id);
  },
  // Deletes the contact with the given id
  deleteContact: function (id) {
    return axios.delete('/api/contacts/' + id);
  },
  // Saves a contact to the database
  saveContact: function (contactData) {
    return axios.post('/api/contacts', contactData);
  },
};
