import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding-bottom: 1.5em;
  background: linear-gradient(253deg, rgba(0,13,148,1) 0%, rgba(162,188,255,1) 51%, rgba(0,64,186,1) 100%);
`;

export const Div = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
`

export const Actions = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  padding: 12px 8px;
  color: white;
  &:hover {
    color: #555;
    transition: 0.3s;
  }
  
`;