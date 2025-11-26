import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <>
      <hr className="border border-neutral-300" />
      <div className="w-full flex-center py-10 md:py-20 flex-col gap-4 md:gap-10 custom-container">
        <div className="mb-4 md:mb-10 flex-center flex-col">
          <img src="/icons/Logo.svg" alt="logo" className="mb-4 md:mb-5.5" />
          <p className="text-neutral-950 text-sm-semibold md:text-md-semibold">
            Discover inspiring stories & timeless knowledge, ready to borrow
            anytime. Explore online or visit our nearest library branch.
          </p>
        </div>
        <div>
          <p className="text-sm-bold md:text-md-bold mb-5">
            Follow on Social Media
          </p>
          <div className="flex-center gap-3">
            <div className="border border-neutral-300 flex-center size-10 rounded-full">
              <Icon icon="gg:facebook" width="24" height="24" />
            </div>
            <div className="border border-neutral-300 flex-center size-10 rounded-full">
              <Icon icon="iconoir:instagram" width="24" height="24" />
            </div>
            <div className="border border-neutral-300 flex-center size-10 rounded-full">
              <Icon icon="flowbite:linkedin-solid" width="24" height="24" />
            </div>
            <div className="border border-neutral-300 flex-center size-10 rounded-full">
              <Icon icon="ic:sharp-tiktok" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
