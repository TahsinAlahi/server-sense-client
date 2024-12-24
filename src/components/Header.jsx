import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import HeaderSlide from "./HeaderSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Header() {
  return (
    <header className="w-full h-[calc(100vh-72px)] max-w-screen-xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={2000}
        loop
        className="w-full h-full"
      >
        <SwiperSlide
          className="h-[calc(100vh-72px)] w-full"
          style={{ margin: 0 }}
        >
          <HeaderSlide
            image={hero1}
            title="Discover the Magic of Cinema"
            description="Experience unforgettable stories at Orchid Movie."
          />
        </SwiperSlide>
        <SwiperSlide
          className="h-[calc(100vh-72px)] w-full"
          style={{ margin: 0 }}
        >
          <HeaderSlide
            image={hero2}
            title="Your Gateway to Entertainment"
            description="Dive into a world of movies, curated just for you"
          />
        </SwiperSlide>
        <SwiperSlide
          className="h-[calc(100vh-72px)] w-full"
          style={{ margin: 0 }}
        >
          <HeaderSlide
            image={hero3}
            title="Celebrate the Art of Storytelling"
            description="Explore movies that inspire, entertain, and captivate"
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;