import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 456px;
  background-color: white;
  /* border-radius: 5px; */
  border-radius: 0 0 40px 40px;
  box-shadow: var(--boxShadowDefault);
  transition: box-shadow var(--transition);

  &:hover {
    box-shadow: var(--boxShadowHover);
  }

  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 106px;
`;

export const Text = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 
color: #111;
    letter-spacing: -.64px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 218px;
    margin-bottom: 4px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.78px;
    overflow: hidden;
    margin-top:10px;
    margin-bottom:10px; */
`;

export const LearnMoreDiv = styled.div``;
export const LearnMore = styled.button`
  transition: color var(--transition), background-color var(--transition);
  /* 
  border: 2px solid #54adff;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  width: 248px;
  margin: auto;
  cursor: pointer;
  height: 40px;
  color: #54adff;
  margin-bottom: 20px;
  svg {
    display: none;
  }
  &:hover { */
  border: 2px solid var(--blueLink);
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 40px;
  width: 248px;
  margin: auto;
  cursor: pointer;
  height: 40px;
  color: var(--blueLink);
  margin-bottom: 20px;
  svg {
    display: none;
  }
  &:hover {
    transition: transform 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    svg {
      display: flex;
      margin-left: 20px;
      fill: white;
    }
    /* a {
      color: #fef9f9; */
    a {
      color: var(--background);
    }

    background-color: #54adff;
  }
`;
export const TextMore = styled.a`
  font-weight: 600;
  font-size: 16px;
  /* font-weight: 600;
font-size: 16px; */
`;

// export const InGoodHands = styled.div`
// margin-top: 10px;
// margin-right: 160px;
// position: absolute;
// justify-content: center;
// display:flex;
// width:126px;
// height:32px;
// align-items:center;
// border-radius: 0 16px 16px 0;
// border: 2px solid var(--blueLight);
// color:black;
// font-weight:500;
// background-color:var(--blueLight);

// `;

export const InGoodHands = styled.div`
  /* margin-top: 10px; */
  /* margin-right: 160px; */
  position: absolute;
  top: 16px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 11px 17px;
  border-radius: 0 16px 16px 0;
  color: var(--black);
  background-color: var(--blueLight);
`;

export const CategoryLable = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Favorite = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--blueLight);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    svg {
      fill: var(--blueLink);
      /* display:flex;
align-items:center;
justify-content: center;
margin-top: 10px;
margin-left:220px;
position: absolute;
width:40px;
height:40px;
background-color:var(--blueLight);
border-radius:50%;
border:2px solid var(--blueLight);
&:hover{
cursor:pointer;
    svg{
        
        fill:var(--blueLink); */
    }
  }
`;

export const InfoLocation = styled.div`
  position: absolute;
  left: 18%;
  bottom: 12px;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 28px;
  width: 80px;
  padding: 2px 4px;
  border-radius: 16px;
  border: none;
  background-color: var(--blueLight);

  svg {
    width: 24px;
    height: 24px;
  }
  /* margin-top: 250px;
margin-right: 190px;
position: absolute;
justify-content: center;
display:flex;
height:20px;
width:85px;
padding:11px 5px 11px 5px;
align-items:center;
border-radius: 16px 16px 16px 16px;
border: 2px solid var(--blueLight);
color:black;

background-color:var(--blueLight);
p{
    font-size:12px;
font-weight:600;
padding-right:5px;
margin-left:5px;
}
svg{
    width:24px;
    height:24px;
   
} */
`;

export const InfoAge = styled.div`
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 28px;
  width: 80px;
  padding: 2px 4px;
  border-radius: 16px;
  border: none;
  background-color: var(--blueLight);

  svg {
    width: 24px;
    height: 24px;
  }
  /* display:flex;
height:20px;
width:80px;
padding:11px 5px 11px 5px;
align-items:center;
border-radius: 16px 16px 16px 16px;
border: 2px solid var(--blueLight);
color:black;

background-color:var(--blueLight);
p{
    font-size:12px;
font-weight:600;
padding-right:5px;
}
svg{
    padding-right:5px;
} */
`;

export const InfoPol = styled.div`
  position: absolute;
  right: 18%;
  bottom: 12px;
  transform: translate(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 28px;
  width: 80px;
  padding: 2px 4px;
  border-radius: 16px;
  border: none;
  background-color: var(--blueLight);

  svg {
    width: 24px;
    height: 24px;
  }
  /* margin-top: 250px;
margin-left:195px;
position: absolute;
justify-content: center;
display:flex;
height:20px;
width:80px;
padding:11px 5px 11px 5px;
align-items:center;
border-radius: 16px 16px 16px 16px;
border: 2px solid var(--blueLight);
color:black;

background-color:var(--blueLight);

svg{
    padding-right:5px;
} */
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-weight: 600;
  padding-right: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Remove = styled.button`
  position: absolute;
  right: 12px;
  top: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--blueLight);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    svg {
      fill: var(--blueLink);
      /* display:flex;
align-items:center;
justify-content: center;
margin-top: 60px;
margin-left:220px;
position: absolute;
width:40px;
height:40px;
background-color:var(--blueLight);
border-radius:50%;
border:2px solid var(--blueLight);
&:hover{
cursor:pointer;
    svg{
        
        fill:var(--blueLink); */
    }
  }
`;
