import React from 'react';
import './Chapter.scss'

const Chapter = ({url, desc, about}) => {
  return (
    <div className={'chap'}>
      <img className={"chap-img"} style= {{width: '100%', height: "100%"}} src={url} alt=""/>
      <div className={'chap-desc-block'}>
        <a href="#" className={"chap-about"}>{about}</a>
        <p className={'chap-desc'}>{desc}</p>
      </div>
    </div>
  );
};

export default Chapter;