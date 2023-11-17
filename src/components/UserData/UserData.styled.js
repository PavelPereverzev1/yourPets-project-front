import { styled } from 'styled-components';
import { LuPencilLine } from 'react-icons/lu';

export const UserDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24.6875rem;
  height: 32.5rem;

  border-radius: 2.5rem;
  background: var(--, #fff);

  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const EditBtn = styled(LuPencilLine)``;
