import styled from '@emotion/styled';


export const Container = styled.ul`

margin-top: 24px;
margin-bottom: 40px;
justify-content: center;
align-items: center;

@media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }

@media (min-width: 768px) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  column-gap: 32px;
  row-gap: 24px;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
}
`;

export const Item = styled.li`


display:flex;
flex-direction:column;
margin-top:50px;
flex: 0 0 calc(33.3% - 20px);
border: 1px solid #ccc; 

text-align: center; 

vertical-align: top;
max-width:288px;

justify-content: center;

height:auto;
background-color:white;
border-radius:5px;
border-radius: 0 0 40px 40px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;

&:hover{
    box-shadow: 0 10px 5px 0 rgba(0, 0, 0, 0.1);
    
}
@media(max-width:768px){
        max-width:336px;
        max-height:456px;  
        
      }
      @media(max-width:320px){
        margin-right:15px; 
      }

`

export const ImageBlock = styled.div`
display:flex;

justify-content: center;

width:288px;
height:288px;
 
color:white;
`;

export const Image = styled.img`

width:100%;
height:100%;
object-fit: contain;


`;
export const TextDiv = styled.div`

display: flex;
justify-content: center;
margin:auto;
width:288px;
height:auto;



`;

export const Text = styled.a`
margin-top: 10px;
display: flex;
justify-content: center;
font-size: 20px;
font-weight:700;
height:auto;
max-width:231px;
margin-bottom:20px;
color:#111111;

`;


export const LearnMoreDiv = styled.div`

`
export const LearnMore = styled.button`
transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

border: 2px solid #54ADFF;
justify-content:center;
display:flex;
align-items:center;
background-color:white;
border-radius:40px;
width:248px;
margin:auto;
cursor:pointer;
height:40px;
color: #54ADFF; 
margin-bottom:20px;
svg{
    display:none;
}
&:hover{
    transition: transform 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    svg{
        display: flex;
        margin-left:20px;
        fill:white;
    }
    a{
        color:#FEF9F9;
    }
  
    background-color:#54ADFF;
}

`;
export const TextMore = styled.a`
font-weight: 600;
font-size: 16px;

`

export const InGoodHands = styled.div`
margin-top: 10px;
margin-right: 160px;
position: absolute;
justify-content: center;
display:flex;
width:126px;
height:32px;
align-items:center;
border-radius: 0 16px 16px 0;
border: 2px solid #CCE4FB;
color:black;
font-weight:500;
background-color:#CCE4FB;

`;


export const Favorite = styled.button`

display:flex;
align-items:center;
justify-content: center;
margin-top: 10px;
margin-left:220px;
position: absolute;
width:40px;
height:40px;
background-color:#CCE4FB;
border-radius:50%;
border:2px solid #CCE4FB;
&:hover{
cursor:pointer;
    svg{
        
        fill:#54ADFF;
    }
}


`;

export const InfoLocation = styled.div`
margin-top: 250px;
margin-right: 190px;
position: absolute;
justify-content: center;
display:flex;
height:20px;
width:85px;
padding:11px 5px 11px 5px;
align-items:center;
border-radius: 16px 16px 16px 16px;
border: 2px solid #CCE4FB;
color:black;

background-color:#CCE4FB;
p{
    font-size:12px;
font-weight:600;
padding-right:5px;
margin-left:5px;
}
svg{
    width:24px;
    height:24px;
   
}
`;
export const InfoAge = styled.div`
margin-top: 250px;
margin-left:0px;
position: absolute;
justify-content: center;
display:flex;
height:20px;
width:80px;
padding:11px 5px 11px 5px;
align-items:center;
border-radius: 16px 16px 16px 16px;
border: 2px solid #CCE4FB;
color:black;

background-color:#CCE4FB;
p{
    font-size:12px;
font-weight:600;
padding-right:5px;
}
svg{
    padding-right:5px;
}
`;
export const InfoPol = styled.div`
margin-top: 250px;
margin-left:195px;
position: absolute;
justify-content: center;
display:flex;
height:20px;
width:80px;
padding:11px 5px 11px 5px;
align-items:center;
border-radius: 16px 16px 16px 16px;
border: 2px solid #CCE4FB;
color:black;

background-color:#CCE4FB;

svg{
    padding-right:5px;
}
`;

export const InfoText = styled.p`
font-size:12px;
font-weight:600;
padding-right:5px;
`;


export const Remove = styled.button`

display:flex;
align-items:center;
justify-content: center;
margin-top: 60px;
margin-left:220px;
position: absolute;
width:40px;
height:40px;
background-color:#CCE4FB;
border-radius:50%;
border:2px solid #CCE4FB;
&:hover{
cursor:pointer;
    svg{
        
        fill:#54ADFF;
    }
}
`;
