import styled from 'styled-components';

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const FormComponent = styled.form`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 20px;
border: 2px solid gray;
border-radius: 8px;
width: 700px;
height: 600px;

@media (max-width: 660px) {
width: 100px;
height: 100px;
 }
`;

export const ContainerInput= styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`


export const Input = styled.input`
margin-top: 20px;
width: 450px;
font-size:20px;
height: 60px;
background-color: transparent;
color: gray;
border-radius: 10px;
padding-left: 40px;
border: 1px solid gray;

 &::placeholder {
    font-size: 20px;
    color: gray;
    background-color: transparent;
  }

  @media (max-width: 660px) {
  max-width: 300px;
  &::placeholder {
    font-size: 12px;
    text-align: justify;
  }
}
`

export const MessageError = styled.p`
font-size: 16px;
color: red;
border-left: 1px solid black;
padding-left: 8px;
`
