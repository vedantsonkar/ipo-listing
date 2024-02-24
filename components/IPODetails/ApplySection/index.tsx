import { FC } from "react";
import Image from "next/image";
import BackButton from "../BackButton";

type ApplySectionPropTypes = {
  name: string;
  symbol: string;
  logo?: string;
};

const ApplySection: FC<ApplySectionPropTypes> = ({ name, symbol, logo }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
      aria-label={name}
    >
      <div className="flex flex-row items-center justify-start gap-x-4 max-md:w-full">
        <div className="flex flex-row items-center justify-start gap-x-4 max-md:w-full">
          <BackButton />
          <div className="flex flex-row items-center justify-center gap-x-4">
            <div className="relative h-14 w-14 md:w-16 md:h-16 aspect-square rounded-full border border-black border-opacity-30">
              <Image
                src={logo ?? "/images/logos/DEFAULT.png"}
                alt={symbol}
                fill
                sizes="33vw"
                className="rounded-full"
                priority={true}
                title={symbol}
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1
                className="text-2xl font-semibold group-hover:underline"
                title={symbol}
              >
                {symbol}
              </h1>
              <h1 className="opacity-60" title={name}>
                {name}
              </h1>
            </div>
          </div>
        </div>

        <button
          className="relative h-12 w-12 aspect-sqaure md:hidden justify-self-end"
          title="Download"
        >
          <Image
            src="/vectors/Download_Icon.svg"
            alt="Download"
            aria-label="Download"
            fill
            title="Download"
            sizes="33vw"
          />
        </button>
      </div>
      <div className="flex flex-row items-center justify-start max-md:w-full md:justify-start gap-x-4">
        <button
          className="relative h-12 w-12 aspect-sqaure max-md:hidden"
          title="Download"
        >
          <Image
            src="/vectors/Download_Icon.svg"
            alt="Download"
            aria-label="Download"
            fill
            title="Download"
            sizes="33vw"
          />
        </button>
        <button
          className="bg-[#000035] rounded-2xl py-4 px-6 text-white shadow-xl max-md:w-full"
          title="Apply"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ApplySection;
