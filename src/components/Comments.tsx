import { FunctionComponent } from "react";
import CommentsItem from "./CommentsItem";

export type CommentsType = {
  className?: string;
};

const Comments: FunctionComponent<CommentsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-center justify-center p-[1.875rem] text-right text-[1.25rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center py-[0rem] px-[1.562rem] box-border gap-[1.625rem] min-w-[20rem]">
        <div className="h-[18.75rem] flex-1 flex flex-col items-end [justify-content:right] py-[0.625rem] px-[1.562rem] box-border gap-[1.25rem] min-w-[18.75rem] max-w-[21.563rem]">
          <div className="w-[20rem] flex flex-col items-center justify-start gap-[0.937rem]">
            <b className="self-stretch relative leading-[2rem]">
              آنچه در باره آکادمی ارزش می گویند
            </b>
            <img
              className="w-[9.375rem] relative h-[0.938rem] overflow-hidden shrink-0"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <p className="m-0 self-stretch relative text-[0.875rem] leading-[2rem] font-medium text-paragraph">
            لورم ایپسوم یا طرح نما متنی ساختگی و بدون معنی است که برای امتحان
            فونت و یا پرکردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده می
            شود .
          </p>
          <button className="cursor-pointer [border:none] py-[0.625rem] px-[1.25rem] bg-primary-orange rounded-lg flex flex-row items-center justify-center">
            <b className="relative text-[0.875rem] leading-[2rem] font-h6-bold-16 text-white text-left">
              مشاهده همه
            </b>
          </button>
        </div>
        <CommentsItem
          userAvatar="/avatar-56@2x.png"
          userComment="لورم ایپسوم یا طرح نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پرکردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده می شود ."
          fullName="نام و نام خانوادگی"
        />
        <CommentsItem
          userAvatar="/avatar-561@2x.png"
          userComment="لورم ایپسوم یا طرح نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پرکردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده می شود ."
          fullName="نام و نام خانوادگی"
        />
      </div>
    </section>
  );
};

export default Comments;
