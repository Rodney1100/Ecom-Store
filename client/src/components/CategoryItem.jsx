import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    height: 30vh;
  }
`;
const Info = styled.div`
  background-color: #001aff18;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  background-color: #000000b6;
  color: white;
  padding: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 380px) {
    background-color: #3e3e3e65;
    color: #ffffff;
  }
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  border: 2px solid #929292;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
