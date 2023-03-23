import React from "react";
import Image from "next/image";

//internal imports
import Style from "./Notification.module.css";

import images from "../../../img";


const Notification = () => {
  return (
    <div className={Style.notify}>
      <p>Noification</p>
      <div className={Style.notify_box}>
        <div className={Style.notify_box_img}>
          <Image
            src={images.hassan}
            alt="notify user 1"
            width={50}
            height={50}
            className={Style.notify_box_img}
          />
        </div>
        <div className={Style.notify_box_info}>
          <h4>Hassan Khan</h4>
          <p>Created a New NFT</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notify_box_info_new}></span>
        {/* not anything  inside span, just styleing the blue mark with notification */}
      </div>
    </div>
  );
};

export default Notification;
