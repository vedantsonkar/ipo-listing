import { FC, useState } from "react";
import { timeline } from "@/constants";
import Image from "next/image";

type TimeLineSectionPropTypes = {
  status: number;
};

interface NewTimeLine extends TimeLine {
  isLast?: boolean;
  index?: number;
}

const SingularTimelineCard: FC<NewTimeLine> = ({ title, date, filled }) => {
  return (
    <div className="flex flex-row md:flex-col items-center justify-center gap-4 z-[1]">
      {filled ? (
        <div className="relative rounded-full w-14 h-14">
          <Image
            src="/vectors/Check_Mark_White.svg"
            alt={title}
            fill
            sizes="33VW"
          />
        </div>
      ) : (
        <div className="rounded-full w-14 h-14 bg-[#EDEAE9]" />
      )}
      <div className="flex flex-col">
        <h4 className="font-semibold md:text-center">{title}</h4>
        <h4 className="opacity-60 md:text-center">{date}</h4>
      </div>
    </div>
  );
};

const TimeLineSection: FC<TimeLineSectionPropTypes> = ({ status }) => {
  const updatedTimeline = timeline.map((item, index) => {
    const filled = index <= status;
    return { ...item, filled };
  });
  return (
    <div className="relative rounded-xl border-2 border-[#EDEDED] p-6 md:p-8">
      <h2 className="mb-2 font-bold text-xl">IPO Timeline</h2>
      <div className="flex w-full md:flex-row flex-col items-start gap-y-4 justify-between">
        {updatedTimeline.map((item, index) => (
          <SingularTimelineCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TimeLineSection;
