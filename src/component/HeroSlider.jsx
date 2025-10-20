import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules"; // ✅ import modules here
import "swiper/css";
import "swiper/css/effect-coverflow";


import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useLoaderData } from "react-router";

import { useHero } from "../context/HeroProvider";
import { useEffect } from "react";

function HeroSlider() {
  const sliderData = useLoaderData();
  const {  setHeroData } = useHero();
  const handleSlide = (swiper) => {
    
    const index = swiper.activeIndex;
    const data = sliderData[index];
    setHeroData(data);
  };

  useEffect(()=>{
    setHeroData(sliderData[0])
  },[sliderData,setHeroData])



  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 10,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      onSlideChange={handleSlide}
      modules={[EffectCoverflow, Navigation]} // ✅ use correct imported modules
      className="mySwiper"
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.id}>
          <div className="h-[416px] w-[270px] rounded-2xl">
            <img
              src={data.image}
              className="h-full w-full object-cover rounded-2xl"
              alt={`Slide ${data.id + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-scrollbar"></div>
      <div className="flex justify-center my-5 gap-4 ">
        <div className="swiper-button-prev">
          <FaChevronCircleLeft size={25} />
        </div>
        <div className="swiper-button-next">
          <FaChevronCircleRight size={25} />
        </div>
      </div>
    </Swiper>
  );
}

export default HeroSlider;
