import sprite from 'images/icons/sprite.svg';
import { EyeBtn, Svg, Use } from './ShowPasswordButton.styled';

const ShowPasswordButton = ({ isOpen, onClick, disabled = false, stroke = "var(--blueLink)" }) => {
  return (
    <EyeBtn type="button" disabled={disabled} onClick={onClick}>
      {isOpen ? (
        <Svg stroke={stroke}>
          <Use href={`${sprite}#icon-eye-open`} />
        </Svg>
      ) : (
        <Svg stroke={stroke}>
          <Use href={`${sprite}#icon-eye-closed`} />
        </Svg>
      )}
    </EyeBtn>
  );
};

export default ShowPasswordButton;
