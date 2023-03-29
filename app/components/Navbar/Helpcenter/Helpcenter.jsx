'use client'
import React from 'react'
import Link from 'next/link'

//internal imports
import  Style from"./Helpcenter.module.css"

const Helpcenter = () => {
  const help=[
    {
      name:"About us",
      link:"about_us"
    },
    {
      name:"Contact us",
      link:'contact_us'
    },
    {
      name:'Signin',
      link:'signin'
    }
  ]
  return (
    <div className={Style.helpcenterstyle}>
      { help.map((el,i)=>{
        return(
        <div key={i} className={Style.helpmap}>
          <Link href={{pathname : el.link }}>{el.name}</Link>
        </div>
        )
      })}    
    </div>
  )
}

export default Helpcenter