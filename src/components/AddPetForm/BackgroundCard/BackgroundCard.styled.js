import styled from 'styled-components';

export const Card = styled.div`
  width: ${props => props.width || '458px'};
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  background: #fff;
  margin: 0 auto;
  padding: 32px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;
