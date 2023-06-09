'use client'
import React from 'react'
import Link from 'next/link'

//internal imports
import Style from './Discover.module.css'

const Discover = () => {
  const discover =[
    {
    name: 'Collections',
    link: 'Collection'
  },
  {
    name: 'Search',
    link: 'search'
  },
  {
    name: 'Author Profile',
    link: 'author'
  },
  {
    name: 'NFT details',
    link: '#'
    // 'NFTdetailsPage'
  },
  // {
  //   name: 'Account settings',
  //   link: 'account_settngs'
  // },
  {
    name: 'Upload NFT',
    link: 'uploadNFT'
  },
  {
    name: 'Connect Wallet',
    link: 'connectWallet'
  },

]
  return (
    <div>
    {
      discover.map((el,i)=>{
        return(
        <div key={i} className={Style.discvoer}>
          <Link href={{pathname : el.link }}>{el.name}</Link>
        </div>
      )})
    }
  </div>
  )
}

export default Discover