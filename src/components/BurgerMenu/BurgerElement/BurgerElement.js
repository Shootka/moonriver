import React from 'react';
import '../BurgerMenu.scss'
import {Link} from "react-router-dom";

const BurgerElement = ({items}) => {
  console.log("elem ===", items)
  return (
    <div className={"burger-items-list"}>
      {items.map(item => {
        return <div key={Math.random()} className={'burger-item'}>
          <h4 className={"item-title"}>{item.name}</h4>
          {item?.subItems.map(subItem => {
            return <Link to={"/"} key={Math.random()} className={"item-link"}>{subItem}</Link>
          })}
        </div>
      })}
    </div>
  );
};

export default BurgerElement;