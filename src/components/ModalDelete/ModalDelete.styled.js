import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px){
        padding: 60px 105px;
        gap: 40px;
        max-width: 608px;
    }
`
export const BtnContainer = styled.div`
    padding-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
    font-weight: 700;
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: 0.3px;
    @media screen and (min-width: 768px){
        font-size: 28px;
        max-width: 600px;
    }
`
export const Text = styled.p`
    font-family: Manrope, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 19.12px;
    @media screen and (min-width: 768px){
        font-size: 16px;
    }
`
export const BigText = styled.span`
    display: block;
    font-weight: 700;
`
export const Icon = styled.svg`
    width: 24px;
    height: 24px;
`