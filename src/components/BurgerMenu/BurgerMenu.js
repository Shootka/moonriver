import React, {useEffect, useState} from 'react';
import './BurgerMenu.scss'
import '../../App.css'
import BurgerElements from "./BurgerElements/BurgerElements";
import {useSelector} from "react-redux";

const BurgerMenu = () => {
  const burgerList = useSelector(state => state.burgerMenuList.data)
  const isOpen = useSelector(state => state.burgerMenu.isOpen)
  const {headers, items} = {...burgerList}
  const [currentTab, setCurrentTab] = useState("");

  useEffect(()=>{
    setCurrentTab(typeof headers === "undefined"  ? "" : headers[0]?.id)
  }, [headers])

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  }

  return (
    !!isOpen && <div className={"burger"} style={{display: !!isOpen ? `block` : 'none'}}>

      <div style={{background: "#2F2F2F"}}>
        <div className={"burger-head-list container"}>
          {headers?.map(el => {
            return <div id={el.id}
                        key={el?._id}
                        onClick={(handleTabClick)}
                        className={"burger-head" + ` ${currentTab === el.id ? 'active-head' : ''}` }>{el.name}</div>
          })}
        </div>
        <div>
          <BurgerElements items={items} currentTab={currentTab}/>
        </div>
      </div>

    </div>
  );
};

export default BurgerMenu;