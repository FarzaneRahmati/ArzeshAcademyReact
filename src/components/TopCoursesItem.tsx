import { FunctionComponent } from "react";

export type TopCoursesItemType = {
  className?: string;
  image?: string;
  title?: string;
  caption?: string;
  fullName?: string;
  teacherInfo?: string;
  avatar?: string;
  teacherExpertise?: string;
};

const TopCoursesItem: FunctionComponent<TopCoursesItemType> = ({
  className = "",
  image,
  title,
  caption,
  fullName,
  teacherInfo,
  avatar,
  teacherExpertise,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-center relative gap-[6.25rem_9.375rem] min-w-[25rem] text-right text-[0.875rem] text-title font-h6-bold-16 ${className}`}
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[3.125rem] absolute !m-[0] top-[calc(50%_-_26px)] left-[0rem] h-[3.125rem] overflow-hidden shrink-0 z-[0]">
        <img
          className="absolute h-4/5 w-4/5 top-[9.6%] right-[10%] bottom-[10.4%] left-[10%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[32%] w-[14.2%] top-[33.6%] right-[44.4%] bottom-[34.4%] left-[41.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[3.125rem] absolute !m-[0] top-[calc(50%_-_26px)] right-[0rem] h-[3.125rem] overflow-hidden shrink-0 z-[1]">
        <img
          className="absolute h-4/5 w-4/5 top-[9.6%] right-[10%] bottom-[10.4%] left-[10%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
        <img
          className="absolute h-[32%] w-[14.2%] top-[33.6%] right-[41.6%] bottom-[34.4%] left-[44.2%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
      </button>
      <div className="h-[21.875rem] flex flex-row items-center justify-center p-[0.625rem] box-border min-w-[20rem] z-[2]">
        <img
          className="w-[15rem] relative rounded h-[15rem] object-cover min-w-[18.75rem]"
          alt=""
          src={image}
        />
      </div>
      <div className="w-[23.75rem] flex flex-col items-right justify-center gap-[0.937rem] min-w-[22.5rem] z-[3] md:[justify-content:left] md:[align-items:end]">
        <div className="w-[20.313rem] flex flex-col items-end justify-start gap-[0.937rem]">
          <b className="self-stretch relative text-[1rem] leading-[2rem]">
            {title}
          </b>
          <div className="flex flex-row items-center justify-center text-paragraph">
            <p className="m-0 w-[20.313rem] relative leading-[2rem] font-medium inline-block h-[3rem] shrink-0">
              <span className="block">{caption}</span>
              <span className="block">فراگیران آکادمی ارزش</span>
            </p>
          </div>
          <ul className="m-0 w-[20.313rem] flex flex-row items-center justify-end [direction:rtl]">
            <div className="w-[20.313rem] relative leading-[2rem] font-medium inline-block shrink-0">
              <ul className="m-0 font-inherit text-inherit pl-[1.357rem]">
                <li>هدف اول دوره</li>
                <li>هدف دوم دوره</li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="self-stretch shadow-[0px_0px_10px_rgba(23,_26,_31,_0.42)] rounded-lg bg-white flex flex-row items-center [justify-content:right] py-[2rem] px-[1rem] box-border gap-[1rem] h-[6rem] w-[19rem] text-dimgray">
          <div className="flex flex-col items-end justify-center gap-[0rem]">
            <span className="w-[7.438rem] relative leading-[2rem] font-medium inline-block">
              {fullName}
            </span>
            <span className="w-[7.438rem] relative leading-[2rem] font-medium inline-block">
              {teacherExpertise}
            </span>
            <span className="w-[14.563rem] relative leading-[2rem] font-medium text-title inline-block">
              {teacherInfo}
            </span>
          </div>
          <img
            className="w-[3rem] relative rounded-13xl h-[3rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src={avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default TopCoursesItem;
