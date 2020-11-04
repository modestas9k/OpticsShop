import React from "react";
import * as S from "./Subscribe.style";

function Subscribe() {
  return (
    <S.Subscribe>
      <S.Input
        placeholder="Enter your email address"
      />
      <S.Button>Subscribe</S.Button>
    </S.Subscribe>
  );
}

export default Subscribe;