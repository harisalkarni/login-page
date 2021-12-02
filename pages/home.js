import React from "react";
import NavBar from "../components/NavBar";
import { SliderData } from "../components/SliderData";
import ImageSlider from "../components/ImageSlider";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home2() {
    return <div>
        <NavBar />;
        <ImageSlider slides={SliderData} />;
        {/* <Search /> */}
        <Carousel />
        <Footer />
    </div>
        
    
  };