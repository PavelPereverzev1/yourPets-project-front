import axios from 'axios';

export const fethMyPetsAPI = async () => {
  try {
    const res = await axios.get('/pets');

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMyPetDeleteAPI = async id => {
  try {
    const res = await axios.delete(`/pets/${id}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
