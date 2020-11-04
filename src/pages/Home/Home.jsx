import React from "react";
import { Section, Card, SearchBar } from "../../components";
import { Products } from "../../utils/Products";
import * as S from "./Home.style";
import { useLocation, useHistory } from "react-router-dom";

function Home() {
  const location = useLocation();
  const history = useHistory()

  const filteredProducts = location.search
    ? Products.filter((product) =>
      product.title.toLowerCase().includes(location.search.slice(1).toLowerCase())
    )
    : Products;

  console.log(location.search);
  return (
    <>
      <Section >
        <SearchBar handlechange={(e) => e.key === "Enter" && history.push({ search: e.target.value})
        } />
        <S.CardBox>
        {filteredProducts.length === 0 && "No products found"}
        {filteredProducts && 
        filteredProducts.map((prod) => (
          <Card 
            handlechange={(e) => history.push(`/product/${prod.id}`)}
            key={prod.id}
            id={prod.id}
            image={prod.image}
            title={prod.title}
            price={prod.price} />
        ))
        }
        </S.CardBox>
      </Section>
      
    </>
  );
}

export default Home;
