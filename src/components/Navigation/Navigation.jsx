import React from "react";
import * as S from "./Navigation.style";

function Header() {
  return (
    <>
      <S.Header>
        <S.Div>
        <S.Actions>
          <S.StyledLink to="/">Waveplates</S.StyledLink>
          <S.StyledLink to="/">Polarizers</S.StyledLink>
          <S.StyledLink to="/">Dielectric Coated Optics</S.StyledLink>
          <S.StyledLink to="/">Lenses</S.StyledLink>
          <S.StyledLink to="/">Prisms</S.StyledLink>
          <S.StyledLink to="/">Filters</S.StyledLink>
          <S.StyledLink to="/">Metallic Coated Optics</S.StyledLink>
          <S.StyledLink to="/">Uncoated Optics</S.StyledLink>
          <S.StyledLink to="/">Crystals</S.StyledLink>
          <S.StyledLink to="/">Other</S.StyledLink>
        </S.Actions>
        </S.Div>
      </S.Header>
    </>
  );
}
export default Header;