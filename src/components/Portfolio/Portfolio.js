import React from 'react'
import classes from './Portfolio.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from 'swiper';
import AgirSaglam from "../../img/AgirSaglam.png";
import InciSozluk from "../../img/InciSozluk.png";
import NeilStrauss from "../../img/NeilStrauss.png";
import Acun from "../../img/Acun.png";

function Portfolio() {
  return (
    <div className={classes.portfolio}>

        {/* heading */}
        <div className={classes.portfolio__header}>
          <span className={classes.portfolio__header__one}>Recent Projects</span><br></br>
          <span className={classes.portfolio__header__two}>Portfolio</span>
        </div>

        {/* slider */}
        <Swiper
        pagination={{
            type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={classes.portfolio__swiper}
        >
            <SwiperSlide className={classes.portfolio__slide}><img src={AgirSaglam} alt=""/></SwiperSlide>
            <SwiperSlide className={classes.portfolio__slide}><img src={InciSozluk} alt=""/></SwiperSlide>
            <SwiperSlide className={classes.portfolio__slide}><img src={NeilStrauss} alt=""/></SwiperSlide>
            <SwiperSlide className={classes.portfolio__slide}><img src={Acun} alt=""/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio