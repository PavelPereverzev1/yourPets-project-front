import PropTypes from 'prop-types';
import sprite from 'images/icons/sprite.svg';
import { ConfirmationSvg, Use } from './ConfirmationIconComponent.styled';

const ConfirmationIconComponent = ({ positionRight = 16 }) => {
  return (
    <ConfirmationSvg $positionRight={positionRight}>
      <Use href={`${sprite}#icon-check`} />
    </ConfirmationSvg>
  );
};

export default ConfirmationIconComponent;

ConfirmationIconComponent.propTypes = {
  positionRight: PropTypes.number,
};
