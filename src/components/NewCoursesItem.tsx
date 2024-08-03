import { FunctionComponent } from "react";

export type NewCoursesItemType = {
  className?: string;
  hour?: string;
  caption?: string;
  category?: string;
  image?: string;
  voit?: string;
  rating?: string;
  title?: string;
};

const NewCoursesItem: FunctionComponent<NewCoursesItemType> = ({
  className = "",
  hour,
  caption,
  category,
  image,
  voit,
  rating,
  title,
}) => {
  return (
    <div
      className={`h-[26.875rem] flex-1 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-white flex flex-col items-end justify-center gap-[0.625rem] min-w-[17.5rem]  max-w-[17.5rem] text-right text-[0.875rem] text-white font-h6-bold-16 ${className}`}
    >
      <div className="self-stretch h-[13.125rem] rounded-lg flex flex-row items-start justify-end relative gap-[1.25rem]">
        <img
          className="self-stretch  flex-1 relative rounded-t-lg rounded-b-8xs max-w-full overflow-hidden max-h-full object-cover z-[0]"
          alt=""
          src={image}
        />
        <div className="h-[2.375rem] w-[8.188rem] !m-[0] absolute top-[10] left-[8.75rem] rounded-10xs bg-primary-orange box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] gap-[0.625rem] right-[10] z-[1] border-[1px] border-solid border-darkseagreen">
          <b className="relative leading-[2rem]">{hour}</b>
          <img
            className="w-[1.563rem] relative h-[1.563rem] overflow-hidden shrink-0"
            alt=""
            src="/clockcircle-svgrepocom.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-[0rem] px-[0.937rem] gap-[0.312rem] text-center text-[1rem] font-h6-16">
        <span className="w-[5.625rem] rounded-sm bg-primary h-[2.5rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] box-border">
          <div className="w-[4rem] relative leading-[2rem] font-medium inline-block shrink-0">
            {category}
          </div>
        </span>
        <div className="self-stretch flex flex-col items-start justify-start grow-[1] text-right text-title font-h6-bold-16">
          <b className="self-stretch relative leading-[2rem]">{title}</b>
          <p className="m-0 self-stretch relative text-[0.875rem] leading-[2rem] font-medium text-paragraph mt-[-0.125rem]">
            <span className="block">{caption}</span>
            <span className="block">
              نامفهوم از صنفت چاپ ، و با استفاده از طراحان گرافیک است.
            </span>
          </p>
        </div>
        <div className="w-[6.313rem] h-[1.938rem] flex flex-row items-center justify-center py-[0.625rem] px-[0rem] box-border text-[0.75rem] text-subtitle font-inter">
          <span className="flex-1 relative">
            <span className="leading-[2.5rem]">(</span>
            <span className="leading-[2.667rem] font-medium font-h6-16">
              {voit}
            </span>
            <span className="leading-[2.5rem]">)</span>
          </span>
          <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[0rem] px-[0.625rem] ml-[-0.938rem] text-[0.875rem] text-primary-orange font-epilogue">
            <img
              className="w-[0.938rem] relative h-[0.938rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/star-1@2x.png"
            />
            <b className="flex-1 relative leading-[2.25rem] inline-block h-[2rem] ml-[-0.875rem]">
              {rating}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCoursesItem;
