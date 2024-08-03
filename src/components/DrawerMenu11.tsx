import { FunctionComponent, useEffect } from "react";

export type DrawerMenu1Type = {
  className?: string;
  onClose?: () => void;
};

const DrawerMenu1: FunctionComponent<DrawerMenu1Type> = ({
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
      className={`w-[220px] h-full relative bg-white overflow-hidden flex flex-col items-center justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-right text-sm text-title font-h6-bold-16 ${className}`}
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-start justify-start py-1.5 px-0">
        <div className="self-stretch flex flex-col items-end justify-start py-0 pr-2.5 pl-0 gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-5 relative h-5 overflow-hidden shrink-0">
              <img
                className="absolute h-[63.5%] w-[35%] top-[19.5%] right-[31.5%] bottom-[17%] left-[33.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
            </button>
            <div className="flex-1 relative leading-[32px]">دسته بندی</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-5 relative h-5 overflow-hidden shrink-0">
              <img
                className="absolute h-[63.5%] w-[35%] top-[19.5%] right-[31.5%] bottom-[17%] left-[33.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
            </button>
            <a className="[text-decoration:none] flex-1 relative leading-[32px] text-[inherit]">
              دوره ها
            </a>
          </div>
          <a className="[text-decoration:none] relative leading-[32px] text-[inherit]">
            اساتید
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[32px] text-[inherit]">
            مشاوره
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[32px] text-[inherit]">
            دانش نامه
          </a>
          <a className="[text-decoration:none] self-stretch relative leading-[32px] text-[inherit]">
            بلاگ
          </a>
        </div>
      </div>
      <div className="self-stretch h-[103px] flex flex-col items-center justify-start py-2.5 px-5 box-border">
        <a className="[text-decoration:none] self-stretch relative leading-[32px] text-[inherit]">
          درباره ما
        </a>
        <a className="[text-decoration:none] self-stretch relative leading-[32px] text-[inherit]">
          َتماس با ما
        </a>
      </div>
    </div>
  );
};

export default DrawerMenu1;
