import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media only screen and (max-width: 380px) {
   font-size: 60px;
  }
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media only screen and (max-width: 380px) {
    text-align: center;
    font-size: 18px;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  @media only screen and (max-width: 380px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: white;
`;

const NewLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get Updates on sales and more.</Description>
      <InputContainer>
        <Input placeholder="Your Email" id="email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewLetter;
