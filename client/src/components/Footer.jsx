import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  X,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 25vh;
  padding-top: 50px;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 380px) {
    background-color: #eee;
  }
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  cursor: pointer;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 380px) {
   font-size: 12px;
  }
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const ContactItem = styled.h3`
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.h3``;
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>STORE.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam
          dolorum animi libero harum error ab? Dicta voluptates blanditiis
          perspiciatis nam tempora? Aspernatur rem ea mollitia quasi aperiam?
          Culpa provident ut et mollitia dolor porro perferendis
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <X />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <List>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 123 Simple Street Port St
            Lucie Fl 34987
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> 561-555-5555
          </ContactItem>
          <ContactItem>
            <Email style={{ marginRight: "10px" }} /> Rodney.Plancher@yahoo.com
          </ContactItem>
        </List>
        <Payment src="" />
      </Right>
    </Container>
  );
}

export default Footer;
