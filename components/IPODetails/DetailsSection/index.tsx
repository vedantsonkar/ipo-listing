import { FC } from "react";

type DetailsSectionPropTypes = {
  issue: {
    size: {
      from: number;
      to: number;
    };
    date: {
      from: string;
      to: string;
    };
  };
  price: {
    from: number;
    to: number;
  };
  lotSize: number;
  listedOn: string;
  listedPrice: number;
  listingGains: number;
  minAmount: number;
};

const DetailsSection: FC<DetailsSectionPropTypes> = ({
  issue,
  price,
  lotSize,
  listedOn,
  listedPrice,
  listingGains,
  minAmount,
}) => {
  return (
    <div className="rounded-xl border-2 border-[#EDEDED] p-6 md:p-8">
      <h2 className="mb-2 font-bold text-xl">IPO Details</h2>
      <div className="rounded-xl border-2 border-[#EDEDED] p-4 grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-10">
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Issue Size</h3>
          <h4 className="font-semibold text-lg">
            ₹{issue.size.from} - ₹{issue.size.to} Cr.
          </h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Price Range</h3>
          <h4 className="font-semibold text-lg">
            ₹{price.from} - ₹{price.to}
          </h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Minimum Amount</h3>
          <h4 className="font-semibold text-lg">₹{minAmount}</h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Lot Size</h3>
          <h4 className="font-semibold text-lg">{lotSize} shares/lot</h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Issue Dates</h3>
          <h4 className="font-semibold text-lg">
            {issue.date.from} - {issue.date.to}
          </h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Listed On</h3>
          <h4 className="font-semibold text-lg">{listedOn}</h4>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Listed Price</h3>
          <h4 className="font-semibold text-lg">₹{listedPrice}</h4>
        </div>

        <div className="flex flex-col items-start justify-start">
          <h3 className="opacity-60">Listing Gains</h3>
          <h4 className="font-semibold text-lg">
            ₹{listingGains}(
            <span className="text-red-500">{listingGains}%</span>)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
