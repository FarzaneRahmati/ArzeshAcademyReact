import { FunctionComponent, useState, useCallback } from "react";
import PopularCategory from "../components/PopularCategory";
import TopCourses from "../components/TopCourses";
import NewCourses from "../components/NewCourses";
import WhyUs from "../components/WhyUs";
import TopProfessors from "../components/TopProfessors";
import Comments from "../components/Comments";
import News from "../components/News";

const HomePage: FunctionComponent = () => {


  return (
    <>
      <div className="w-full  shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-col items-center justify-center gap-[0.625rem]">
        <div className="self-stretch relative flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem]">
          <img
            className="self-stretch relative rounded max-w-full overflow-hidden h-[24.438rem] shrink-0 object-cover"
            alt=""
            src="/image-571@2x.png"
          />
          <span className="absolute  h-1/5 bottom-0 right-[18rem] w-[8rem] top-0 mt-auto mb-auto text-right text-white md:hidden ">بهترین دوره ها را در آکادمی ارزش دنبال کنید</span>
        </div>
        <PopularCategory />
        <TopCourses />
        <NewCourses />
        <WhyUs />
        <TopProfessors />
        <Comments />
        <News />
      </div>
 
    </>
  );
};

export default HomePage;
