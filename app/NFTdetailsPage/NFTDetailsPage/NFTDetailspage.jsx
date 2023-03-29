'use client'
import React from 'react'

//internal imports 
import Style from './NFTDetailspage.module.css'
import NFTDescription from '../NFTDescription/NFTDescription'
import NFTDetailsImg from '../NFTDetailsImg/NFTDetailsImg'

const NFTDetailspage = () => {
    return (
        <div className={Style.NFTDetailsPage}>
          <div className={Style.NFTDetailsPage_box}>
            <NFTDetailsImg 
            // nft={nft} 
            />
            <NFTDescription 
            // nft={nft} 
            />
          </div>
        </div>
      );
}


export default NFTDetailspage
