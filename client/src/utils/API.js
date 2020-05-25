import axios from 'axios';

const APIKey = 'a93bc93acd1ba3cc69a1814f7ee909396256fca3';
const API_URL = 'https://api.hunter.io/v2/domain-search?domain=';

export default {
  search: function (query) {
    return axios.get(API_URL + query + '&api_key=' + APIKey);
  },
};
