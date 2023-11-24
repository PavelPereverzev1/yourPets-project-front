import axios from 'axios';

const BASE_URL = 'https://yourpets-project-backend.onrender.com';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const getNoticesAPI = async () => {
  const { data } = await axios(`${BASE_URL}/notices`, options);
  return data;
};

export const getNoticesDetailsAPI = async noticeDetail => {
  const { data } = await axios(`${BASE_URL}/notices/${noticeDetail}`, options);
  return data;
};
