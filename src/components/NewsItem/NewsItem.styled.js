import styled from 'styled-components';

export const Item = styled.li`
list-style: none;
transform: scale(1);
  transition: transform var(--transition);
  &:hover {
    transform: scale(1.05);
  }

@media screen and (min-width: 768px){
    &:nth-child(odd) {
        margin-right: 32px;
      }

      @media screen and (min-width: 1280px){
        margin-right: 31px;
        &:nth-child(3n + 3) {
            margin-right: 0;
          }
}
`
 
export const Line = styled.div`
    display: block;
    margin-bottom: 12px;
    width: 280px;
    height: 8px;
    border: none;
    border-radius: 40px;
    background-image: var(--blueGradient);

    @media screen and (min-width: 768px){
        width: 336px;
        margin-bottom: 14px;
    }

    @media screen and (min-width: 1280px){
        width: 395px;
    }
`

export const Wrapper = styled.div`
width: 280px;
background-color: #ffffff;
border-radius: 20px;
margin-bottom: 24px;
height: 578px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (min-width: 768px){
    width: 336px;
    height: 556px;
}

@media screen and (min-width: 1280px){
    width: 395px;
    height: 534px;
}
`

export const ContentWrapper = styled.div`
  padding: 12px;
`

export const NewsImg = styled.img`
width: 280px;
height: 252px;
border-radius: 20px;
margin-bottom: 16px;

@media screen and (min-width: 768px){
    width: 336px;
}

@media screen and (min-width: 1280px){
    width: 395px;
}
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
padding-bottom: 12px;
margin-top: auto;

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