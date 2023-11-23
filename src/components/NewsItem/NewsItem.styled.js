import styled from 'styled-components';

export const Wrapper = styled.div`
width: 280px;
background-color: #ffffff;
border-radius: 20px;
margin-bottom: 24px;

&:: before {
    content: '';
    display: block;
    margin-bottom: 12px;
    width: 280px;
    height: 8px;
    border: none;
    border-radius: 40px;
    background-image: var(--blueGradient);
}
`

export const NewsImg = styled.img`
width: 280px;
height: 252px;
border-radius: 20px;
margin-bottom: 16px;
`

export const NewsTitle = styled.h3`
font-family: Manrope, sans-serif;
font-weight: 700;
font-size: 24px;
line-height: 1.36;
letter-spacing: -0.01rem;
padding-left: 12px;
padding-right: 12px;
margin-bottom: 16px;
`

export const NewsText = styled.p`
font-family: Manrope, sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.36;
padding-left: 12px;
padding-right: 12px;
margin-bottom: 40px;
`

export const BottomWrapper = styled.div`
display: flex;
justify-content: space-between;
padding-left: 12px;
padding-right: 12px;
`

export const NewsDate = styled.p`
font-family: Manrope, sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.36;
color: #888888;
`

export const NewsLink = styled.a`
font-family: Manrope, sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.36;
`