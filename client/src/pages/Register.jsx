import React from "react";

import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://s3.amazonaws.com/rodney.store/Store+Pics/reza-delkhosh-iRAOJYtPHZE-unsplash-min.jpg");
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40vw;
  padding: 20px;
  background-color: #fff;
  @media only screen and (max-width: 605px) {
    width: 75%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 823px) {
    display: flex;
    flex-direction: column;
  }
`;
const Button = styled.button`
  width: 49.5%;
  border: none;
  padding: 15px 20px;
  background-color: hsl(0, 0%, 0%);
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  @media only screen and (max-width: 823px) {
    width: 100%;
    font-size: 10px;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Agreement>
            This is a Demo account. You can not buy anything here. Card Click
            here to read more
            <b> PRIVACY POLICY</b>.
          </Agreement>
          <ButtonHolder>
            <Button>CREATE ACCOUNT</Button>
            <Button>LOG IN</Button>
          </ButtonHolder>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
