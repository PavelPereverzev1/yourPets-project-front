import { useState } from 'react';
import { BigText } from '../OurFriends.styled';
import { DayBtn, WeekItem, WeekList, WrapperBtn } from './WorkDaysBtn.styled';

export default function WorkDaysBtn({ workDays }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const dayOpen = workDays.filter((day) => day.isOpen)

  return (
    <WrapperBtn>
      <DayBtn 
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      >
        <BigText>Time: </BigText>
        {dayOpen[0].from}-{dayOpen[0].to}
      </DayBtn>
      {isOpen && (
        <WeekList>
          {workDays.map((option, index) => (
            <WeekItem key={index}>
              <div>{weekDays[index]}</div>
              <div>
                {option.isOpen ? `${option.from}-${option.to}` : 'CLOSED'}
              </div>
            </WeekItem>
          ))}
        </WeekList>
      )}
    </WrapperBtn>
  );
}
