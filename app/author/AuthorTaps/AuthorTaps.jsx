import React, { useState } from "react";
import Image from "next/image";
import {TiArrrownSortedUp,TiArrrownSortedDown,TiTick} from "react-icons/ti"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

//internal imports 
import Style from './AuthorTaps.module.css'

//Receiving props
const AuthorTaps = ({
  setCollectiables,
  setCreated,
  setLike,
}) => {

  //use States
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);//it was 1
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  //object array
  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  //function
  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    // if (btnText == "Listed NFTs") 
    if(btnText == "Collectables"){
      setCollectiables(true);
      setCreated(false);
      setLike(false);
      setActiveBtn(1);
    } 
    // else if (btnText == "Own NFT") 
    if(btnText == "Created")
    {
      setCollectiables(false);
      setCreated(true);
      setLike(false);
      setActiveBtn(2);
    } else if (btnText == "Liked") {
      setCollectiables(false);
      setCreated(false);
      setLike(true);
      setActiveBtn(3);
    } 
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
        <div className={Style.AuthorTaps_box_left_btn}>
        <button
            className={`${activeBtn == 1 ? Style.active : ""}`}
            onClick={(e) => openTab(e)}
          >
            Collectables{/* Listed NFTs */}
          </button>
          <button
            className={`${activeBtn == 2 ? Style.active : ""}`}
            onClick={(e) => openTab(e)}
          >
            Created {/* Own NFT  */}
          </button>
          <button
            className={`${activeBtn == 3 ? Style.active : ""}`}
            onClick={(e) => openTab(e)}
          >
            Liked
          </button>
        </div>
        </div>

        <div className={Style.AuthorTaps_box_right}>
        <div
          className={Style.AuthorTaps_box_right_para}
          onClick={() => openDropDownList()}
        >
          <p>{selectedMenu}</p>
          {/* {openList ? 
          // <TiArrrownSortedUp /> : <TiArrrownSortedDown />
          } */}
          {openList ? 
          <ArrowDropUpIcon /> : <ArrowDropDownIcon />
          }
        </div>

               {openList && (
          <div className={Style.AuthorTaps_box_right_list}>
            {listArray.map((el, i) => (
              <div
                key={i + 1}
                onClick={() => setSelectedMenu(el)}
                className={Style.AuthorTaps_box_right_list_item}
              >
                <p>{el}</p>
                <span>{selectedMenu == el && <TiTick />}</span>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  
  )
}

export default AuthorTaps

  //     <div className={Style.AuthorTaps_box_right}>
  //       <div
  //         className={Style.AuthorTaps_box_right_para}
  //         onClick={() => openDropDownList()}
  //       >
  //         <p>{selectedMenu}</p>
  //         {openList ? <TiArrrownSortedUp /> : <TiArrrownSortedDown />}
  //       </div>

  //       {openList && (
  //         <div className={Style.AuthorTaps_box_right_list}>
  //           {listArray.map((el, i) => (
  //             <div
  //               key={i + 1}
  //               onClick={() => setSelectedMenu(el)}
  //               className={Style.AuthorTaps_box_right_list_item}
  //             >
  //               <p>{el}</p>
  //               <span>{selectedMenu == el && <TiTick />}</span>
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // </div>
