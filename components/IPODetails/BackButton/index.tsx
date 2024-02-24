import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import BackArrow from "@/public/vectors/Back_Arrow.svg";

const BackButton: FC = () => {
  return (
    <Link
      href="/"
      className="relative w-10 h-10 border-2 rounded-xl border-[#EDEDED] shadow-xl"
      title="Back"
    >
      <Image fill sizes="33vw" src={BackArrow} alt="Back" aria-label="Back" />
    </Link>
  );
};

export default BackButton;
