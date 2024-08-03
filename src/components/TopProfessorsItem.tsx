import { FunctionComponent } from "react";

export type TopProfessorsItemType = {
  className?: string;
  image?: string;
  fullName?: string;
  expertise?: string;
};

const TopProfessorsItem: FunctionComponent<TopProfessorsItemType> = ({
  className = "",
  image,
  fullName,
  expertise,
}) => {
  return (
    <div
      className={`h-[19.313rem] w-[14.375rem] rounded-lg flex flex-col items-center justify-center gap-[1.437rem] text-center text-[1rem] text-title font-h6-bold-16 ${className}`}
    >
      <div className="w-[14.375rem] h-[13.125rem] flex flex-col items-start justify-start relative gap-[0.625rem]">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover z-[0]"
          alt=""
          src={image}
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[2.5rem] h-[2.5rem] absolute !m-[0] top-[10] right-[10] z-[1]">
          <div className="absolute top-[0rem] right-[0rem] rounded-[50%] bg-white box-border w-[2.5rem] h-[2.5rem] border-[1px] border-solid border-primary-orange" />
          <img
            className="absolute top-[0.531rem] right-[0.525rem] w-[1.444rem] h-[1.444rem] overflow-hidden"
            alt=""
            src="/share-svgrepocom.svg"
          />
        </button>
      </div>
      <div className="w-[4.938rem] flex flex-col items-center justify-start">
        <b className="self-stretch relative leading-[2rem]">{fullName}</b>
        <span className="self-stretch relative text-[0.875rem] leading-[2rem] font-medium text-subtitle">
          {expertise}
        </span>
      </div>
    </div>
  );
};

export default TopProfessorsItem;
