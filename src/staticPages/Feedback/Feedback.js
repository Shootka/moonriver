import React from 'react';
import './Feedback.scss'
import Input from "../../components/Input/Input";

const Feedback = () => {
  return (
    <div className={'feedback'}>
      <div style={{gridArea: '1 / 1 / 2 / 2'}}>
        <img style={{width: '100%', height: '100%'}} src="images/feedback-woman.png" alt=""/>
      </div>
      <div   style={{gridArea: '1 / 2 / 2 / 3', alignSelf: 'center'}} >
        <div className={'feed'}>
          <div>
            <h4 className={'title'}>телефон флагманского магазина</h4>
            <p className={'feed-number'}>+7 800 456 456</p>
          </div>
          <div>
            <h4 className={'title'}>подпишитесь на новости</h4>
            <Input placeholder={'Введите E-mail'} color={'#272727'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;