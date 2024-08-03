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
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section className={` w-3/4 pb-10 m-auto flex flex-col gap-[1.5rem] text-[1.25rem] text-title ${className}`}>
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem]">
          <b className="leading-[2rem]">
            دسته های پر مخاطب
          </b>
          <img
            className="w-[6.25rem] h-[0.938rem]"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      <div className="slider-container">
        <Slider {...settings}>
          <PopularCategoryItem
            image="/team18-1@2x.png"
            icon="/group-2@2x.png"
            title="Backend"
            caption="1درس"
          />
          <PopularCategoryItem
            image="/person-3-1@2x.png"
            icon="/group-3@2x.png"
            title="Full Stack"
            caption="1درس"
          />
          <PopularCategoryItem
            image="/person-4-1@2x.png"
            icon="/group-4@2x.png"
            title="Web Design"
            caption="1درس"
          />
          <PopularCategoryItem
            image="/person-1-1@2x.png"
            icon="/group-5@2x.png"
            title="Mobile Application"
            caption="1درس"
          />
          <PopularCategoryItem
            image="/person-1-1@2x.png"
            icon="/group-5@2x.png"
            title="Mobile Application"
            caption="1درس"
          />
          <PopularCategoryItem
            image="/person-1-1@2x.png"
            icon="/group-5@2x.png"
            title="Mobile Application"
            caption="1درس"
          />
        </Slider>
      </div>

      {/* </div> */}
      
      {/* </div> */}
    </section>
  );
};

export default PopularCategory;
