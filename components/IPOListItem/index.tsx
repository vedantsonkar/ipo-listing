import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type IPOListItemPropTypes = {
  company: Company;
  lastItem: boolean;
};

const IPOListItem: FC<IPOListItemPropTypes> = ({ company, lastItem }) => {
  return (
    <tr>
      <td className={lastItem ? "py-4 pl-4 rounded-bl-lg" : "py-4 pl-4"}>
        <Link
          href={`/ipo/${company.urlKey}`}
          className="group flex flex-row items-start justify-start gap-x-4"
          aria-label={company.name}
        >
          <div className="relative h-8 w-8 md:w-16 md:h-16 aspect-square rounded-full border border-black border-opacity-30">
            <Image
              src={company?.logo ?? "/images/logos/DEFAULT.png"}
              alt={company.symbol}
              fill
              sizes="33vw"
              className="rounded-full"
              priority={true}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="font-semibold group-hover:underline">
              {company.symbol}
            </span>
            <span className="text-opacity-40">
              {company.issue.date.from} - {company.issue.date.to}
            </span>
          </div>
        </Link>
      </td>
      <td
        className="py-4 text-center"
        aria-label={`₹${company.issue.size.from} Crores`}
      >
        <span className="font-semibold">₹{company.issue.size.from} Crores</span>
      </td>
      <td
        className="text-center"
        aria-label={`₹${company.price.from}-${company.price.to}`}
      >
        <span className="font-semibold">
          ₹{company.price.from}-{company.price.to}
        </span>
      </td>
      <td
        className={
          lastItem
            ? "py-4 pr-4 text-center rounded-br-lg"
            : "py-4 pr-4 text-center"
        }
      >
        <div
          className="flex flex-col items-center justify-center"
          aria-label={`₹${company.minAmount}`}
        >
          <span className="font-semibold">₹{company.minAmount}</span>
          <span className="text-opacity-40">{company.lotSize}/5 Lots</span>
        </div>
      </td>
    </tr>
  );
};

export default IPOListItem;
