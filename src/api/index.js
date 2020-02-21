import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';

export const api = {
  getRandomImage: () =>
    axios.get(`${BASE_URL}images/search?mime_types=jpg`).then(res => {
      if (res.status) {
        return res.data;
      } else {
        return { error: 'there is an error. please try again later.' };
      }
    }),
  getRandomImages: num =>
    axios
      .get(`${BASE_URL}images/search?limit=${num}&page=1&order=ASC`)
      .then(res => {
        if (res.status === 200) {
          console.log(JSON.stringify(res));
        } else {
          return { error: 'There is an error. please try again later.' };
        }
      }),
  getCategories: () =>
    axios.get(`${BASE_URL}categories`).then(res => {
      if (res.status === 200) {
        return res.data;
      } else {
        // return { error: 'There is an error. please try again later.' };
      }
    })
};
