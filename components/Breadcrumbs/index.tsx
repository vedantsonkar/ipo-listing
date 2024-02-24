"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Image from "next/image";

import BackArrow from "@/public/vectors/Back_Arrow.svg";

const Breadcrumbs: FC = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((item) => item !== "");
  const breadcrumbPaths = [{ name: "Home", href: "/" }];
  if (paths && paths.length > 0) {
    for (let i = 0; i < paths.length; i++) {
      breadcrumbPaths.push({
        name: paths[i].charAt(0).toUpperCase() + paths[i].slice(1),
        href: `/${paths[i]?.toLowerCase()}`,
      });
    }
  }
  return (
    <div
      className={
        !paths || paths.length === 0
          ? "md:px-24 px-8 py-4 w-full flex gap-x-2"
          : "bg-white md:px-24 px-8 py-4 w-full flex gap-x-2"
      }
      aria-label="Breadcrumbs"
    >
      {breadcrumbPaths.map((item, index) => (
        <div key={index} className="flex items-center gap-x-6">
          <Link
            className="hover:underline"
            href={item.href}
            aria-label={item.name}
          >
            {item.name}
          </Link>
          {index < breadcrumbPaths?.length - 1 && (
            <div className="rotate-180 w-4 h-4 aspect-square">
              <Image src={BackArrow} alt="Next" title="" fill />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
