import styled from "styled-components";
import mail from "../../assets/email.svg";

export const Subscribe = styled.div`
  display: flex;
  height: 30px;

`;
export const Input = styled.input`
  width: 250px;
  height: 35px;
  font-weight: 300;
  padding-left: 40px;
  border-radius: 4px 0 0 4px; 
  border: 1px solid #949494;
  border-right: none;
  box-sizing: border-box;
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-position-x: 10px;
  background-position-y: center;
  background-size: 18px;
`;
export const Button = styled.button`
  background: #006bb4;
  text-justify: auto;
  margin: 0;
  color: white;
  font-weight: 500;
  padding: 5px 15px;
  border: none;
  border-radius: 0 4px 4px 0;
  height: 35px;
`