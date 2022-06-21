import React, {useState} from 'react';
import './Input.scss'

const Input = ({placeholder, color = '#ffffff', search}) => {
  const [searchData, setSearchData] = useState()
  const [regData, setRegData] = useState()
  const handleClick = (e) => {
    e.preventDefault()
    search ? console.log(searchData) : console.log(regData)
  }
  const handleRegistration = (e) => {
    setRegData(e.target.value)
  }
  const handleSearchAddress = (e) => {
    setSearchData(e.target.value)
  }

  return (
    <div className={'input-wrapper'} >
      <form style={{display: 'flex'}}>
      <input type="text" className={'searcher'}
             style={{borderBottom: `1.8px solid ${color}`, color: `grey`}}
             placeholder={placeholder}
            onChange={search ? handleSearchAddress :  handleRegistration}
      />
      <button className={'submit'}
              style={{borderBottom: `1.8px solid ${color}`}}
              onClick={(e) => handleClick(e)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17" viewBox="0 0 30 17" fill="none">
          <path d="M21.125 1L29 8.5M29 8.5L21.125 16M29 8.5H1" stroke={color} strokeWidth="1.8" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      </button>
      </form>
    </div>
  );
};

export default Input;