import axios from 'axios';
// console.log(process.env.REACT_APP_API_KEY);

const APIKey = 'a93bc93acd1ba3cc69a1814f7ee909396256fca3';
const API_URL = 'https://api.hunter.io/v2/domain-search?domain=';

export default {
  search: function (query) {
    return axios.get(API_URL + query + '&api_key=' + APIKey);
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
    return axios.delete('/api/contact/' + id);
  },
  // Saves a book to the database
  saveContact: function (contactData) {
    return axios.post('/api/contacts', contactData);
  },
};
