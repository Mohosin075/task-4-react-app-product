/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import Product from "./Product";
import { styled } from "styled-components";

const App = () => {
  const [products, setProducts] = useState([])


  const ProductList = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    );

    @media (min-width: 768px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(300px, 1fr)
      );
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const Container = styled.section`
    max-width: 1700px;
    margin: 0 auto;
  `;


const AppTitle = styled.div`
    text-align: center;
    font-size: 20px;
    margin: 20px 0;
    font-weight: 600;
`


  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <AppTitle>
        React App - Md Mohosin
      </AppTitle>
      <ProductList>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ProductList>
    </Container>
  );
};

export default App;
