import React, {useEffect, useState} from 'react';
import Carousel from "../../components/Carousel/Carousel";
import Icon from "../../components/Icon/Icon";
import axios from "axios";
import './Gallery.scss'


const Gallery = () => {

  const [icons, setIcons] = useState([])

  useEffect(() => {
    axios('/iconsList.json')
      .then(res => setIcons(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={'gallery-block'}>
      <Carousel/>
      <div className={'social-icons'}>
        {icons.length > 0 && icons.map((icon) => {
          return (
            <Icon key={icon.id} height={35} width={35} path={icon?.path} url={icon?.url}/>
          )
        })}
      </div>
    </div>
  );
};

export default Gallery;