import { FunctionComponent } from "react";
import NewsItem from "./NewsItem";

export type NewsType = {
  className?: string;
};

const News: FunctionComponent<NewsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center py-[1.875rem] px-[5rem] text-left text-[0.875rem] text-primary font-h6-bold-16 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[3.437rem]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <a className="[text-decoration:none] relative leading-[2rem] font-bold text-[inherit]">
            مشاهده همه
          </a>
          <b className="relative text-[1.25rem] leading-[2rem] text-title text-right grow-[1]">
            اخبار و مقالات
          </b>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1.25rem] text-right text-[1rem] text-title">
          <NewsItem
            category="دسته"
            title="عنوان"
            caption="لورم ایپسوم یا طرح نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پرکردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده می شود ."
            date="1403-02-15"
          />
          <NewsItem
            category="دسته"
            title="عنوان"
            caption="لورم ایپسوم یا طرح نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پرکردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده می شود ."
            date="1403-02-15"
          />
          <NewsItem
            category="دسته"
            title="عنوان"
            caption="لورم ایپسوم یا طرح نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پرکردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده می شود ."
            date="1403-02-15"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
