'use client'
import React from 'react'
import Image from 'next/image'


//internal import
import Style from './Subscribe.module.css'
import images from '../../img/index'
import {RiSendPlaneFill} from '../icons/icons'

const Subscribe = () => {
  return (
    <div className={Style.subsribe}>
        <div className={Style.subscribe_box}>
          
            {/* Left section */}
            <div className={Style.subscribe_box_left}>
                <h2>Never miss an update!</h2>
                <p>Subcribe to our exclusive drop list and be the first to know abour upcoming drops</p>
                
                <div className={Style.subscribe_box_left_box}>
                    <span>01</span>
                    <small>Get more discounts</small>
                </div>

                <div className={Style.subscribe_box_left_box}>
                    <span>02</span>
                    <small>Get latest trends</small>
                </div>

                <div className={Style.subscribe_box_left_input}>
                    <input type="email" placeholder='Enter Email ...'  />
                    <RiSendPlaneFill className={Style.subscribe_box_left_input_icon}/>
                </div>
            </div>

            {/* //Right Section */}
            <div className={Style.subscribe_box_right}>
                <Image 
                src={images.community}
                width={800}
                height={800}
                alt='community image'/>
            </div>

        </div>
    </div>
  )
}

export default Subscribe
