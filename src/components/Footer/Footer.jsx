import React from "react";
import * as S from "./Footer.style";
import { Section, Subscribe } from "../../components";

function Footer() {
  return (
    <S.MainFoot>
      <Section background="f4f4f4">
        <S.Footer>
          <S.FooterLinks>
            <S.StyledLink to="/">Search Terms</S.StyledLink>
            <S.StyledLink to="/">Privacy and Cookie Policy</S.StyledLink>
            <S.StyledLink to="/">Orders and Returns</S.StyledLink>
            <S.StyledLink to="/">Advanced Search</S.StyledLink>
            <S.StyledLink to="/">Contact Us</S.StyledLink>
          </S.FooterLinks>
          <Subscribe />
        </S.Footer>
      </Section>
      <S.Copyright>
        <S.Span>Copyright © 2020 by Modestas</S.Span>
      </S.Copyright>
    </S.MainFoot>
  );
}

 export default Footer;