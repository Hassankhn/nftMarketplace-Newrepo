'use client'
import React from "react";
import Image from "next/image";

//internal imports
import Style from "./Category.module.css";
import images from "../../img/index";
import { BsCircleFill } from "../icons/icons";

const Category = () => {

  //Not handling different images
  const Categories = [
    {
        images: images.catogry1,
        name: "Entertainment",
      },
      {
        images: images.catogry2,
        name: "Photograpy",
      },
      {
        images: images.catogry3,
        name: "Musics",
      },
      {
        images: images.category4,
        name: "Sports",
      },
      {
        images: images.background_1,
        name: "Animals ",
      }
  ];
  return (
    <div className={Style.category}>
      <div className={Style.category_box}>
        {Categories.map((el, i) => {
          return (
            <div className={Style.category_box_box} key={i}>
              <Image
                src={el.images}
                alt="category 1"
                width={350}
                height={150}
                className={Style.category_box_img}
              />
              <div className={Style.category_box_title}>
                <span>
                  <BsCircleFill />
                </span>
                <div className={Style.category_box_title_info}>
                  <h4>{el.name}</h4>
                  <small>198 NFTs</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
