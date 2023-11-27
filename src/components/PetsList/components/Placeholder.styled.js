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
// const ImageWraper = styled.div`
//   width: 480px;
//   position: relative;
//   padding-top: 50%;
//   margin-left: auto;
//   margin-right: auto;
// `;
const MissingPetDis = styled.p`
  color: inherit;
  margin: 0;
  padding: 24px;
  text-align: center;
  font-size: 20px;
`;
// const MissingPetImage = styled.img`
//   width: 480px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// `;
export { MisisngPetElement, MissingPetDis };
