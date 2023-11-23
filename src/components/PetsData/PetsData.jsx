import PetsList from 'components/PetsList/PetsList';
import sprite from 'images/icons/sprite.svg';
import { AddIcon, Section, Title } from './PetsData.styled';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'hooks/useResize';

const PetsData = () => {
  const [screenWidth] = useWindowSize();

  const navigate = useNavigate();

  return (
    <Section>
      <Title>My pets:</Title>
      <ButtonComponent
        $variant={screenWidth >= 768 ? 'filled' : 'round'}
        onClick={() => navigate('/add-pet')}
      >
        <AddIcon>
          <use
            href={`${sprite}${
              screenWidth >= 768 ? '#icon-plus-small' : '#icon-plus'
            }`}
          />
        </AddIcon>
        Add Pet
      </ButtonComponent>
      {/* <PetsList /> */}
    </Section>
  );
};

export default PetsData;
