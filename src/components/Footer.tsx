import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-whitesmoke flex flex-row items-center justify-center py-[2.75rem] px-[1.25rem] text-center text-[0.875rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[3.125rem_0.625rem] min-w-[20rem]">
        <div className="h-[13.063rem] w-[25.75rem] flex flex-col items-center justify-center gap-[1.562rem]">
          <b className="self-stretch flex-1 relative leading-[2rem]">مخاطبین</b>
          <p className="m-0 self-stretch relative leading-[2rem] font-medium text-paragraph">
            آدرس ایمیل خود را برای ثبت نام در اشتراک خبرنامه ما وارد کنید
          </p>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[0.312rem_0.75rem] min-w-[25.75rem]">
            <button className="cursor-pointer [border:none] p-[0.625rem] bg-primary-orange w-[7.625rem] rounded-sm h-[3.125rem] flex flex-row items-center justify-center box-border sm:flex-1">
              <b className="relative text-[1rem] leading-[2rem] font-h6-bold-16 text-white text-left">
                ارسال
              </b>
            </button>
            <input
              className="[border:none] [outline:none] bg-white flex-1 relative shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-sm h-[3.125rem] pt-[0.812rem] px-[1.437rem] pb-[0.312rem] box-border font-h6-bold-16 font-medium text-[1rem] text-silver"
              placeholder="ایمیل"
              type="text"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.062rem]">
            <img
              className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/facebook176-svgrepocom@2x.png"
            />
            <img
              className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/linkedin-svgrepocom@2x.png"
            />
            <img
              className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/instagram1-svgrepocom@2x.png"
            />
            <img
              className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/twitter154-svgrepocom@2x.png"
            />
            <img
              className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/youtubecolor-svgrepocom@2x.png"
            />
          </div>
        </div>
        <div className="h-[13.125rem] w-[18.75rem] flex flex-row items-center justify-center min-w-[18.75rem]">
          <div className="h-[13.125rem] w-[7rem] flex flex-col items-center justify-center">
            <b className="self-stretch flex-1 relative leading-[2rem]">
              لینک ها
            </b>
            <div className="self-stretch h-[9.75rem] flex flex-col items-center justify-center gap-[1.25rem] text-[0.75rem]">
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                مخاطبین
              </a>
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                دانش نامه
              </a>
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                اخبار و مقالات
              </a>
            </div>
          </div>
          <div className="self-stretch w-[8.5rem] flex flex-col items-center justify-center gap-[1.25rem]">
            <b className="self-stretch flex-1 relative leading-[2rem]">
              آکادمی ارزش
            </b>
            <div className="self-stretch flex flex-col items-center justify-center gap-[0.625rem] text-[0.75rem]">
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                درباره ما
              </a>
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                دوره ها
              </a>
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                اساتید
              </a>
              <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
                رویدادها
              </a>
            </div>
          </div>
        </div>
        <div className="w-[19.625rem] flex flex-col items-center justify-center gap-[0.625rem] text-right text-[1rem] text-primary">
          <div className="self-stretch flex flex-row items-center justify-end gap-[1.25rem]">
            <div className="w-[10.875rem] flex flex-col items-end justify-start gap-[0.437rem]">
              <b className="self-stretch relative leading-[2rem]">
                آکادمی ارزش
              </b>
              <div className="w-[7.938rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-black" />
              <b className="self-stretch relative leading-[2rem]">
                Arzesh-Academy
              </b>
            </div>
            <img
              className="w-[4.688rem] relative rounded-19xl h-[4.688rem] object-cover"
              alt=""
              src="/image-471@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[0.625rem] gap-[0.312rem] text-[0.875rem] text-paragraph">
            <span className="self-stretch relative leading-[2rem] font-medium">
              آدرس : خیابان اول کوچه دوم ساختمان شرکت شبکه ارزش
            </span>
            <span className="self-stretch relative leading-[2rem] font-medium">{`تلفن : 123456789 `}</span>
            <span className="self-stretch relative leading-[2rem] font-medium">
              arzesh@gmail.com : ایمیل
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
