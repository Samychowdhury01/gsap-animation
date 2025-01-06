import React from "react";
import Container from "../ui/container";
import { AnimatedButton } from "../ui/animated-button";

const HeaderSection = () => {
  return (
    <Container>
      <div className="mt-[100px]">
        <h4 className="max-w-7xl text-[8rem] leading-tight font-semibold">
          Crafting <span className="text-gradient-anim mr-10">Digital</span>
          <span className="block">Experiences</span>
        </h4>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-40">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center font-medium">
              15
            </div>
            <span className="text-gray-600">Website Awards</span>
          </div>
       <div className="flex gap-[2rem] justify-end">
       <p className="text-[1.5vw] text-gray-900 w-1/2">
            We build engaging websites, brands & innovative e-commerce solutions.
          </p>
          <AnimatedButton className="text-[1.5rem] px-12 py-3 bg-primary text-white rounded-full">
            Case Studies
          </AnimatedButton>
       </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderSection;
