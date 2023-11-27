import styled from '@emotion/styled';

export const WrapperBtn = styled.div`
position: relative;
`
 export const DayBtn = styled.p`
 display: block;
 cursor: pointer;
   color: #111111;
  transition: color var(--transition);
  &:focus, :hover{
    color:var(--blueLink);
  }
 `
 export const WeekList = styled.ul`
 position: absolute;
 display: flex;
 flex-direction: column;
 width: 120px;
 height: 160px;
 border: solid 1px var(--blueLink);
 border-radius: 8px;
 background-color: var(--white);
 font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.39px;
  padding: 12px;
  gap: 4px;
 `
 export const WeekItem = styled.li`
 display: flex;
 justify-content: space-between;
 `
