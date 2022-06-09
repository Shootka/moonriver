import React, {useEffect, useState} from 'react';
import './NavBar.scss'
import Menu from "../Menu/Menu";
import '../../App.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {useDispatch, useSelector} from "react-redux";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.burgerMenu.isOpen)
  useEffect(() => {
    axios('/burgerMenuList.json')
      .then(res => dispatch({type: "SET_BURGER-MENU", payload: res.data}))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <section className={'nav-bar container'} >
        <div className={'logo'}>
          <NavLink to={"/"}>
            <Logo reverse={!isOpen}/>
          </NavLink>
        </div>
        <div className={'icons-group'}>
          <div className={'icons'}>
            <div>
              <NavLink to={'/favorites'}>
                <svg className={'wish'} width="24" height="22" viewBox="0 0 24 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9997 20C-9.1987 8.23285 5.64047 -4.54117 11.9997 3.53633C18.3598 -4.54117 33.1989 8.23285 11.9997 20Z"
                    stroke="white" strokeWidth="1.8"/>
                </svg>
              </NavLink>
            </div>
            <div>
              <NavLink to={'/accounts'}>
                <svg className={'account'} width="15" height="22" viewBox="0 0 15 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.8333 5.44444C11.8333 7.89904 9.89323 9.88889 7.5 9.88889C5.10677 9.88889 3.16667 7.89904 3.16667 5.44444C3.16667 2.98985 5.10677 1 7.5 1C9.89323 1 11.8333 2.98985 11.8333 5.44444Z"
                    stroke="white" strokeWidth="1.8"/>
                  <path
                    d="M1 15.4444C1 12.3762 3.42512 9.88889 6.41667 9.88889H8.58333C11.5749 9.88889 14 12.3762 14 15.4444V19.8889C14 20.5025 13.515 21 12.9167 21H2.08333C1.48502 21 1 20.5025 1 19.8889V15.4444Z"
                    stroke="white" strokeWidth="1.8"/>
                </svg>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/cart"} className={'cart'}>
                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.5 8H2C1.44772 8 1 8.44772 1 9V20C1 20.5523 1.44772 21 2 21H15C15.5523 21 16 20.5523 16 20V9C16 8.44772 15.5523 8 15 8H12.5M4.5 8V5C4.5 2.79086 6.29086 1 8.5 1V1C10.7091 1 12.5 2.79086 12.5 5V8M4.5 8H12.5"
                    stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            </div>
          </div>
          <Menu/>
        </div>
      </section>
      <BurgerMenu />
    </>
  );
};

export default NavBar;