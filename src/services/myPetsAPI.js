import axios from 'axios';

const BASE_URL = 'https://64fde15b596493f7af7eb5ee.mockapi.io/';

export const fethMyPetsAPI = async url => {
  try {
    const responce = await axios.get(`${BASE_URL}${url}`);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
