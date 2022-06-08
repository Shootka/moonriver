import React from 'react';
import './Card.scss'

const Card = ({url, name, desc, price, flag = false}) => {
  return (
    <>
      {flag &&
        <div className={'main-card'} style={{backgroundImage: `url(${url})`}}>
          <div className={'prod-main'}>
            <p className={'main-product-name'}>{name}</p>
            <p className={'main-product-desc'}>{desc}</p>
            <p className={'main-product-price'}>{price}</p>
          </div>

        </div>
      }
      {!flag &&
        <div className={'product-card'}>
          <img className={'product-img'} src={url} alt=""/>
          <div className={'about-prod '}>
            <p className={'product-name'}>{name}</p>
            <p className={'product-desc'}>{desc}</p>
            <p className={'product-price'}>{price}</p>
          </div>
        </div>
      }
    </>
  );
};

export default Card;