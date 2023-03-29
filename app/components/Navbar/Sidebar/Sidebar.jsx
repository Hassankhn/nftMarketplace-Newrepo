'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GrClose,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrrownSortedDown,
  TiArrrownSortedUp,
} from "../../icons/icons";

//internall imports
import Style from "./Sidebar.module.css";
import images from "../../../img";
import { Button } from "../../indexcomponent";
import Discover from "../Discover/Discover";
import Helpcenter from "../Helpcenter/Helpcenter";

const Sidebar = ({ setOpenSidebar }) => {
  //this prop is sent in the Navbar.jsx file
  //use states
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  //Creating functions
  const openDiscovermenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSidebar(false);
  };

  //object aarays for discover and help
  const discover = [
    {
      name: "Collections",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author_profile",
    },
    {
      name: "NFT details",
      link: "nft_details",
    },
    {
      name: "Abous us",
      link: "about_us",
    },
    {
      name: "Contact us",
      link: "contact_us",
    },
    {
      name: "Account settings",
      link: "account_settngs",
    },
    {
      name: "Connect Wallet",
      link: "connect_wallet",
    },
  ];

  const help = [
    {
      name: "About us",
      link: "about_us",
    },
    {
      name: "Contact us",
      link: "contact_us",
    },
    {
      name: "Signin",
      link: "signin",
    },
  ];


  return (
    <div className={Style.sidebar}>
      <GrClose 
      className={Style.sidebar_close_btn}
      onClick={() => closeSideBar()} />
      <div className={Style.sidebar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Disciver the most succeful NFTs </p>
        <div className={Style.sidebar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
        </div>
      </div>

      <div className={Style.sidebar_menu}>

        {/* Discover menu */}
        <div>
          <div className={Style.sidebar_menu_box} onClick={() => openDiscovermenu()}>
            <p>Discover</p>
            <TiArrrownSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sidebar_discover}>
              {discover.map((el, i) => {
                return (
                  <p key={i}>
                    <Link href={{ pathname: el.link }}>{el.name}</Link>
                  </p>
                );
              })}
            </div>
          )}
          {/* //end hoja */}
        </div>

        {/* Helpcenter menu */}
        <div>
          <div className={Style.sidebar_menu_box} onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrrownSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sidebar_discover}>
              {help.map((el, i) => {
                return (
                  <p key={i}>
                    <Link href={{ pathname: el.link }}>{el.name}</Link>
                  </p>
                );
              })}
            </div>
          )}
          {/* helpcenter map end here */}
        </div>
      </div>

      <div className={Style.sidebar_button}>
        <Button btnName="Create" handleClick={()=>{}}/>
        <Button btnName="Connect wallet" handleClick={()=>{}}/>
      </div>
    </div>
  );
};

export default Sidebar;
