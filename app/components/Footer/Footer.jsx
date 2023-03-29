'use client'
import React from "react";
import Image from "next/image";

import {
  GrClose,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrrownSortedDown,
  TiArrrownSortedUp,
  RiSendPlaneFill,
} from "../icons/icons";

//internal style import
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, Helpcenter } from "../Navbar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image 
          // src={images.logo} 
          src={images.artvalleylogo2}
          alt="logo" 
          // width={100} 
          // height={100} 
          width={125}
          height={125}
          />
          <p>
            Discover the future of digital ownership at TheArtValley.
            With blockchain technology, you can truly own one-of-a-kind digital
            assets.
          </p>
          <div className={Style.footer_social}>
          <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        {/* Discover Section */}
        <div className={Style.footer_box_discover}>
          <h3 className={Style.head}>Discover</h3>
          <Discover />
        </div>

        {/* HelpCenter Section */}
        <div className={Style.footer_box_help}>
          <h3 className={Style.head}>Help Center</h3>
          <Helpcenter />
        </div>

        {/* Subscribe Section */}
        <div className={Style.subscribe}>
          <h3 className={Style.head}>Subscribe</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs TheArtvalley will be the
              world's largest NFT marketplace
            </p>
          </div>
        </div>

      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="text-black text-center">© 2023-2027 Ozone networks. Inc </h2>
    </div>
  );
};

export default Footer;
