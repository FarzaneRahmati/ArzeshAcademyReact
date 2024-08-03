import { FunctionComponent } from "react";
import NewCoursesItem from "./NewCoursesItem";

export type NewCoursesType = {
  className?: string;
};

const NewCourses: FunctionComponent<NewCoursesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center py-[1.25rem] px-[0rem] text-left text-[0.875rem] text-primary font-h6-bold-16 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-[1.875rem] px-[0rem] gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-center justify-between py-[0rem] px-[5rem]">
          <a className="[text-decoration:none] relative leading-[2rem] font-bold text-[inherit]">
            مشاهده همه
          </a>
          <div className="flex-1 flex flex-col items-end justify-start gap-[0.625rem] text-right text-[1.25rem] text-title">
            <b className="relative leading-[2rem] grow-[1]">دوره های جدید</b>
            <img
              className="w-[6.25rem] relative h-[0.938rem] overflow-hidden shrink-0"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1.25rem_0.625rem] text-right text-white">
          <NewCoursesItem
            hour="25 ساعت"
            caption="لورم ایپسوم متن ساختگی با تولید سادگی"
            category="دسته دوره"
            image="/6fb69121166a4a5dbc8953d9e5c63975data20copy206-1@2x.png"
            voit="2رای"
            rating="5"
            title="عنوان دوره"
          />
          <NewCoursesItem
            hour="25 ساعت"
            caption="لورم ایپسوم متن ساختگی با تولید سادگی"
            category="دسته دوره"
            image="/6fb69121166a4a5dbc8953d9e5c63975data20copy206-1@2x.png"
            voit="2رای"
            rating="5"
            title="عنوان دوره"
          />
          <NewCoursesItem
            hour="25 ساعت"
            caption="لورم ایپسوم متن ساختگی با تولید سادگی"
            category="دسته دوره"
            image="/6fb69121166a4a5dbc8953d9e5c63975data20copy206-1@2x.png"
            voit="2رای"
            rating="5"
            title="عنوان دوره"
          />
          <NewCoursesItem
            hour="25 ساعت"
            caption="لورم ایپسوم متن ساختگی با تولید سادگی"
            category="دسته دوره"
            image="/6fb69121166a4a5dbc8953d9e5c63975data20copy206-1@2x.png"
            voit="2رای"
            rating="5"
            title="عنوان دوره"
          />
        </div>
      </div>
    </section>
  );
};

export default NewCourses;
