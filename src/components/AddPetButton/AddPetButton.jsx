import { useWindowSize } from 'hooks/useResize';
import { Button, PlusIconLarge, PlusIconSmall } from './AddPetButton.styled';

const AddPetButton = ({ path }) => {
  const [screenWidth] = useWindowSize();

  return (
    <Button to={path}>
      {screenWidth < 768 && <PlusIconLarge />}
      <span>Add Pet</span>
      {screenWidth >= 768 && <PlusIconSmall />}
    </Button>
  );
};

export default AddPetButton;
