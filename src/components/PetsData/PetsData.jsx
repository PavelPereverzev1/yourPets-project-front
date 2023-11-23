import PetsList from 'components/PetsList/PetsList';
import { Section, Title } from './PetsData.styled';
import AddPetButton from 'components/AddPetButton/AddPetButton';

const PetsData = () => {
  return (
    <Section>
      <Title>My pets:</Title>
      <AddPetButton path="/add-pet" />
      <PetsList />
    </Section>
  );
};

export default PetsData;
