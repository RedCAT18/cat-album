import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/images/';

export const api = {
  getRandomImages: () =>
    axios.get(`${BASE_URL}search`).then(res => {
      if (res.status) {
        return res.data;
      } else {
        return { error: 'there is an error. please try again' };
      }
    })
};
