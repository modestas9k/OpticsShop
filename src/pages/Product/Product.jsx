import React from "react";
import { Card } from "../../components";
import { Products } from "../../utils/Products";
import { useParams } from "react-router-dom";

function Producte() {
  const { id } = useParams();

  const product = Products.find((x) => x.id === Number(id));

  return (
    <>
      {product && (
        <Card 
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      )}
    </>
  );
}

export default Producte;