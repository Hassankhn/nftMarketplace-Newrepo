"use client";
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
  Collection,
  Brand,
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
        heading="Explore NFTs By Collection"
        paragraph="Discover the crueent trending NFTs in all categories"
      />
      <Collection />
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
      {/* <Brand /> */}
      <Footer />
    </div>
  );
}
