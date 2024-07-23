import React from "react";

import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  @media only screen and (max-width: 380px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media only screen and (max-width: 380px) {
    margin: 0px;
  }
`;
const Option = styled.option``;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media only screen and (max-width: 380px) {
margin: 10px 0px;
  }
`;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>Shoes</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <NewLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
