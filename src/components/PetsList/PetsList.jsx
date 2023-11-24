import PetsItem from 'components/PetsItem/PetsItem';
import { useEffect, useState } from 'react';
import { fethMyPetsAPI } from 'services/myPetsAPI';
import { List, ListItem } from './PetsList.styled';

const PetsList = () => {
  const [myPets, setMyPets] = useState([]);

  const getMyPets = async () => {
    const data = await fethMyPetsAPI('/myPets');
    setMyPets(data);
  };

  useEffect(() => {
    getMyPets();
  }, []);

  return (
    <List>
      {myPets.map(pet => {
        return (
          <ListItem key={pet._id}>
            <PetsItem pet={pet} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default PetsList;
