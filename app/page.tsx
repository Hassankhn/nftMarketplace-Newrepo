'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import images from './img/index'
import {Hero,Navbar,Footer} from "./components/indexcomponent"
// had create a style file in a style folder and was imported try using tailwind



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />  
      <Footer />    
    </div>
  )
}
