import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="py-[120px] px-[90px]">{children}</div>;
};

export default Container;
