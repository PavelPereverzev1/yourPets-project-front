import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 280px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 152px;
  }
`;
const MainFilterBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #c5dff6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  @media screen and (min-width: 768px) {
    position: relative;
    box-sizing: border-box;
    width: 152px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 40px;
    border: 2px solid #54adff;
    background-color: #fef9f9;
    color: #54adff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
    flex-direction: row-reverse;
    &:hover {
      & > span {
        color: #fef9f9;
      }
      color: #54adff;
    }
  }
  & > svg > path {
    stroke: #54adff;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoi: round;
    transition: stroke 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  &:hover {
    & > svg > path {
      stroke: #fff;
    }
    background-color: #54adff;
  }
`;
const FiltrSpan = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`;
const FilterContainer = styled.div`
  width: 100%;
  position: absolute;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  top: -50%;
  padding: 8px;
  @media screen and (min-width: 768px) {
    width: 154px;
    top: 27%;
    left: -10%;
  }
`;
const FiltersBtn = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: left;
  color: #54adff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  cursor: pointer;
  margin-bottom: 16px;
`;
const FilterElementContainer = styled.div`
  background-color: #cce4fb;
  border-radius: 20px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const FilterSubBtn = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 8px;
  text-transform: capitalize;
  color: #54adff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.75, 0.82, 0.165, 1);
  & > svg > path {
    stroke: #54adff;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 250ms cubic-bezier(0.75, 0.82, 0.165, 1);
    &.svg-display {
      display: none;
    }
  }
  &:hover {
    & > svg > path {
      stroke: #fff;
    }
    color: #fff;
  }
`;
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 14px;
`;
const InputCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
const InputCheckboxContainer = styled.label`
  display: flex;
  gap: 12px;
  cursor: pointer;
  display: block;
  height: 24px;
  display: flex;
  align-items: center;
  color: #54adff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  & > svg {
    height: 24px;
    width: 24px;
  }
`;
const OFilterSubBtn = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 8px;
  text-transform: capitalize;
  color: #54adff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  cursor: pointer;
  padding-left: 14px;
  padding-top: 14px;
  transition: color 250ms cubic-bezier(0.75, 0.82, 0.165, 1);
  &:hover {
    color: #fff;
  }
`;
export {
  Container,
  FilterContainer,
  MainFilterBtn,
  FiltrSpan,
  FiltersBtn,
  FilterElementContainer,
  FilterSubBtn,
  CheckboxContainer,
  InputCheckbox,
  InputCheckboxContainer,
  OFilterSubBtn,
};
