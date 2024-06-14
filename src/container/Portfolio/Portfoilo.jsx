import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../constants/images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Portfolio.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Portfoilo = () => {
  return (
    <section id="Portfolio" className="portfolio">
      <div className="container">
        <div className="section-head">
          <h3 className="section-head__title">Portfolio</h3>
          <p className="section-head__caption">Check in Our Latest Works</p>
          <span className="section-head__line"></span>
        </div>

        <li className="portfolio-list">
          <li className="portfolio-list__item">Personal</li>
          <li className="portfolio-list__item">Food</li>
          <li className="portfolio-list__item">corporate</li>
        </li>

        <div className="portfolio-content">
          <div className="swiper">
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={images.portfoilo01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.portfoilo02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images.portfoilo03} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfoilo;
