import { FunctionComponent } from "react";

export type PopularCategoryItemType = {
  className?: string;
  image?: string;
  icon?: string;
  title?: string;
  caption?: string;
};

const PopularCategoryItem: FunctionComponent<PopularCategoryItemType> = ({
  image,
  icon,
  title,
  caption,
}) => {
  return (
    <div
      className={`h-[15.938rem] w-[17.313rem] rounded-lg flex flex-col items-center justify-center gap-[1.437rem] min-w-[17.313rem] text-center text-[1rem] text-title`}
    >
      <div className="self-stretch flex flex-col items-start justify-start relative gap-[0.625rem]">
        <img
          className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[10.5rem] shrink-0 object-cover z-[0]"
          alt=""
          src={image}
        />
        <img
          className="w-[4.063rem] h-[4.063rem] absolute !m-[0] top-[7.75rem] left-[6.625rem] object-cover bottom-[0] z-[1]"
          alt=""
          src={icon}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start">
        <b className="self-stretch relative leading-[2rem]">{title}</b>
        <span className="self-stretch relative text-[0.875rem] leading-[2rem] font-medium text-subtitle">
          {caption}
        </span>
      </div>
    </div>
  );
};

export default PopularCategoryItem;
