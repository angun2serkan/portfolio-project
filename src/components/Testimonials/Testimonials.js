import React from 'react'
import classes from './Testimonials.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import profilePic5 from '../../img/profile5.jpg';
import profilePic6 from '../../img/profile6.jpg';
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'

function Testimonials() {

   const clients = [
    {
    img: profilePic1,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},{
    img: profilePic2,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
},{
    img: profilePic3,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
},{
    img: profilePic4,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
},{
    img: profilePic5,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
},{
    img: profilePic6,
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
},
]
  return (
    <div className={classes.testimonial__wrapper} id='Testimonials'>
        <div className={classes.testimonial__heading}>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from us...</span>      
            <div className={`${classes.blur} ${classes.testimonial__blur1}`} style={{background:"var(--purple"}}></div>
            <div className={`${classes.blur} ${classes.testimonial__blur2}`} style={{background:"skyblue"}}></div>      
        </div>

        {/* slider */}
        <Swiper
        style={{width:"100%", height:"70%"}}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
            clickable:true,
        }}
        >
            {clients.map((client, index) =>{
                return(
                    <SwiperSlide key={index} className={classes.swiper__slide}>
                        <div className={classes.testimonial}>
                            <img src={client.img} alt=""/>
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials