/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../ui/container";

const DigitalPartnerSection = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-12 items-end">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl md:text-[3.5vw] font-semibold mb-16">
            Your Digital Partner
          </h2>

          <p className="text-[1.5rem] leading-relaxed text-gray-800 max-w-xl mb-32">
            We partner with companies of all sizes to solve complex business
            challenges and define their digital strategies and objectives that
            deliver results. We help bring ideas to life and create brands,
            websites & digital products that work.
          </p>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              {/* Replace with actual brand logos */}
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-black"></div>
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div className="w-12 h-12 rounded-full bg-gray-900"></div>
              </div>
            </div>
            <p className="text-gray-600">Brands who've trusted us...</p>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="bg-[#ECF1F4] rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="space-y-4 p-9">
              <h2>20</h2>
              <p className="text-[1.5rem] text-gray-700">Years on the market</p>
            </div>
                
            <div className="space-y-4 p-9 border-l border-gray-400">
              <h2>500</h2>
              <p className="text-[1.5rem] text-gray-700">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DigitalPartnerSection;
