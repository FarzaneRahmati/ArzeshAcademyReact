import { FunctionComponent, useEffect } from "react";

export type DrawerMenuType = {
  className?: string;
  onClose?: () => void;
};

const DrawerMenu: FunctionComponent<DrawerMenuType> = ({
  className = "",
  onClose,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={`w-[13.75rem] h-full relative bg-white overflow-hidden flex flex-col items-center justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-right text-[0.875rem] text-title font-h6-bold-16 ${className}`}
      data-animate-on-scroll
    >
      <div className="self-stretch relative h-[14.375rem]">
        <div className="absolute top-[0rem] left-[0rem] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] bg-white w-[20.625rem] h-[14.375rem]" />
        <div className="absolute top-[0.438rem] right-[0rem] w-[13.75rem] flex flex-col items-end justify-start py-[0rem] px-[1.25rem] box-border gap-[0.312rem]">
          <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium font-h6-16 text-[inherit]">
            دسته بندی
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
            دوره ما
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
            اساتید
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
            مشاوره
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
            دانش نامه
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
            بلاگ
          </a>
        </div>
      </div>
      <div className="self-stretch h-[6.438rem] flex flex-col items-center justify-start py-[0.625rem] px-[1.25rem] box-border">
        <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
          درباره ما
        </a>
        <a className="[text-decoration:none] self-stretch relative leading-[2rem] font-medium text-[inherit]">
          َتماس با ما
        </a>
      </div>
    </div>
  );
};

export default DrawerMenu;
