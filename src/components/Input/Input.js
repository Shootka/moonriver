import React from 'react';
import './Input.scss'

const Input = ({placeholder, color = '#ffffff'}) => {

  const handleClick = () => {
    console.log('hello')
  }

  return (
    <div className={'input-wrapper'}>
      <input type="text" className={'searcher'}
             style={{borderBottom: `1.8px solid ${color}`}}
             placeholder={placeholder}/>
      <button className={'submit'}
              style={{borderBottom: `1.8px solid ${color}`}}
              onClick={() => handleClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17" viewBox="0 0 30 17" fill="none">
          <path d="M21.125 1L29 8.5M29 8.5L21.125 16M29 8.5H1" stroke={color} strokeWidth="1.8" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Input;