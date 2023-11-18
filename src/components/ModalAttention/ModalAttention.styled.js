import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px){
        padding: 60px 40px;
        gap: 40px;
        max-width: 608px;
    }
`
export const BtnContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media screen and (min-width: 768px){
        padding-top: 0;
        flex-direction: row;
        gap: 20px;
    }
`