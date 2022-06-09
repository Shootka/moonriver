import React from 'react';
import '../BurgerMenu.scss'
import '../../../App.css'
import {Link} from "react-router-dom";

const BurgerElements = ({items, currentTab}) => {
  return (
    <div className={"burger-items-bg "}>
      <div className={'items-list container'}>
        {items?.map(item => {
            return item?.item?.map(i => {
              if (currentTab === `${item.id}`) {
                return <div className={"burger-item-box"}>
                  <h4 className={"item-title"}>{i?.name}</h4>
                  {i?.subItems.map(subI => {
                    return <Link to={"/"} className={"item-link"}>{subI}</Link>
                  })}
                </div>
              }})
        })}
      </div>
    </div>
  );
};

export default BurgerElements;