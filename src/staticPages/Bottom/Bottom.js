import React from 'react';
import './Bottom.scss'
import '../../App.css'
import Logo from "../../components/Logo/Logo";
import ContactBox from "../../components/ContactBox/ContactBox";

const Bottom = () => {


  return (
    <div style={{background: '#272727', marginTop: '0', paddingBottom: '88px'}}>
      <div className={'bottom-list container'}>
        <div className={'list-elem'}><a href="#" style={{textDecoration: 'none', color: 'white'}}>работа в компании</a>
        </div>
        <div className={'list-elem'}><a href="#" style={{textDecoration: 'none', color: 'white'}}>условия
          пользования</a></div>
        <div className={'list-elem'}><a href="#" style={{textDecoration: 'none', color: 'white'}}>выходные данные</a>
        </div>
        <div className={'list-elem'}><a href="#" style={{textDecoration: 'none', color: 'white'}}>политика
          конфиденциальности</a></div>
        <div className={'list-elem'}><a href="#" style={{textDecoration: 'none', color: 'white'}}>карта сайта</a></div>
      </div>

      <div className={'bottom-contact container'}>
        <Logo/>
        <ContactBox/>
      </div>
    </div>
  );
};

export default Bottom;