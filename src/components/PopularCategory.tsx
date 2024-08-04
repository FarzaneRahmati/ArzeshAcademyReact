import { FunctionComponent } from "react";
import PopularCategoryItem from "./PopularCategoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export type PopularCategoryType = {
  className?: string;
};

const PopularCategory: FunctionComponent<PopularCategoryType> = ({
  className = "",
}) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section
      className={`self-stretch  flex flex-col gap-[1.5rem] text-[1.25rem] text-title ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem]">
        <b className="leading-[2rem]">دسته های پر مخاطب</b>
        <img className="w-[6.25rem] h-[0.938rem]" alt="" src="/vector-1.svg" />
      </div>
      <div className=" w-3/4 pb-10 m-auto ">
        <Slider {...settings}>
          <div>
            <PopularCategoryItem
              image="/team18-1@2x.png"
              icon="/group-2@2x.png"
              title="Backend"
              caption="1درس"
            />
          </div>
          <div>
            <PopularCategoryItem
              image="/person-3-1@2x.png"
              icon="/group-3@2x.png"
              title="Full Stack"
              caption="1درس"
            />
          </div>
          <div>
            <PopularCategoryItem
              image="/person-4-1@2x.png"
              icon="/group-4@2x.png"
              title="Web Design"
              caption="1درس"
            />
          </div>
          <div>
            <PopularCategoryItem
              image="/person-1-1@2x.png"
              icon="/group-5@2x.png"
              title="Mobile Application"
              caption="1درس"
            />
          </div>
          <div>
            <PopularCategoryItem
              image="/person-1-1@2x.png"
              icon="/group-5@2x.png"
              title="Mobile Application"
              caption="1درس"
            />
          </div>
          <div>
            <PopularCategoryItem
              image="/person-1-1@2x.png"
              icon="/group-5@2x.png"
              title="Mobile Application"
              caption="1درس"
            />
          </div>
        </Slider>
      </div>

   
    </section>
  );
};

export default PopularCategory;
