/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 400px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfdfd;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 60%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
`;

const Product = ({ image, title, description, price }) => {
  return (
    <Card>
      <ProductImage src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>${price.toFixed(2)}</Price>
    </Card>
  );
};

export default Product;
