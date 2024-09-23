// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderSection = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        // pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className=" h-96 bg-slate-950 p-4 pt-16"
      >
        {data.map((items, index) => (
          <SwiperSlide key={index}>
            <img
              src={
                items.urlToImage
                  ? items.urlToImage
                  : "https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149288316.jpg?t=st=1726553647~exp=1726557247~hmac=edd13024935b20179eada3fc512c7c1a95af4861c06e52299bb2637583a3268c&w=900"
              }
              className="h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderSection;
