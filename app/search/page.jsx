'use client'
import React, { useEffect, useState, useContext } from 'react'

// import Style from './page.module.css'
import {Slider,Brand,Filter} from '../components/indexcomponent'
import NFTCardTwo from "../Collection/components/NFTCardTwo/NFTCardTwo"
import Banner from "../Collection/components/Banner/Banner"
import SearchBar from './components/SearchBar'

import images from "../img";

//SMART CONTRACT IMPORT
// import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const search = () => {
    
    //use States
    // const { fetchNFTs, setError } = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);

  //functions for later
    // useEffect(() => {
    //   try {
    //     fetchNFTs().then((items) => {
    //       setNfts(items.reverse());
    //       setNftsCopy(items);
    //     });
    //   } catch (error) {
    //     setError("Please reload the browser", error);
    //   }
    // }, []);
  
    // const onHandleSearch = (value) => {
    //   const filteredNFTS = nfts.filter(({ name }) =>
    //     name.toLowerCase().includes(value.toLowerCase())
    //   );
  
    //   if (filteredNFTS.length === 0) {
    //     setNfts(nftsCopy);
    //   } else {
    //     setNfts(filteredNFTS);
    //   }
    // };
  
    // const onClearSearch = () => {
    //   if (nfts.length && nftsCopy.length) {
    //     setNfts(nftsCopy);
    //   }
    // };
  
    const collectionArray = [
      images.nft_img_1,
      images.nft_img_2,
      images.nft_img_3,
      images.nft_img_1,
      images.nft_img_2,
      images.nft_img_3,
      images.nft_img_1,
      images.nft_img_2,
    ];
  return (
    <div>
        <Banner bannerImage={images.background_4}/>
        <SearchBar 
        // onHandleSearch={onHandleSearch}
        // onClearSearch={onClearSearch}
        />
        <Filter />
        {/* {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />} */}
        <NFTCardTwo NFTData={collectionArray}/>
        <Brand />
    </div>
  )
}


export default search
