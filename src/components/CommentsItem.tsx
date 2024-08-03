import { FunctionComponent } from "react";

export type CommentsItemType = {
  className?: string;
  userAvatar?: string;
  userComment?: string;
  fullName?: string;
};

const CommentsItem: FunctionComponent<CommentsItemType> = ({
  className = "",
  userAvatar,
  userComment,
  fullName,
}) => {
  return (
    <div
      className={`h-[25rem] flex-1 shadow-[0px_0px_7px_rgba(0,_0,_0,_0.2)] rounded-md bg-white flex flex-col items-center justify-center py-[0.625rem] px-[1.562rem] box-border gap-[1.25rem] min-w-[18.75rem] max-w-[21.563rem] text-right text-[0.875rem] text-paragraph font-h6-bold-16 ${className}`}
    >
      <img
        className="w-[6.25rem] relative rounded-42xl h-[6.25rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={userAvatar}
      />
      <p className="m-0 self-stretch relative leading-[2rem] font-medium grow-[1]">
        {userComment}
      </p>
      <div className="w-[14rem] flex flex-col items-end justify-start gap-[0.562rem] text-[0.75rem] text-dimgray">
        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
          <img
            className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/starsharp-svgrepocom@2x.png"
          />
          <img
            className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/starsharp-svgrepocom@2x.png"
          />
          <img
            className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/starsharp-svgrepocom@2x.png"
          />
          <img
            className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/starsharp-svgrepocom@2x.png"
          />
          <img
            className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/starsharp-svgrepocom@2x.png"
          />
        </div>
        <span className="self-stretch relative leading-[2rem] font-medium inline-block h-[1.938rem] shrink-0">
          {fullName}
        </span>
      </div>
    </div>
  );
};

export default CommentsItem;
