import React from "react";
import * as S from "./SearchBar.style";

function SearchBar() {
  return (
    <S.Cont>
      <S.Search type="search" placeholder="Search entire store" />
    </S.Cont>
  );
}

export default SearchBar;