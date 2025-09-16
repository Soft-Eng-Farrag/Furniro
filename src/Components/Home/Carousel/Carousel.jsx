import "../../../styles/app.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carosel.scss";
import cls from "./swiper.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <section className={cls.wrapper}>
      <div className="container">
        <div className={cls.leftsection}>
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button>explore more</button>
        </div>
        <div className={cls.rightsection}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            speed={500}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              }
            }}
            spaceBetween={30}
            navigation={{ clickable: true }}
            autoplay={{
              duration: 2000,
              reverseDirection: true,
            }}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide className=" bg-1">
              <div className="box-wrapper">
                <div className="title">
                  <p>01 -- bed room</p>
                  <h4>inner peace</h4>
                </div>
                <div className="icon-wrapper">
                  <Icon className="icon" icon="line-md:arrow-right" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-2">
              <div className="box-wrapper">
                <div className="title">
                  <p>01 -- bed room</p>
                  <h4>inner peace</h4>
                </div>
                <div className="icon-wrapper">
                  <Icon className="icon" icon="line-md:arrow-right" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-3">
              <div className="box-wrapper">
                <div className="title">
                  <p>01 -- bed room</p>
                  <h4>inner peace</h4>
                </div>
                <div className="icon-wrapper">
                  <Icon className="icon" icon="line-md:arrow-right" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-4">
              <div className="box-wrapper">
                <div className="title">
                  <p>01 -- bed room</p>
                  <h4>inner peace</h4>
                </div>
                <div className="icon-wrapper">
                  <Icon className="icon" icon="line-md:arrow-right" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
