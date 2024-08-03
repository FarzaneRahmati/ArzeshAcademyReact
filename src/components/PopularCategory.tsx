import { FunctionComponent } from "react";
import PopularCategoryItem from "./PopularCategoryItem";

export type PopularCategoryType = {
  className?: string;
};

const PopularCategory: FunctionComponent<PopularCategoryType> = ({
  className = "",
}) => {
  return (
    <section
      className={`bg-white flex flex-row items-center justify-center text-center text-[1.25rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="w-[90rem] flex flex-col items-center justify-start gap-[2.187rem]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem]">
          <b className="self-stretch relative leading-[2rem]">
            دسته های پر مخاطب
          </b>
          <img
            className="w-[6.25rem] relative h-[0.938rem] overflow-hidden shrink-0"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="self-stretch overflow-x-auto flex flex-row items-center justify-center gap-[1.5rem] text-[1rem] sm:flex sm:flex-nowrap">
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
        </div>
        <span className="self-stretch flex flex-row items-center justify-center">
          <img
            className="w-[3.75rem] relative h-[3.75rem] overflow-hidden shrink-0"
            alt=""
            src="/dot-svgrepocom.svg"
          />
          <img
            className="w-[3.75rem] relative h-[3.75rem] overflow-hidden shrink-0 ml-[-2.563rem]"
            alt=""
            src="/dot-svgrepocom.svg"
          />
          <img
            className="w-[3.75rem] relative h-[3.75rem] overflow-hidden shrink-0 ml-[-2.563rem]"
            alt=""
            src="/dot-svgrepocom.svg"
          />
          <img
            className="w-[3.75rem] relative h-[3.75rem] overflow-hidden shrink-0 ml-[-2.563rem]"
            alt=""
            src="/dot-svgrepocom.svg"
          />
          <img
            className="w-[3.75rem] relative h-[3.75rem] overflow-hidden shrink-0 ml-[-2.563rem]"
            alt=""
            src="/dot-svgrepocom1.svg"
          />
        </span>
      </div>
    </section>
  );
};

export default PopularCategory;
