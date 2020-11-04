import styled from "styled-components";
import img from '../../assets/loupe.svg';

export const Cont = styled.div`
  margin: 20px auto;
  max-width: 600px;
`;

export const Search = styled.input`
  width: 100%;
  font-weight: 300;
  padding: 16px;
  padding-left: 45px;
  border-radius: 50px;
  border: 1px solid #949494;
  box-sizing: border-box;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 18px;
  background-position-x: 15px;
  background-position-y: center;
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px rgba(0,64,186,1);
    }
  &:hover {
    border-radius: 50px;
    border: 1px solid black;
  }
`