import { FunctionComponent } from "react";

export type NewsItemType = {
  className?: string;
  category?: string;
  title?: string;
  caption?: string;
  date?: string;
};

const NewsItem: FunctionComponent<NewsItemType> = ({
  className = "",
  category,
  title,
  caption,
  date,
}) => {
  return (
    <div
      className={`w-[20rem] flex flex-row items-start justify-center relative min-w-[20rem] max-w-[21.563rem] min-h-[26.25rem] text-right text-[1rem] text-title font-h6-bold-16 ${className}`}
    >
      <img
        className="flex-1 relative rounded max-w-full overflow-hidden h-[14.313rem] object-cover z-[0]"
        alt=""
        src="/image-33@2x.png"
      />
      <div className="w-[18.875rem] !m-[0] absolute top-[9.25rem] left-[0.531rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white flex flex-col items-end [justify-content:right] pt-[0.625rem] px-[1.25rem] pb-[0rem] box-border gap-[0.25rem] bottom-[0] z-[1]">
        <b className="self-stretch relative leading-[2rem] text-subtitle">
          {category}
        </b>
        <b className="self-stretch relative leading-[2rem]">{title}</b>
        <p className="m-0 self-stretch relative text-[0.875rem] leading-[2rem] font-medium text-paragraph inline-block h-[8.438rem] shrink-0">
          {caption}
        </p>
        <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] text-left text-[0.875rem]">
          <span className="relative leading-[2rem] font-medium">{date}</span>
          <img
            className="w-[1.875rem] relative h-[1.875rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/calendardateschedule-svgrepocom@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
