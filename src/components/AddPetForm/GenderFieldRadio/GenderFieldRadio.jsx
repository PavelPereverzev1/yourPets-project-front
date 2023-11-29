import { Input, Label, Text, Icon } from './GenderFieldRadio.styled';
import sprite from '../../../images/icons/sprite.svg';

function GenderFieldRadio({
  value,
  text,
  onChange,
  checked,
  iconSize,
  stroke,
  iconName,
}) {
  return (
    <>
      <Label htmlFor={value} checked={checked}>
        <Icon
          width={iconSize || '24px'}
          height={iconSize || '24px'}
          checked={checked}
          stroke={stroke}
        >
          <use href={`${sprite}#${iconName}`} />
        </Icon>
        <Text checked={checked}>{text}</Text>
      </Label>
      <Input
        id={value}
        name="sex"
        type="radio"
        onChange={onChange}
        value={value}
        checked={checked}
      />
    </>
  );
}

export default GenderFieldRadio;
