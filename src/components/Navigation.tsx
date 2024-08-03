import { FunctionComponent } from "react";

export type NavigationType = {
  className?: string;
};

const Navigation: FunctionComponent<NavigationType> = ({ className = "" }) => {
  return (
    <>
      <nav
        className={`m-0 self-stretch bg-white h-[2.3rem] flex flex-row items-center justify-center text-left text-[0.875rem] text-title font-h6-bold-16 md:hidden md:p-[0.625rem] ${className}`}
      >
        <div className="h-[3.438rem] flex-1 flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-row items-center justify-start md:hidden">
            <a
              className="[text-decoration:none] flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] cursor-pointer text-[inherit]"
              href="https://www.google.com"
            >
              تماس با ما
            </a>
            <a
              className="[text-decoration:none] flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] cursor-pointer ml-[-2.125rem] text-[inherit]"
              href="https://www.google.com"
            >
              درباره ما
            </a>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end  md:hidden">
            <a
              className="[text-decoration:none] flex-1 rounded bg-gray-300 overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] cursor-pointer text-[inherit]"
              href="https://www.google.com"
            >
              بلاگ
            </a>
            <a
              className="[text-decoration:none] w-[7.375rem] rounded bg-gray-300 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] box-border cursor-pointer text-[inherit]"
              href="https://www.google.com"
            >
              دانش نامه
            </a>
            <a className="[text-decoration:none] w-[6.25rem] rounded bg-gray-300 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] box-border text-[inherit]">
              مشاوره
            </a>
            <a
              className="[text-decoration:none] w-[6rem] rounded bg-gray-300 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] box-border cursor-pointer text-[inherit]"
              href="https://www.google.com"
            >
              اساتید
            </a>
            <a className="[text-decoration:none] w-[6.25rem] rounded bg-gray-300 overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.937rem] px-[1.875rem] box-border cursor-pointer text-[inherit]"
              href="https://www.google.com"
              target="_blank"
            >
              دوره ها
            </a>
            <hr className="w-[0.063rem]  box-border h-[2rem] border-r-[2px] border-solid border-black" />
            <div className="w-[10rem] bg-gray-300 overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.937rem] px-[1.875rem] box-border cursor-pointer">
              <span className="mr-2	 font-medium">
                دسته بندی
              </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
