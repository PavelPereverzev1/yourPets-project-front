import PetsList from 'components/PetsList/PetsList';
import sprite from 'images/icons/sprite.svg';
import { AddIcon, Section, Title, TopContainer } from './PetsData.styled';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'hooks/useResize';

const PetsData = () => {
  const [screenWidth] = useWindowSize();

  const navigate = useNavigate();
  const handleClick = () => navigate('/add-pet');

  return (
    <Section>
      <TopContainer>
        <Title>My pets:</Title>
        <ButtonComponent
          $variant={screenWidth >= 768 ? 'filled' : 'round'}
          onClick={handleClick}
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
      </TopContainer>

      <PetsList />
    </Section>
  );
};

export default PetsData;
