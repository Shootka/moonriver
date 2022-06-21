import React from 'react';
import './FIndAddress.scss'
import Map from "../../components/Map/Map";
import Input from "../../components/Input/Input";

const FindAddress = () => {
  return (
    <div className={'map-box'}>
      <div className={'container'}>
        <div className={'find-address'}>
          <h3 className={'find-title'}>Найди бутик около себя</h3>
          <p className={'find-desc'}>Введите свой адрес и узнайте о самых ближайших бутиках к вам</p>
          <Input placeholder={'Введите адрес'} color={'white'} search/>
        </div>
      </div>
      <Map/>
    </div>
  );
};

export default FindAddress;