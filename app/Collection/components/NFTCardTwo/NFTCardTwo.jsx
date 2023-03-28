'use client'
import React,{useState} from "react";
import Image from "next/image";
import {
  BsImage,
  MdVerified,
  MdTimer,
  AiFillHeart,
  AiOutlineHeart,
} from "../../../components/icons/icons";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";

const NFTCardTwo = ({NFTData}) => {
  //use states
 
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  //like funxtion
  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  //for now using custom data
  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className={Style.NFTCardTwo_box} key={i + 1}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  <p onClick={() => likeNFT()}>
                    {like ? <AiOutlineHeart /> : <AiFillHeart />}
                    {""}
                    <span>{likeInc + 1}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              <Image
                // src={el.image}
                src={el}
                alt="NFT"
                width={500}
                height={500}
                objectFit="cover"
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                {/* <LikeProfile /> */}
                {/* <p>{el.name}</p> */}
                <p>Token #</p>
              </div>
              <small>4{i + 2}</small>
            </div>

            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current Bid</small>
                {/* <p>{el.price || i + 4} ETH</p> */}
                <p>001{i+5} ETH</p>
              </div>
              <p className={Style.NFTCardTwo_box_price_stock}>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
