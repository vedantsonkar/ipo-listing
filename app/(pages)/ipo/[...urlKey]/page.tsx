import AboutSection from "@/components/IPODetails/AboutSection";
import ApplySection from "@/components/IPODetails/ApplySection";
import BackButton from "@/components/IPODetails/BackButton";
import DetailsSection from "@/components/IPODetails/DetailsSection";
import TimeLineSection from "@/components/IPODetails/TimeLineSection";
import { companies } from "@/constants";

export default function IPODetailsPage({
  params,
}: {
  params: { urlKey: string[] };
}) {
  const data = companies.find(
    (company) => company.urlKey === params?.urlKey[0]
  );
  if (data) {
    return (
      <div className="flex flex-col h-full w-full gap-y-8">
        <ApplySection
          name={data?.name}
          logo={data?.logo}
          symbol={data?.symbol}
        />
        <DetailsSection
          issue={data?.issue}
          price={data?.price}
          listedOn={data?.listedOn}
          listedPrice={data?.listedPrice}
          lotSize={data?.lotSize}
          minAmount={data?.minAmount}
          listingGains={data?.listingGains}
        />
        <TimeLineSection status={data?.status} />
        <AboutSection description={data?.description} />
      </div>
    );
  }
  return null;
}
