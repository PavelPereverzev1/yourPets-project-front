import axiosInstance from './axiosConfig';

export const fethMyPetsAPI = async () => {
  try {
    const res = await axiosInstance.get('/pets');

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMyPetDeleteAPI = async id => {
  try {
    const res = await axiosInstance.delete(`/pets/${id}`);

    return res;
  } catch (error) {
    console.log(error);
  }
};
