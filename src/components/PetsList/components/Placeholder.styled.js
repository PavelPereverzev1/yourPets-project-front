import styled from 'styled-components';

const MisisngPetElement = styled.li`
  @media screen and (max-width: 768px) {
    display: none;
  }
  font-size: 20px;
  background-color: #fff;
  padding: 16px;
  border-radius: 24px;
  margin-left: auto;
  margin-right: auto;
`;

const MissingPetDis = styled.p`
  color: inherit;
  margin: 0;
  padding: 24px;
  text-align: center;
  font-size: 20px;
`;
export { MisisngPetElement, MissingPetDis };
