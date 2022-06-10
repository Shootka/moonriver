import React from 'react';
import './Bottom.scss'
import '../../App.css'
import Logo from "../../components/Logo/Logo";
import ContactBox from "../../components/ContactBox/ContactBox";
import {Link} from "react-router-dom";

const Bottom = () => {

  return (
    <div style={{background: '#272727', marginTop: '0', paddingBottom: '88px'}}>
      <div className={'bottom-list container'}>
        <div className={'list-elem'}><Link to="/stopper" >работа в компании</Link>
        </div>
        <div className={'list-elem'}><Link to="/stopper" >условия
          пользования</Link></div>
        <div className={'list-elem'}><Link to="/stopper" >выходные данные</Link>
        </div>
        <div className={'list-elem'}><Link to="/stopper" >политика
          конфиденциальности</Link></div>
        <div className={'list-elem'}><Link to="/stopper" >карта сайта</Link></div>
      </div>

      <div className={'bottom-contact container'}>
        <Link to={"/"}><Logo/></Link>
        <ContactBox/>
      </div>
    </div>
  );
};

export default Bottom;