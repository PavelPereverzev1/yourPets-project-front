import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: ${props => props.width || '280px'};
  // height: ${props => props.height || '496px'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 40px;
  background: #fff;
  margin: 0 auto;
  padding: 20px 8px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: ${props => props.width || '458px'};
    // min-height: ${props => props.height || '542px'};

    padding: 20px 32px;
  }
`;
