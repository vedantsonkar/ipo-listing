import { FC } from "react";

type AboutSectionPropTypes = {
  description: string;
};

const AboutSection: FC<AboutSectionPropTypes> = ({ description }) => {
  return (
    <div className="relative rounded-xl border-2 border-[#EDEDED] p-6 md:p-8">
      <h2 className="mb-2 font-bold text-xl">About the Company</h2>
      <p>{description}</p>
    </div>
  );
};

export default AboutSection;
