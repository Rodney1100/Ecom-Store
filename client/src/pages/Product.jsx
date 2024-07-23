import React from "react";

import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 200;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 380px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  background-color: #dedede59;
  width: 100%;
  /* height: 60vh; */
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    /* width: 90%; */
    height: 50vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media only screen and (max-width: 380px) {
    padding: 1px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  font-size: large;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  cursor: pointer;
  background-color: #fff;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
  @media only screen and (max-width: 380px) {
width: 80%;
margin-top:10px  }
`;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://s3.amazonaws.com/rodney.store/Store+Pics/Screenshot_2022-05-22_220819-removebg-preview-min.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Robotic T-Shirt</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            debitis consequuntur vitae deserunt eos minima nemo omnis nulla
            consectetur porro ullam perspiciatis ab, distinctio nobis nam,
            voluptate at ipsa fuga.
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color </FilterText>
              <FilterColor color="grey" />
              <FilterColor color="Black" />
              <FilterColor color="Red" />
            </Filter>
            <Filter>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>4</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
