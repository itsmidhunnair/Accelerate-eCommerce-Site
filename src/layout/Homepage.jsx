import React from "react";
import Carousel from "../components/carousel/Carousel";
import Categories from "../components/categories/Categories";
import Navbar from "../components/common/navbar/Navbar";
import ProductContainers from "../components/plp/ProductContainers";
import PromoBanner from "../components/promoBanner/PromoBanner";
import SmallBanner from "../components/smallBanner/SmallBanner";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <PromoBanner />
      <Categories />
      <SmallBanner />
      <ProductContainers />
      <Footer />
    </>
  );
};

export default Homepage;
