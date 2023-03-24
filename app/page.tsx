import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Navbar,Footer} from './components/indexcomponent'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}
