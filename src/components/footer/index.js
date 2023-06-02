import React, { useEffect } from "react";
import useFooter from "../../hooks/useFooter";
import BottomFooter from "./BottomFooter";
import MiddleFooter from "./MiddleFooter";
import TopFooter from "./TopFooter";

const Index = () => {
  const { fetchFooter, footer } = useFooter();

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <>
      <div className="mt-8">
        <TopFooter content={footer?.footerTop} />
        <MiddleFooter content={footer?.footerMiddle} />
        <BottomFooter content={footer?.footerBottom} />
      </div>
    </>
  );
};

export default Index;
