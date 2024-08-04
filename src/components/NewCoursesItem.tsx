import { FunctionComponent, useState } from "react";
import { Rating } from "react-simple-star-rating";

export type NewCoursesItemType = {
  className?: string;
  hour?: string;
  caption?: string;
  category?: string;
  image?: string;
  voit?: string;
  rating?: number;
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
        <div className="h-[30px] w-[80px]  absolute top-[10px] right-[10px] rounded-10xs bg-primary-orange flex  items-center justify-center  gap-[5px] ">
          <b className=" leading-[2rem] shrink-0 ">{hour}</b>
          <i className="bi bi-clock"></i>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-[0rem] px-[0.937rem] gap-[0.312rem] text-center text-[1rem] font-h6-16">
        <div className="h-[30px] text-sm  w-[70px]  flex  justify-center items-center shrink-0 bg-primary">
          {category}
        </div>
        <div className="self-stretch flex flex-col overflow-hidden items-start justify-start grow-[1] text-right text-title ">
          <b className="self-stretch leading-[2rem]">{title}</b>
          <p className="m-0 self-stretch  text-[0.875rem] leading-[2rem] font-medium text-paragraph mt-[-0.125rem]">
            {caption}
          </p>
        </div>
        <div className=" self-stretch flex flex-row items-center justify-end gap-[10px] ">
          <span className="text-xs  font-medium text-paragraph ">{`(${voit})`}</span>
          <Rating initialValue={rating} readonly size={15} />
        </div>
      </div>
    </div>
  );
};

export default NewCoursesItem;
