import React, { useState, useEffect } from "react";

//internal imports
import Style from "./Collection.module.css";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "../icons/icons";
import images from "../../img/index";
import DaysComponent from "./Daycollections/DayComponent";

const Collection = () => {
  //use states
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  //object array for collection cards
  const CardArray = [
    {
      background: images.createrbackground7,
      user: images.hassan,
    },
    {
      background: images.background_1,
      user: images.nouman,
    },
    {
      background: images.background_6,
      user: images.Awan,
    },
    // {
    //   background: images.musicbg,
    //   user: images.user1,
    // },
    // {
    //   background: images.background_4,
    //   user: images.user1,
    // },
    // {
    //   background: images.background_5,
    //   user: images.user2,
    // },
    // {
    //   background: images.catogry2,
    //   user: images.user2,
    // },
  ];

  const followingArray = [
    {
      background: images.catogry2,
      user: images.hassan,
    },
    {
      background: images.background_6,
      user: images.Awan,
    },
    {
      background: images.catogry1,
      user: images.user1,
    },
    // {
    //   background: images.musicbg,
    //   user: images.user4,
    // },
    // {
    //   background: images.Art,
    //   user: images.user2,
    // },
    // {
    //   background: images.catogry1,
    //   user: images.nouman,
    // },
    // {
    //   background: images.background_2,
    //   user: images.Awan,
    // },
    // {
    //   background: images.catogry2,
    //   user: images.user2,
    // },{
    //     background: images.catogry1,
    //     user: images.user1,
    //   },
    //   {
    //     background: images.catogry2,
    //     user: images.user2,
    //   }
  ];

  const newsArray = [
    {
        background: images.catogry2,
        user: images.user2,
      },
      {
        background: images.catogry3,
        user: images.user3,
      },
      {
        background: images.background_2,
        user: images.Awan,
      },
      {
        background: images.catogry2,
        user: images.user2,
      },
    
  ];

  //Functions 
  //popular
  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
    return (
      <div className={Style.collection}>
        <div className={Style.collection_title}>
          <h2>Top List Creators</h2>
          <div className={Style.collection_collections}>
            <div className={Style.collection_collections_btn}>
              <button onClick={() => openPopular()}>
                <BsFillAlarmFill /> 24 hours
              </button>
              <button onClick={() => openFollower()}>
                <BsCalendar3 /> 7 days
              </button>
              <button onClick={() => openNews()}>
                <BsFillCalendarDateFill /> 30 days
              </button>
            </div>
          </div>
        </div>
        {popular && (
          <div className={Style.collection_box}>
            {CardArray.map((el, i) => (
              <DaysComponent key={i + 1} i={i} el={el} />
            ))}
          </div>
        )}
  
        {following && (
          <div className={Style.collection_box}>
            {followingArray.map((el, i) => (
              <DaysComponent key={i + 1} i={i} el={el} />
            ))}
          </div>
        )}
  
        {news && (
          <div className={Style.collection_box}>
            {newsArray.map((el, i) => (
              <DaysComponent key={i + 1} i={i} el={el} />
            ))}
          </div>
        )}
      </div>
    );
};

export default Collection;
