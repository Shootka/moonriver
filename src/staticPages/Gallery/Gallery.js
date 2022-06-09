import React, {useEffect, useState} from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Icon from "../../components/Icon/Icon";
import axios from "axios";
import './Gallery.scss'
import {useDispatch, useSelector} from "react-redux";


const Gallery = () => {
  const socialIcon = useSelector(state => state.socialIcon.data)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('/iconsList.json')
      .then(res => dispatch({type: 'SET_SOCIAL-ICON', payload: res.data}))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className={'gallery-block'}>
      <Carousel/>
      <div className={'social-icons'}>
        {socialIcon?.length > 0 && socialIcon?.map((icon) => {
          return (
            <Icon key={icon.id} height={35} width={35} path={icon?.path} url={icon?.url}/>
          )
        })}
      </div>
    </div>
  );
};

export default Gallery;