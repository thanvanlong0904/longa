import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

export default function Slide() {
  return (
    <div className="relative w-full h-[700px]">
      <Slider
        {...settings}
        className="
          [&_.slick-prev]:!left-5
          [&_.slick-next]:!right-5
          [&_.slick-prev]:!z-10
          [&_.slick-next]:!z-10
          [&_.slick-prev]:!top-1/2
          [&_.slick-next]:!top-1/2
          [&_.slick-prev]:!-translate-y-1/2
          [&_.slick-next]:!-translate-y-1/2
          [&_.slick-prev:before]:!text-white
          [&_.slick-next:before]:!text-white
          [&_.slick-prev:before]:!text-[40px]
          [&_.slick-next:before]:!text-[40px]
          [&_.slick-dots]:!bottom-5
          [&_.slick-dots_li_button:before]:!text-white
        "
      >
        <div>
          <img
            className="w-full h-[700px] object-cover"
            src="/img/iphone-12-mo-khoa_800x450.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[700px] object-cover"
            src="/img/slide1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[700px] object-cover"
            src="/img/slide2.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
