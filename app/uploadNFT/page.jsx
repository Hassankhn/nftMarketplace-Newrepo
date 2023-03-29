'use client'
import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "./page.module.css";
import { UploadNFT } from "../components/UploadNFT/UploadNFTindex";

//SMART CONTRACT IMPORT
// import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const page = () => {
  // const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>You can set preferred display name, create your profile URL and
            manage other personal settings.</p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image, designs</h2>
          <p>File types supported: JPG, PNG, GIF, SVG. Max size: 100 MB</p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT
          //   uploadToIPFS={uploadToIPFS} createNFT={createNFT}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
