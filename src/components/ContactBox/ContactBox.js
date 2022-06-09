import React from 'react';
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import {useSelector} from "react-redux";

const ContactBox = ({flop}) => {
  const socialIcon = useSelector(state => state.socialIcon.data)
  return (
    <div className={ `${flop ? 'contact flop' : 'contact'}`}>
      <div className={'number'}>
        <h4 className={'contact-title'}>телефон горячей линии</h4>
        <p className={'contact-phone'}>+7 800 456 456</p>
        <div className={'social-bottom'}>
          {socialIcon?.length > 0 && socialIcon?.map((icon) => {
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
  );
};

export default ContactBox;