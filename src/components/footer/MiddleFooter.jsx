import React from "react";
import DownloadApp from "./DownloadApp";
import FooterColumn from "./FooterColumn";
import PaymentMethods from "./PaymentMethods";
import SocialMedia from "./SocialMedia";

const MiddleFooter = ({ content }) => {
  return (
    <>
      <div className="max-md:mt-7 w-full bg-black px-4 py-9 ">
        <div className="max-md:flex-col gap-y-10 mx-auto flex w-full max-w-6xl justify-between pb-5">
          {/* Brand Details */}
          <div className="flex max-w-sm flex-col">
            <div>
              <img className="" src={content?.brandingPart?.logo} alt="logo" />
            </div>
            <div className="text-md mt-5 text-gray-400">
              {content?.brandingPart?.description}
            </div>
          </div>
          {/* Footer Links */}
          {content?.columns.map((column) => (
            <FooterColumn column={column} key={column?.head} />
          ))}
        </div>

        <div className="max-md:flex-wrap mx-auto flex w-full max-w-6xl justify-between border-t border-gray-500 py-4">
          <SocialMedia content={content?.socialMedia} />
          <PaymentMethods />
          <DownloadApp content={content?.downloadApp} />
        </div>
      </div>
    </>
  );
};

export default MiddleFooter;
