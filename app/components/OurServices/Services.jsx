'use client'
import React from 'react'
import Image from 'next/image'

//internal imports
import Style from './Services.module.css'
import images from '../../img/index'
import { Margin } from '@mui/icons-material'

const Services = () => {
  return (
    <div className={Style.services}>
        <div className={Style.services_box}>
            
            <div className={Style.servic_box_item}>
                <Image 
                src={images.Explore}
                alt='service 1'
                width={80}
                height={80}
                style={{margin:"auto"}}
                />
                <p className={Style.servic_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Explore NFTs</h3>
                <p>Connect Wallet, Eplore NFTs, Buy and sell your NFTs Earn Profit</p>
            </div>

            <div className={Style.servic_box_item}>
                <Image 
                src={images.Wallet}
                alt='service 2'
                width={80}
                height={80}
                style={{margin:"auto"}}
                />
                <p className={Style.servic_box_item_step}>
                    <span>Step 2</span>
                </p>
                <h3>Wallet Connection</h3>
                <p>Connect Your Wallet,to Enjoye the Experience, buying and selling NFTs</p>
            </div>

            <div className={Style.servic_box_item}>
                <Image 
                src={images.Service3}
                alt='service 3'
                width={80}
                style={{margin:"auto"}}
                height={80}/>
                <p className={Style.servic_box_item_step}>
                    <span>Step 3</span>
                </p>
                <h3>Buying/Selling NFTs</h3>
                <p>Starting Buying your favourite NFTs, Sale new one,Resell NFTs</p>
            </div>

            <div className={Style.servic_box_item}>
                <Image 
                src={images.Service4}
                alt='service 4'
                width={80}
                height={80}
                style={{margin:"auto"}}
                />
                <p className={Style.servic_box_item_step}>
                    <span>Step 4</span>
                </p>
                <h3>Start Earning</h3>
                <p>Connect Wallet, Eplore NFTs, Buy and sell your NFTs, Start Earning</p>
            </div>

            
            </div>    
    </div>
  )
}

export default Services 
