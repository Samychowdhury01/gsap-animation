import React from "react";
import { AnimatedButton } from "../ui/animated-button";
import { Button } from "../ui/button";
import Container from "../ui/container";


const ServiceSection = () => {
  const services = [
    "E-Commerce",
    "Website Design",
    "Web Development",
    "Digital Products",
    "Brand Identities",
    "SEO Optimisation",
  ];
  return (
    <Container>
      <h2 className="text-4xl text-[3.5vw] font-semibold tracking-tight mb-6">
        We&apos;re good at
      </h2>
      <div className="grid grid-cols-[1fr_50.75vw] gap-8 items-center justify-between">
        <div className="flex-1 space-y-8">
          <ul className="space-y-4  mt-4">
            <p className="text-sm text-muted-foreground">Services</p>
            {services.map((service) => (
              <li key={service} className="cursor-pointer text-[2vw] font-semibold">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-[#545CFF] text-white rounded-3xl p-8 md:p-16">
          <h2 className="mb-8">
            Let&apos;s start with a conversation about how we can help you! Get
            in touch, we&apos;re a nice bunch.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedButton className="bg-white text-black text-[1.5rem] font-medium px-12 h-[72px] rounded-full">
              Let&apos;s talk
            </AnimatedButton>
            <Button
              variant="outline"
              size="lg"
              className="text-[1.5rem] font-medium px-12 h-[72px] rounded-full"
            >
              0207 112 82 85
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
