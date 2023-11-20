import styled from 'styled-components';

export const Container = styled.div`
    padding: 77px 12px 60px;
    display: flex;
    flex-direction: column;
    gap: 44px;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px){
        padding: 108px 155px;
        gap: 48px;
        max-width: 608px;
    }
`
export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media screen and (min-width: 768px){
        width: 275px;
        padding-top: 8px;
        flex-direction: row;
        gap: 17px;
    }
`
export const Title = styled.h2`
    font-family: Manrope, sans-serif;
    max-width: 200px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.36;
    letter-spacing: 0.3px;
    color: #111111;
    @media screen and (min-width: 768px){
        font-size: 36px;
        max-width: 600px;
        letter-spacing: 0.4px;
    }
`
export const Icon = styled.svg`
    width: 24px;
    height: 24px;
`