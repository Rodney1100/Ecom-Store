import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  @media only screen and (max-width: 380px) {
    height: 50px;
  }

  /* ${mobile({ backgroundColor: "red" })} */
`;

const Wrapper = styled.div`
  align-items: center;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    padding: 10px 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  padding: 5px;
  outline-width: 0;
  @media only screen and (max-width: 380px) {
    width: 50px;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  @media only screen and (max-width: 380px) {
    font-size: 24px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 380px) {
    flex: 2;
    justify-content: center;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media only screen and (max-width: 380px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{ color: "gray", fontSize: 20, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>STORE.</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
