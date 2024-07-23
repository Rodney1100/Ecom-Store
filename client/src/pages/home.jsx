import React from "react";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <NewLetter />
      <Footer/>
    </div>
  );
};

export default Home;
