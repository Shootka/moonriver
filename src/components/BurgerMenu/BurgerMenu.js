import React, {useState} from 'react';
import './BurgerMenu.scss'
import '../../App.css'
import BurgerElement from "./BurgerElement/BurgerElement";
import {Link} from "react-router-dom";

const BurgerMenu = ({elements}) => {
  const {headers, items} = {...elements}
  console.log(headers)
  console.log(items?.item[2].name)
  // const initialID = headers?.length === 0 ? "" : headers[0].id
  // console.log(initialID, " wwwwwwww")
  // const [currentTab, setCurrentTab] = useState(`${initialID}`);
  // const handleTabClick = (e) => {
  //   setCurrentTab(e.target.id);
  // }

  return (
    <div className={"burger "}>
      <div style={{background: "#2F2F2F"}}>
        <div className={"burger-head-list container"}>
          {headers?.map(el => {
            return <div id={el.id} key={Math.random()} className={"burger-head"}>{el.name}</div>
          })}
        </div>
        <div>
        {items?.map(item => {
          return  <h4 className={"item-title"}>32{item?.name}</h4>
          // <div key={Math.random()} className={'burger-item'}>

            {/*{item?.subItems.map(subItem => {*/}
            {/*  return <Link to={"/"} key={Math.random()} className={"item-link"}>{subItem}</Link>*/}
            {/*})}*/}
          // </div>
        })}
        </div>
        {/*<BurgerElement items={elements}/>*/}
      </div>
    </div>
  );
};

export default BurgerMenu;