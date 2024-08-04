import { FunctionComponent} from "react";
import TopCoursesItem from "./TopCoursesItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type TopCoursesType = {
  className?: string;
};

const TopCourses: FunctionComponent<TopCoursesType> = ({ className = "" }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section
        className={` self-stretch flex flex-col gap-[1.5rem] text-[1.25rem] text-title ${className}`}
      >
        <hr />
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem]">
          <b className="leading-[2rem]">دوره های برگزیده</b>
          <img
            className="w-[6.25rem]  h-[0.938rem] overflow-hidden shrink-0"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="slider-container  w-3/4 pb-10 m-auto ">
          <Slider
            {...settings}
          >
            <TopCoursesItem
              image="/image-40@2x.png"
              title="عنوان دوره اول"
              caption="توضیحات مختصری از دوره جهت راهنمایی بهتر  "
              fullName="نام و نام حانوادگی"
              teacherInfo="“حوزه فعالیت و سابقه آموزشی “"
              avatar="/avatar-55@2x.png"
              teacherExpertise="تخصص استاد"
            />
            <TopCoursesItem
              image="/image-40@2x.png"
              title="عنوان دوره اول"
              caption="توضیحات مختصری از دوره جهت راهنمایی بهتر  "
              fullName="نام و نام حانوادگی"
              teacherInfo="“حوزه فعالیت و سابقه آموزشی “"
              avatar="/avatar-55@2x.png"
              teacherExpertise="تخصص استاد"
            />
            <TopCoursesItem
              image="/image-40@2x.png"
              title="عنوان دوره اول"
              caption="توضیحات مختصری از دوره جهت راهنمایی بهتر  "
              fullName="نام و نام حانوادگی"
              teacherInfo="“حوزه فعالیت و سابقه آموزشی “"
              avatar="/avatar-55@2x.png"
              teacherExpertise="تخصص استاد"
            />
          </Slider>
          
        </div>
        <hr />
      </section>
    </>
  );
};

export default TopCourses;
