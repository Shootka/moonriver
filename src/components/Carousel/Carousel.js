import Slider from "react-slick";
import React, {useEffect, useState} from 'react';
import "./slick.css";
import './slick-theme.css'
import './Carousel.scss'
import '../../App.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const Carousel = () => {
  const slideList = useSelector(state => state.slideList.data)
  const dispatch = useDispatch()
  useEffect(() => {
    axios('/slideList.json')
      .then(res => dispatch({type: "SET_SLIDES", payload: res.data}))
      .catch(err => console.log(err))
  }, [])

  const SampleNextArrow = (props) => {
    const {className, onClick} = props;
    return (
      <div
        className={className}
        style={{display: "block"}}
        onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="31" viewBox="0 0 53 31" fill="none">
          <path d="M37.6562 1L52 15.5M52 15.5L37.6562 30M52 15.5L0.999999 15.5" stroke="white" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  const SamplePrevArrow = (props) => {
    const {className, onClick} = props;
    return (
      <div
        className={className}
        style={{display: "block"}}
        onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="31" viewBox="0 0 53 31" fill="none">
          <path d="M15.3438 0.999998L0.999999 15.5M0.999999 15.5L15.3437 30M0.999999 15.5L52 15.5" stroke="white"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 3,
    arrows: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <div className={'carousel'}>
      <h2 className={'carousel-title container'}> Мы <br/>в социальных сетях </h2>
      <Slider {...settings}>
        {slideList.map((slide) => {
          return (<img key={slide.id} src={slide.url} alt=""/>)
        })}
      </Slider>
    </div>
  );
};

export default Carousel;