import PropTypes from 'prop-types';
import sprite from 'images/icons/sprite.svg';
import { EyeBtn, Svg, Use } from './ShowPasswordButton.styled';

const ShowPasswordButton = ({ isOpen, onClick }) => {
  return (
    <EyeBtn type="button" onClick={onClick}>
      {isOpen ? (
        <Svg>
          <Use href={`${sprite}#icon-eye-open`} />
        </Svg>
      ) : (
        <Svg>
          <Use href={`${sprite}#icon-eye-closed`} />
        </Svg>
      )}
    </EyeBtn>
  );
};

export default ShowPasswordButton;

ShowPasswordButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
