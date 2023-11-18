import PetsList from 'components/PetsList/PetsList';
import { Section, Title } from './PetsData.styled';

const PetsData = () => {
  return (
    <Section>
      <Title>My pets:</Title>
      <PetsList />
    </Section>
  );
};

export default PetsData;
