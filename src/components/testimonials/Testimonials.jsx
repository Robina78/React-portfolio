import React from 'react'
import "./Testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    name: "Ernest Aciever",
    avatar: AVTR1,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae dolorum, ducimus suscipit error eos dolores in id blanditiis necessitatibus doloremque recusandae ipsum enim omnis veniam velit provident. Culpa, laudantium alias?",
  },
  {
    name: "Shatta Wale",
    avatar: AVTR2,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae dolorum, ducimus suscipit error eos dolores in id blanditiis necessitatibus doloremque recusandae ipsum enim omnis veniam velit provident. Culpa, laudantium alias?",
  },
  {
    name: "kwame Despite",
    avatar: AVTR3,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae dolorum, ducimus suscipit error eos dolores in id blanditiis necessitatibus doloremque recusandae ipsum enim omnis veniam velit provident. Culpa, laudantium alias?",
  },
  {
    name: "Nana Ama mcBrown",
    avatar: AVTR4,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae dolorum, ducimus suscipit error eos dolores in id blanditiis necessitatibus doloremque recusandae ipsum enim omnis veniam velit provident. Culpa, laudantium alias?",
  },

]


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((client, index)=> (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={client.avatar} alt="Avatar one" />
            </div>
            <h5 className='client__name'>{client.name}</h5>
              <small className='client__review'>{client.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
