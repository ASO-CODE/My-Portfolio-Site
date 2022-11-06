import React, { useState } from "react";
import "./testimonials.css";
import People from "./data";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const [people, setPeople] = useState(People);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {people.map((person, personIndex) => {
          const { id, img, name, quote, role } = person;

          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={img} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5> <span className="client__role">{role}</span>
              <small className="client__review">{quote}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
