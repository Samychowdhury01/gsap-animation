import Container from "../ui/container";

const TeamSection = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[4vw]">
        <p className="text-4xl md:text-5xl lg:text-[3.5vw] font-semibold max-w-4xl">
          Let our experienced team
          <span className="block mt-7">elevate your digital goals</span>
        </p>

        <div className="grid grid-cols-2 gap-8 items-end">
          {/* Stats */}
          <div className="flex items-center gap-[4vw]">
            <div className="space-y-2">
              <p className="text-[3.5vw] font-semibold tracking-wide">250</p>
              <p className="text-[1.5vw] text-gray-700">Five-Star Reviews</p>
            </div>

            <div className="space-y-2">
              <p className="text-[3.5vw] font-semibold tracking-wide">10</p>
              <p className="text-[1.5vw] text-gray-700">In-House Experts</p>
            </div>
          </div>

          {/* Description */}
          <div className="text-[1.5vw] w-3/4 ml-auto text-gray-700">
            <p>
              We have successfully completed over 300+ projects from a variety
              of industries. In our team, designers work alongside developers
              and digital strategists, we believe this is our winning recipe for
              creating digital products that make an impact.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamSection;
