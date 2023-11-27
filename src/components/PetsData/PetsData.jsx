import PetsList from 'components/PetsList/PetsList';
import sprite from 'images/icons/sprite.svg';
import {
  AddIcon,
  BgContainer,
  Section,
  Title,
  TopContainer,
} from './PetsData.styled';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'hooks/useResize';

const PetsData = () => {
  const [screenWidth] = useWindowSize();

  const navigate = useNavigate();
  const handleClick = () => navigate('/add-pet');

  return (
    <Section>
      {screenWidth < 768 && (
        <BgContainer>
          <ButtonComponent $variant="round" onClick={handleClick}>
            <AddIcon>
              <use href={`${sprite}#icon-plus`} />
            </AddIcon>
            Add Pet
          </ButtonComponent>
        </BgContainer>
      )}

      <TopContainer>
        <Title>My pets:</Title>
        {screenWidth >= 768 && (
          <ButtonComponent
            $variant="filled"
            width="129px"
            onClick={handleClick}
          >
            <AddIcon>
              <use href={`${sprite}#icon-plus-small`} />
            </AddIcon>
            Add Pet
          </ButtonComponent>
        )}
      </TopContainer>

      <PetsList />
    </Section>
  );
};

export default PetsData;
