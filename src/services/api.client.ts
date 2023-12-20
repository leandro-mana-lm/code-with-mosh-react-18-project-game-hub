import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ca4fd33e065949439464c74bffb087ec',
  },
});
