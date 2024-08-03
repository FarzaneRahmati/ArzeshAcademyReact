import { FunctionComponent } from "react";
import TopCoursesItem from "./TopCoursesItem";

export type TopCoursesType = {
  className?: string;
};

const TopCourses: FunctionComponent<TopCoursesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-center justify-center py-[1.25rem] px-[0.625rem] text-center text-[1.25rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[3rem] relative">
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem]">
          <b className="self-stretch relative leading-[2rem]">
            دوره های برگزیده
          </b>
          <img
            className="w-[6.25rem] relative h-[0.938rem] overflow-hidden shrink-0"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <TopCoursesItem
          image="/image-40@2x.png"
          title="عنوان دوره اول"
          caption="توضیحات مختصری از دوره جهت راهنمایی بهتر  "
          fullName="نام و نام حانوادگی"
          teacherInfo="“حوزه فعالیت و سابقه آموزشی “"
          avatar="/avatar-55@2x.png"
          teacherExpertise="تخصص استاد"
        />
      </div>
    </section>
  );
};

export default TopCourses;
