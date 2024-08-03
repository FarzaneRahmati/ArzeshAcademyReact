import { FunctionComponent } from "react";
import TopProfessorsItem from "./TopProfessorsItem";

export type TopProfessorsType = {
  className?: string;
};

const TopProfessors: FunctionComponent<TopProfessorsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-center justify-center p-[3.125rem] text-center text-[1.25rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[1.875rem]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem]">
          <b className="self-stretch relative leading-[2rem]">اساتید برتر</b>
          <img
            className="w-[6.25rem] relative h-[0.938rem] overflow-hidden shrink-0"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[1.875rem] text-[1rem]">
          <TopProfessorsItem
            image="/team18-11@2x.png"
            fullName="نام استاد"
            expertise="تخصص"
          />
          <TopProfessorsItem
            image="/team18-12@2x.png"
            fullName="نام استاد"
            expertise="تخصص"
          />
          <TopProfessorsItem
            image="/person-4-11@2x.png"
            fullName="نام استاد"
            expertise="تخصص"
          />
          <TopProfessorsItem
            image="/person-1-11@2x.png"
            fullName="نام استاد"
            expertise="تخصص"
          />
        </div>
      </div>
    </section>
  );
};

export default TopProfessors;
