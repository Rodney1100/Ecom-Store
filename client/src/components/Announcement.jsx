import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #adb5bda8;
  color: #000000;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
