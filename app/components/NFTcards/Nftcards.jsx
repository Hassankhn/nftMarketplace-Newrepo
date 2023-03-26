"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//internal imports
import Style from "./Nftcards.module.css";
import { AiFillHeart, AiOutlineHeart, BsImages } from "../icons/icons";
import images from "../../img/index";

//while using API should be using { NFTData } us props for this function
const Nftcards = () => {
  //use states
  const [like, setLike] = useState(true);

  //Functions
  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  //array for card
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={Style.NFTCard}>
      {cards.map((el, i) => (
        //   NFTData.map((el, i) =>
        <Link href={{ pathname: "/NFT-details", query: el }}>
          <div className={Style.NFTCard_box} key={i + 1}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={images.nft_img_2}
                alt="NFT images"
                width={600}
                height={600}
                className={Style.NFTCard_box_img_img}
              />
            </div>

            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNft()}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                  {""} 31
                </div>
              </div>

              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining time</small>
                  <p>17h : 8m : 30s</p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>
                    {/* {el.name} #{el.tokenId} */}
                    Token# 11222389
                  </h4>

                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={Style.NFTCard_box_update_details_price_box_bid}
                    >
                      <small>Current Bid</small>
                      <p>
                        {/* {el.price} */}
                        0.00087 ETH
                      </p>
                    </div>
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    >
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.NFTCard_box_update_details_category}>
                {/* NFTCard_box_update_details_price_box_stock  css not working*/}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Nftcards;
