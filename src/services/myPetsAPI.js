import axios from 'axios';

// const BASE_URL = 'https://64fde15b596493f7af7eb5ee.mockapi.io/';

export const fethMyPetsAPI = async url => {
  try {
    const res = await axios.get('/pets');

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
