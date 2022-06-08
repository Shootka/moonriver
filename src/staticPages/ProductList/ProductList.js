import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../../components/Card/Card";
import './ProductList.scss'
import {useDispatch, useSelector} from "react-redux";

const ProductList = () => {

  const cardList = useSelector(state => state.cardList.data)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('/productList.json')
      .then(res => dispatch({type: "SET_CARDS", payload: res.data}))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className={'prod-list'}>
      {
        cardList.map(card => {
          if (card.id === '1.5') {
            return (<Card key={card.id}
                          url={card.url}
                          name={card.name}
                          desc={card.desc}
                          price={card.price}
                          flag={true}/>
            )
          } else {
            return (<Card key={card.id}
                          url={card.url}
                          name={card.name}
                          desc={card.desc}
                          price={card.price}
                          />
            )
          }
        })
      }
    </div>
  );
};

export default ProductList;