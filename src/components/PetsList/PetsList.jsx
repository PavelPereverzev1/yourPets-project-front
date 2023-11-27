import PetsItem from 'components/PetsItem/PetsItem';
import { useEffect, useState } from 'react';
import { fetchMyPetDeleteAPI, fethMyPetsAPI } from 'services/myPetsAPI';
import { List, ListItem } from './PetsList.styled';
import { PlaceHolder } from './components/PlaceHolder';

const PetsList = () => {
  const [myPets, setMyPets] = useState([]);

  const getMyPets = async () => {
    const data = await fethMyPetsAPI();
    setMyPets(data);
  };

  const deletePetById = async id => {
    const res = await fetchMyPetDeleteAPI(id);
    if (res.status === 200) {
      const newArr = myPets.filter(pet => pet._id !== id);
      setMyPets(newArr);
    }
  };

  useEffect(() => {
    getMyPets();
  }, []);

  return (
    <List>
      {myPets.length === 0 ? (
        <PlaceHolder />
      ) : (
        <>
          {myPets.map(p => {
            return (
              <ListItem key={p._id}>
                <PetsItem pet={p} handleDelete={deletePetById} />
              </ListItem>
            );
          })}
        </>
      )}
      {/* // {myPets.map(pet => {
      //   return (
      //     <ListItem key={pet._id}>
      //       <PetsItem pet={pet} handleDelete={deletePetById} />
      //     </ListItem>
      //   );
      // })} */}
    </List>
  );
};

export default PetsList;
