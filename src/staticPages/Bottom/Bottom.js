import React, {useEffect, useState} from 'react';
import './Bottom.scss'
import '../../App.css'
import Icon from "../../components/Icon/Icon";
import axios from "axios";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";

const Bottom = () => {
  const [icons, setIcons] = useState([])

  useEffect(() => {
    axios('/iconsList.json')
      .then(res => setIcons(res.data))
      .catch(err => console.log(err))
  }, [])

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
        <div className={'contact'}>
          <div className={'number'}>
            <h4 className={'contact-title'}>телефон горячей линии</h4>
            <p className={'contact-phone'}>+7 800 456 456</p>
            <div className={'social-bottom'}>
              {icons.length > 0 && icons.map((icon) => {
                return (
                  <Icon key={icon.id} height={35} width={35} path={icon?.path} url={icon?.url}/>
                )
              })}
            </div>
          </div>

          <div className={'subs'}>
            <h4 className={'contact-title'}>подпишитесь на новости</h4>
            <Input placeholder={'Введите E-mail'} color={'white'}/>
            <div style={{display: 'flex', gap: '15px', marginTop: '10px', alignContent: 'center', alignItems: 'center' }}>
                <img  src='icons/app-store.png' alt="" style={{width: '105px', height: '35px'}}/>
                <img  src='icons/google.png' alt="" style={{width: '115px', height: '45px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;