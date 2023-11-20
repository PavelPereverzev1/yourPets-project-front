import styled from 'styled-components';

export const Queryform = styled.input`
width: 280px;
height: 44px;
border-radius: 24px;
border: none;
margin-top: 24px;
margin-bottom: 20px;
display: flex;
justify-content: center;
box-shadow: 3px 8px 14px 0 #88C6FD30;
outline: none;
padding-left: 20px;
padding-right: 10px;

&:hover,
&:focus {
    box-shadow: 7px 13px 14px 0 #74B1E8;
}

&::placeholder{
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #888888;
}

`