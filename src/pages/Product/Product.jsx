import React from "react";
import { Card, Section } from "../../components";
import { Products } from "../../utils/Products";
import { useParams } from "react-router-dom";
import * as S from "./Product.style";

function Producte() {
  const { id } = useParams();

  const product = Products.find((x) => x.id === Number(id));

  return (
    <Section>
      <S.Div>
        {product && (
          <Card 
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price} />
        )}
      </S.Div>
    </Section>
  );
}

export default Producte;