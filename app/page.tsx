"use client";
import styles from "./page.module.css";
import {
  Hero,
  Navbar,
  Footer,
  Services,
  NFTSlider,
  Subscribe,
  Category,
  Title,
  Filter,
  Cards,
} from "./components/indexcomponent";
// had create a style file in a style folder and was imported try using tailwind

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <NFTSlider />
      <Title
        heading="Trending NFTs"
        paragraph="Discover the crueent trending NFTs in all categories"
      />
      <Filter />
      <Cards />
      <Subscribe />
      <Title
        heading="Explore by Category"
        paragraph="Explore the NFTs by relevent categories"
      />
      <Category />
      <Footer />
    </div>
  );
}
