import { FC } from "react";
import { companies, tableHeadings } from "@/constants";
import IPOListItem from "../IPOListItem";

const IPOListTable: FC = () => {
  return (
    <table className="table-auto w-full max-w-7xl">
      <thead className="bg-[#EDEDED] text-[#9a9a9a] text-sm">
        <tr>
          {tableHeadings.map((item, index) => (
            <th
              key={index}
              className={
                index === 0
                  ? "px-4 py-4 rounded-tl-lg"
                  : index === tableHeadings.length - 1
                  ? "px-4 py-4 rounded-tr-lg"
                  : "px-4 py-4"
              }
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white text-black">
        {companies.map((company, index) => (
          <IPOListItem
            key={index}
            company={company}
            lastItem={index === companies.length - 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default IPOListTable;
