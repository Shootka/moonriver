import React from 'react';
import './MainPage.scss'
import Post from '../../components/Post/Post'
import '../../App.css'
import Chapters from "../Chapters/Chapters";
import FindAddress from "../FindAddress/FindAddress";
import ProductList from "../ProductList/ProductList";
import Gallery from "../Gallery/Gallery";
import Feedback from "../Feedback/Feedback";

const MainPage = () => {
  return (
    <section>
      <section className={'main-page'}>
        <div className={'container'}>
          <Post/>
        </div>
      </section>
      <Chapters/>
      <FindAddress/>
      <ProductList/>
      <Gallery/>
      <Feedback/>
    </section>
  )
    ;
};

export default MainPage;