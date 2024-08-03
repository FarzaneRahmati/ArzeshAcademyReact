import { FunctionComponent } from "react";
import { useState, useCallback } from "react";
import PortalDrawer from "./PortalDrawer";
import DrawerMenu from "./DrawerMenu";
import Navigation from "./Navigation";
export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch h-[3.2rem] flex flex-row items-center justify-end  px-[0.937rem]  min-w-[20.313rem] ">
        <div className="self-stretch flex flex-row items-center [justify-content:left] gap-[2rem]">
          <div className="w-[5.375rem] hidden flex-row items-center justify-between md:flex">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
              onClick={openDrawerMenu}
            >
              <img
                className="absolute h-3/6 w-9/12 top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/icon.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[1.875rem] w-[1.875rem] relative overflow-hidden shrink-0 md:flex">
              <img
                className="absolute h-3/4 w-[66.67%] top-[12.67%] right-[16.67%] bottom-[12.33%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/icon1.svg"
              />
            </button>
          </div>
          <div className="flex flex-row items-center justify-start gap-[2rem] md:hidden">
            <div className="flex flex-row items-center justify-start gap-[2rem] md:hidden">
              <a className="[text-decoration:none] relative leading-[2rem] font-medium text-[inherit] cursor-pointer md:hidden">
                ثبت نام
              </a>
              <a className="[text-decoration:none] relative leading-[2rem] font-medium text-[inherit] cursor-pointer md:hidden">
                ورود
              </a>
            </div>
            <div className="w-[15rem] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-lg bg-white box-border h-[2.2rem] flex flex-row items-center justify-between py-[0.5rem] px-[0.625rem] border-[1px] border-solid border-dimgray">
              <i className="bi bi-search"></i>
              <input
                className="[border:none] [outline:none]  font-medium font-h6-bold-16 text-[0.75rem] bg-[transparent] text-gray-100 text-right"
                placeholder="هرآنچه در جستجو آن هستید "
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center [justify-content:right] gap-[.5rem] grow-[1] text-right text-[1rem] text-primary ">
          <div className="w-[13rem] flex flex-col items-end justify-center">
            <span className="self-stretch text-blue-500 font-bold">آکادمی ارزش</span>
            <hr className="w-[7.938rem] h-[0.063rem] border-t-[1px] border-solid border-black md:hidden m-0" />
            <span className="text-left md:hidden text-blue-500 font-bold">
              Arzesh-Academy
            </span>
          </div>
          <img
            className="w-[3rem] relative rounded-19xl h-[3rem] object-cover"
            alt=""
            src="/image-47@2x.png"
          />
        </div>
      </header>
      <hr className="self-stretch relative box-border h-[0.063rem] border-t-[1px] border-solid border-gray-200 m-0" />

      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};
export default Header;
