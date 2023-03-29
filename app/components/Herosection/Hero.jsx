'use client'
import React from "react";
import Image from "next/image";
//internal module
import Style from "./Hero.module.css";
import images from "../../img/index";
import { Button } from "../indexcomponent";

const Hero = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.hero_box}>
        <div className={Style.hero_box_left}>
          <h1>Explore, collect, and sell NFTs 🖼</h1>
          <p>
            The Art Valley marketplace to Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName='Explore Now'/>
        </div>
        <div className={Style.hero_box_right}>
            <Image 
            src={images.Heroimg}
            alt="Hero Section image"
            width={600}
            height={600}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
