import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../staticPages/MainPage/MainPage";
import Page404 from "../staticPages/Page404/Page404";
import Stopper from "../components/Stopper/Stopper";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<MainPage/>}/>
        <Route exact path='/cart' />
        <Route exact path='/favorites' element={<Stopper/>}/>
        <Route exact path='/accounts' element={<Stopper/>}/>
        <Route exact path='/stopper' element={<Stopper/>}/>
        <Route exact path='*' element={<Page404 />}/>
      </Routes>
    </div>
  );
}
export default AppRoutes;