'use client'
import React from 'react'
import Image from 'next/image'
import {
  FaUserAlt,
  FaRegImage,
  FaUserEdit,
  MdHelpCenter,
  TbDownloadOff,
  TbDownload
} from '../../icons/icons'
import Link from 'next/link'

//internal imports
import Style from './Profile.module.css'
import images from '../../../img'


const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image 
        src={images.nouman} 
        alt='user profile'
        width={50}
        height={50}
        className={Style.profile_img}        
        />
        <div className={Style.profile_account_info}>
          <p>Hassan Khan</p>
          <small>x034214612898...</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{pathname : '/myprofile'}}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{pathname : '/my_items'}}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{pathname : '/edit_profile'}}>Edit Profile</Link>
            </p>
          </div>
        </div>
        {/* We want to give a line between first 3 menue items and last menue item */}
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{pathname : '/help'}}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{pathname : '/disconnect'}}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile