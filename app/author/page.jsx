'use client'
import React, { useState, useEffect, useContext } from "react";

// //internal imports
import Style from "./page.module.css";
import Banner from "../Collection/components/Banner/Banner"
import NFTCardTwo  from "../Collection/components/NFTCardTwo/NFTCardTwo";
import { Brand, Title } from "../components/indexcomponent";
import AuthorNFTCardBox from "./AuthorNFTCardBox/AuthorNFTCardBox";
import AuthorProfileCard from "./AuthorProfileCard/AuthorProfileCard";
import AuthorTaps from "./AuthorTaps/AuthorTaps";
import images from "../img/index";

export default function author()  {
  //use states
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);

  //object arrays
  //   const followerArray = [
  //     {
  //       background: images.creatorbackground1,
  //       user: images.user1,
  //       seller: "7d64gf748849j47fy488444",
  //     },
  //     {
  //       background: images.creatorbackground2,
  //       user: images.user2,
  //       seller: "7d64gf748849j47fy488444",
  //     },
  //     {
  //       background: images.creatorbackground3,
  //       user: images.user3,
  //       seller: "7d64gf748849j47fy488444",
  //     },
  //     {
  //       background: images.creatorbackground4,
  //       user: images.user4,
  //       seller: "7d64gf748849j47fy488444",
  //     },
  //     {
  //       background: images.creatorbackground5,
  //       user: images.user5,
  //       seller: "7d64gf748849j47fy488444",
  //     },
  //     {
  //       background: images.creatorbackground6,
  //       user: images.user6,
  //       seller: "7d64gf748849j47fy488444",
  //     },
  //   ];

  const popularArray = [
    images.nouman,
    images.Awan,
    images.hassan,
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.hassan,
  ];

  //IMPORT SMART CONTRACT DATA
//   const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
//     NFTMarketplaceContext
//   );

//   const [nfts, setNfts] = useState([]);
//   const [myNFTs, setMyNFTs] = useState([]);

//   useEffect(() => {
//     fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
//       setNfts(items);
//     });
//   }, []);

//   useEffect(() => {
//     fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
//       setMyNFTs(items);
//     });
//   }, []);
  
return (
    <div className={Style.author}>
      <Banner bannerImage={images.background_2} />
      <AuthorProfileCard 
    //   currentAccount={currentAccount} 
      />
       <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
      />

               <AuthorNFTCardBox  
        collectiables={collectiables}
        created={created}
        like={like}
//         nfts={nfts}
//         myNFTS={myNFTs}
      />
           <Brand /> 
    </div>
  );
};

