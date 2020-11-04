import React from "react";
import * as S from "./SearchBar.style";

function SearchBar({ handlechange}) {
  return (
    <S.Cont>
      <S.Search type="search" placeholder="Search entire store" onKeyUp={handlechange} />
    </S.Cont>
  );
}

export default SearchBar;