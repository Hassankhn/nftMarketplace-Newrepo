'use client'
import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import  NFTCardTwo  from '../../Collection/components/NFTCardTwo/NFTCardTwo'
// import { Loader } from "../../components/componentsindex";


const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  // nfts,
  // myNFTS,
}) => {

  //object Arrays
  const collectiablesArray = [
    images.nft_img_1,
    images.nft_img_2,
    images.nft_img_3,
    images.nft_img_4,
    images.nft_img_5,
    images.nft_img_2,
    images.nft_img_3,
    images.nft_img_4,
  ];

  const createdArray = [
    images.nft_img_5,
    images.nft_img_2,
    images.nft_img_3,
    images.nft_img_4,
  ];

  const likeArray = [
    images.nft_img_1,
    images.nft_img_2,
    images.nft_img_3,
    images.nft_img_4,
    images.nft_img_5,
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {/* in CardTwo We will pass nfts as props */}
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray } />}
      {like && <NFTCardTwo NFTData={likeArray } />}
    </div>
  )
}

export default AuthorNFTCardBox
