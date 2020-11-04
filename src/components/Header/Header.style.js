import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopHead = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const Shop = styled.img`
  width: 30px;
`

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
export const Actions = styled.div`
  position: relative;
`

export const ItemCount = styled.span`
  position: absolute;
  //top: -50%;
  right: -25%;
  color: white;
  background: red;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  font-size: 10px;
  border-radius: 50%;
`
