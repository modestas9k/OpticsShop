import React from "react";
import { Section, Card, SearchBar } from "../../components";
import { Products } from "../../utils/Products";
import * as S from "./Home.style";

function Home() {
  return (
    <>
      <Section >
        <SearchBar />
        <S.CardBox>
        {Products.length === 0 && "No products found"}
        {Products && 
        Products.map((prod) => (
          <Card 
          key={prod.id}
          id={prod.id}
          image={prod.image}
          title={prod.title}
          price={prod.price}
        />
        ))
        }
        </S.CardBox>
      </Section>
      
    </>
  );
}

export default Home;
