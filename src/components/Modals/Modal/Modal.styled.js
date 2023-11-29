import styled from 'styled-components';

export const ModalWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #61616199;
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.$primary ? 1 : 0};
    pointer-events: ${props => props.$primary ? 'all' : 'none'};
    transition: 0.5s;
    z-index: 999;
`
export const ModalContent = styled.div`
    border-radius: 20px;
    background-color: var(--white);
    transform: ${props => props.$primary ? 'scale(1)':'scale(0.5)'};
    transition: 0.4s all;
    max-width: 280px;
    @media screen and (min-width: 768px){
        border-radius: 40px;
        max-width: 681px;
    }
`
export const ModalCloseBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    padding: 0;
    background-color: transparent;
    color: var(--blueLink);
    border: none;
    cursor: pointer;
    & svg {
        width: 24px;
        height: 24px;
    }
    &:hover{
        color: var(--yellow);
    }
    @media screen and (min-width: 768px){
        top: 24px;
        right: 24px;
    }
`