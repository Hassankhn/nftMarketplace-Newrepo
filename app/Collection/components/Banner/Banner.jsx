'use client'
import React from 'react'
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Banner.module.css";

const Banner = ({bannerImage}) => {
    return (
        <div className={Style.banner}>
          <div className={Style.banner_img}>
            <Image
              src={bannerImage}
              alt="background"
              width={1600}
              height={100}
              className={Style.banner_img_bg}
            />
          </div>
    
          <div className={Style.banner_img_mobile}>
            <Image
              src={bannerImage}
              alt="background"
              width={1600}
              height={300}
            />
          </div>
        </div>
      );
}

export default Banner