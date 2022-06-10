import React from 'react';
import './Chapter.scss'
import {Link} from "react-router-dom";

const Chapter = ({url, desc, about, link = '/stopper'}) => {
  return (
    <Link to={link} className={'chap'}>
        <img className={"chap-img"} style={{width: '100%', height: "100%"}} src={url} alt=""/>
        <div className={'chap-desc-block'}>
          <a href={link} className={"chap-about"}>{about}</a>
          <p className={'chap-desc'}>{desc}</p>
        </div>
    </Link>
  );
};

export default Chapter;