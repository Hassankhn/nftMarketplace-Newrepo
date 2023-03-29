'use client'
import React, { useEffect, useState, useContext } from "react";
// import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/indexcomponent";
import NFTDetailspage from "./NFTDetailsPage/NFTDetailspage";
// import NFTTabs from "./NFTTabs/NFTTabs";
// import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

//IMPORT SMART CONTRACT DATA
// import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const page = () => {
    // const { currentAccount } = useContext(NFTMarketplaceContext);

    // const [nft, setNft] = useState({
    //   image: "",
    //   tokenId: "",
    //   name: "",
    //   owner: "",
    //   price: "",
    //   seller: "",
    // });
  
    // const router = useRouter();
    // useEffect(() => {
    //   if (!router.isReady) return;
    //   setNft(router.query);
    // }, [router.isReady]);
  
    return (
      <div>
        <NFTDetailspage 
        // nft={nft} 
        />
        <Category />
        <Brand />
      </div>
    );
}

export default page
