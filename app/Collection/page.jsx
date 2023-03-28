import Banner from './components/Banner/Banner'
import Collectionprofile from './components/Collectionprofile/Collectionprofile'
import NFTCard2 from './components/NFTCardTwo/NFTCardTwo'
import { Slider,Filter } from '../components/indexcomponent'
import images from '../img/index'
export default function Collection (){
    const NFtarray = [
        images.nft_img_1,
        images.nft_img_2,
        images.nft_img_3,
        images.nft_img_1,
        images.nft_img_2,
        images.nft_img_3,
      ];
    return(
        <div>
            <Banner bannerImage={images.background_1}/>
            <Collectionprofile />
            <Filter />
            <NFTCard2 NFTData={NFtarray}/>
        </div>
    )
}