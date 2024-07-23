import React from "react";

import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (max-width: 380px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
    padding-right: 30px;
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const TopText = styled.span`
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;

const Image = styled.img`
  width: 200px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;
const ProductSize = styled.span``;
const Summary = styled.span`
  flex: 1;
  border: 0.5px solid gray;
  padding: 20px;
  height: 50vh;
  border-radius: 10px;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
  }
`;

const Hr = styled.hr`
  background-color: #a7a7a7;
  border: none;
  height: 1px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 380px) {
    margin: 5px 15px;
  }
`;
const PriceAmount = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media only screen and (max-width: 380px) {
    margin-bottom: 20px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span`
  letter-spacing: 2px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Cart (1)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://s3.amazonaws.com/rodney.store/Store+Pics/Screenshot_2022-05-22_222712-removebg-preview-min.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>
                    {" California Jersey"}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123456
                  </ProductId>
                  <ProductColor color="lightgray" />
                  <ProductSize>
                    <b>Size:</b> {"Large"}
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <PriceAmount>$32</PriceAmount>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://s3.amazonaws.com/rodney.store/Store+Pics/348654cc9b185bcccbeea80d2fae2bf8-min.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>
                    {" Red Nike"}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 123454
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> {"11"}
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <PriceAmount>$132</PriceAmount>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal </SummaryItemText>
              <SummaryItemPrice>$164</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping </SummaryItemText>
              <SummaryItemPrice>$4</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount </SummaryItemText>
              <SummaryItemPrice>-$4</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total </SummaryItemText>
              <SummaryItemPrice>$164</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
