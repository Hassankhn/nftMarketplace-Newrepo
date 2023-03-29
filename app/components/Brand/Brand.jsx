import React from 'react'
import Image from "next/image";
import { DiJqueryLogo } from "../icons/icons";
// import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img/index"
import { Button } from "../indexcomponent";
const Brand = () => {
    // const router = useRouter();
    return (
      <div className={Style.Brand}>
        <div className={Style.Brand_box}>
          <div className={Style.Brand_box_left}>
            <Image src={images.artvalleylogo2} 
            alt="brand logo" 
            // width={100} 
            // height={100}
            width={140}
            height={140}
             />
            {/* <a href="/">
              <DiJqueryLogo className={Style.Brand_box_left_logo} />
            </a> */}
            <h1>Earn crypto with TheArtValley</h1>
            <p>A blooming agency that lead and inspire.</p>
  
            <div className={Style.Brand_box_left_btn}>
              <Button
                btnName="Create"
                // handleClick={() => router.push("/uploadNFT")}
                handleClick={()=>{}}
              />
              <Button
                btnName="Explore Now"
                // handleClick={() => router.push("/searchPage")}
                handleClick={()=>{}}
              />
            </div>
          </div>
          <div className={Style.Brand_box_right}>
            <Image src={images.earn} alt="brand logo" width={800} height={600} />
          </div>
        </div>
      </div>
    );
}

export default Brand