'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//importing icons
import {
  MdNotifications,
  BsSearch,
  CgMenuLeft,
  CgMenuRight,
} from "../icons/icons";
import images from "../../img";
import Button from '../Button/Button'

//internal style import
import Style from "./Navbar.module.css";
import {Discover,Helpcenter,Notification,Profile,Sidebar} from './index'



const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [OpenSidebar, setOpenSidebar] = useState(false);

  const openmenu = (e) => {
    console.log('Button Clicked',e.target.innerText)
    const btntext = e.target.innerText; //once someone click on text/menue we will get the text

    if (btntext == "Discover") {
      setDiscover(!discover);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btntext == "Help Center") {
      setHelp(!help);
      setNotification(false);
      setProfile(false);
      setDiscover(false);
    } else {
      setNotification(false);
      setHelp(false);
      setDiscover(false);
      setProfile(false);
    }
  };

  const opennotification = () => {
    if (typeof Notification === 'undefined') {
      setNotification(true);
      setHelp(false);
      setProfile(false);
      setDiscover(false);
    } else {
      setNotification(false);
    }
  };

  const openprofile = () => {
    if (!Profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const opensidemenu = () => {
    if (!OpenSidebar) {
      setOpenSidebar(true);
    } else {
      setOpenSidebar(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>

        {/* Left Section of navbar */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="logo" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" name="search_nft" placeholder="Search NFTs" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* //Right Section Starts */}
        <div className={Style.navbar_container_right}>

            {/* Discover Menue */}
          <div className={Style.navbar_container_right_discover}>
            <p
              onClick={(e) => {
                openmenu(e);
              }}
            >
              Discover
            </p>
            {/* //If discover is true then it will display the discover menue */}

            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                 <Discover />
              </div>
            )}
          </div>

          {/* Help Centre */}
          <div className={Style.navbar_container_right_help}>
            <p
              onClick={(e) => {
                openmenu(e);
              }}
            >
              Help Center
            </p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <Helpcenter />
              </div>
            )}
          </div>

          {/* Notification Menu */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              onClick={(e) => opennotification()}
              className={Style.notify_icon}
            />
            {notification && <Notification />}
          </div>

          {/* Cretate button */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={()=>{}}/>
          </div>

          {/* Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.nouman}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openprofile()}
                className={Style.navbar_container_right_userimg}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button This will only appear in Mobile devices */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.navbar_container_menuicon}
              onClick={() => {
                opensidemenu();
              }}
            />
          </div>
        </div>
      </div>
      {/* Sidebar component */}
      {OpenSidebar && (
        <div className={Style.sidebar}>
          <Sidebar setOpenSidebar={setOpenSidebar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
