import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 30px 10px;
  @media (max-width: 560px) {
    display: block;
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  width: 210px;
  flex-wrap: wrap;
  
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline;
  font-size: 0.9em;
  font-weight: lighter;
  padding: 5px;
  color: #575757;
  &:hover {
    color: #555;
    text-decoration: underline;
    transition: 0.2s;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Copyright = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #6e716e;
`;
export const Span = styled.span`
  color: white;
  font-weight: 300;
  font-size: 0.9em;
`