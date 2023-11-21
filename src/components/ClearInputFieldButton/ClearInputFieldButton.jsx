import { useField } from 'formik';
import sprite from 'images/icons/sprite.svg';
import { ClearBtn, Svg, Use } from './ClearInputFieldButton.styled';

const ClearInputFieldButton = ({ name, positionRight = 16 }) => {
  const [, , helpers] = useField(name);

  const handleClick = () => {
    helpers.setValue('');
  };

  return (
    <ClearBtn
      type="button"
      onClick={handleClick}
      $positionRight={positionRight}
    >
      <Svg>
        <Use href={`${sprite}#icon-cross-small`} />
      </Svg>
    </ClearBtn>
  );
};

export default ClearInputFieldButton;
