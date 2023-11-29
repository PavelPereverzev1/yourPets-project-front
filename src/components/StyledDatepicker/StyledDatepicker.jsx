import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { formatDate } from 'helpers/formatDate';

const StyledDatepicker = ({
  selected,
  onChange,
  name,
  disabled,
  onBlur,
  $isValid,
}) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper
        type="button"
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        $isValid={$isValid}
      >
        {value}
      </TitleWrapper>
    );
  });

  return (
    <>
      <DatePicker
        selected={selected ? new Date(selected) : null}
        onChange={date => onChange(formatDate(date, 'YYYY-MM-DD'))}
        customInput={<CustomInput />}
        dateFormat={'yyyy-MM-dd'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        name={name}
        onBlur={onBlur}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
