import React from "react";

const BottomFooter = ({ content }) => {
  const date = new Date();
  return (
    <>
      <div className="bg-neutral-900 py-5 text-center text-sm text-zinc-400">
        Copyright &copy; {date.getFullYear()} {content?.siteName}.{" "}
        {content?.copyrightsReserved && "All Rights Reserved."}
      </div>
    </>
  );
};

export default BottomFooter;
