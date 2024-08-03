import { FunctionComponent } from "react";

export type WhyUsType = {
  className?: string;
};

const WhyUs: FunctionComponent<WhyUsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row flex-wrap items-center justify-center py-[3.125rem] px-[2.5rem] gap-[1.25rem] text-center text-[1rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="w-[49.438rem] flex flex-row flex-wrap items-center justify-around py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.937rem]">
        <div className="h-[12.188rem] w-[14.375rem] shadow-[0px_0px_7px_rgba(0,_0,_0,_0.2)] rounded-md bg-white flex flex-col items-center justify-center py-[0.625rem] px-[1.562rem] box-border gap-[0.625rem] min-w-[14.375rem]">
          <div className="w-[4.188rem] rounded-xl box-border h-[4.188rem] flex flex-row items-center justify-start p-[0.187rem] border-[1px] border-solid border-silver">
            <img
              className="self-stretch flex-1 relative rounded-12xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-46@2x.png"
            />
          </div>
          <b className="w-[17.125rem] relative leading-[2rem] inline-block">
            تمرکز در برگزاری دوره های مفید
          </b>
          <b className="relative text-[0.875rem] leading-[2rem] text-subtitle text-left">
            پرورش متخصص
          </b>
        </div>
        <div className="h-[12.188rem] w-[14.375rem] shadow-[0px_0px_7px_rgba(0,_0,_0,_0.2)] rounded-md bg-white flex flex-col items-center justify-center py-[0rem] px-[1.562rem] box-border gap-[0.312rem] min-w-[14.375rem]">
          <div className="w-[4rem] rounded-xl box-border h-[4.25rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.312rem] border-[1px] border-solid border-silver">
            <img
              className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-54@2x.png"
            />
          </div>
          <b className="w-[8.313rem] relative leading-[2rem] inline-block">
            کیفیت محتوا
          </b>
          <b className="w-[13.313rem] relative text-[0.875rem] leading-[2rem] inline-block text-subtitle h-[2.438rem] shrink-0">
            <p className="m-0 whitespace-pre-wrap">
              مجصولات با کیفیت منحصر به فرد
            </p>
            <p className="m-0">{` `}</p>
          </b>
        </div>
        <div className="h-[12.188rem] w-[14.375rem] shadow-[0px_0px_7px_rgba(0,_0,_0,_0.2)] rounded-md bg-white flex flex-col items-center justify-center py-[0.625rem] px-[1.562rem] box-border gap-[0.625rem] min-w-[14.375rem]">
          <div className="w-[3.875rem] rounded-xl box-border h-[4.25rem] flex flex-row items-center justify-center py-[0.625rem] px-[0.312rem] border-[1px] border-solid border-silver">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-39@2x.png"
            />
          </div>
          <b className="self-stretch relative leading-[2rem]">اساتید برجسته</b>
          <b className="self-stretch relative text-[0.875rem] leading-[2rem] text-subtitle">
            بهره گیری از اساتید با تجربه کشور
          </b>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[0.937rem] text-[1.25rem]">
        <div className="self-stretch h-[3.563rem] flex flex-col items-center justify-start gap-[0.625rem]">
          <b className="self-stretch relative leading-[2rem]">
            چرا آکادمی ارزش ؟
          </b>
          <img
            className="w-[6.25rem] relative h-[0.938rem] overflow-hidden shrink-0"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <p className="m-0 self-stretch relative text-[0.875rem] leading-[2rem] font-medium text-paragraph">
          <span className="block">آکادمی ارزش راهی به سوی پیشرفت می باشد.</span>
          <span className="block">
            دوره های ما شامل کلاس های آنلاین از سطوح مبتدی تا
          </span>
          <span className="block">
            پیشرفته می باشد. با ما، یادگیری یک تجربه حرفه ای و
          </span>
          <span className="block">سرگرم کنننده است.</span>
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
