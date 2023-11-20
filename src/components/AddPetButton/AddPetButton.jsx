import { useWindowSize } from 'hooks/useResize';
import { Button, PlusIconLarge, PlusIconSmall } from './AddPetButton.styled';

const AddPetButton = ({ onClick }) => {
  const [screenWidth] = useWindowSize();

  return (
    <Button onClick={onClick}>
      {screenWidth < 768 && <PlusIconLarge />}
      <span>Add Pet</span>
      {screenWidth >= 768 && <PlusIconSmall />}
    </Button>
  );
};

export default AddPetButton;
