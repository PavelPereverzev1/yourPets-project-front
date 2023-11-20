import styled from 'styled-components';
import { PiPawPrint } from "react-icons/pi";


export const Container = styled.div`
    padding: 68px 16px 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px){
        padding: 60px 129px;
    }
`
export const Title = styled.h2`
    font-family: Manrope, sans-serif;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: 0.3px;
    @media screen and (min-width: 768px){
        font-size: 36px;
        line-height: 49.18px;
        margin-bottom: 52px;
    }
`
export const Text = styled.p`
    font-family: Manrope, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 21.86px;
    margin-bottom: 40px;
    @media screen and (min-width: 768px){
        font-size: 24px;
        line-height: 32.78px;
        margin-bottom: 60px;
    }
`
export const Icon = styled(PiPawPrint)`
    width: 24px;
    height: 24px;
    transform: rotate(25deg);
`