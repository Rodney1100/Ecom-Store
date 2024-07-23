import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://s3.amazonaws.com/rodney.store/Store+Pics/alexi-romano-CCx6Fz_CmOI-unsplash-min.jpg")
      center;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 35vw;
  padding: 20px;
  background-color: #fff;
  @media only screen and (max-width: 380px) {
    width: 75%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 550px) {
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
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;
const Link = styled.a`
  font-size: 12px;
  margin: 10px 0px;
  cursor: pointer;
  text-decoration: underline;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <ButtonHolder>
            <Button>LOG IN</Button>
            <Button>SIGN UP</Button>
          </ButtonHolder>
          <Link>Forget Username</Link>
          <Link>Forget Password</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
