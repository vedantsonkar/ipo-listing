import { BASE_FE_URL, companies } from "@/constants";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export function generateMetadata({ params }: { params: Params }): Metadata {
  const companyData = companies.find(
    (company) => company.urlKey === params?.urlKey[0]
  );
  if (!companyData) {
    return {
      title: "Company Not Found",
      description: "This company does not exist.",
      keywords: "",
      metadataBase: new URL(BASE_FE_URL),
      openGraph: {
        images: "/images/logos/DEFAULT.png",
      },
    };
  }
  return {
    title: companyData?.name,
    description: companyData?.description.substring(0, 400),
    keywords: companyData?.symbol,
    openGraph: {
      images: [`${companyData?.logo}`],
    },
  };
}
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  if (!params || !params?.urlKey) {
    redirect("/");
  }
  return (
    <div className="bg-white bg-no-repeat px-8 py-4 md:py-8 md:px-24 min-h-screen flex items-start justify-center">
      <div className="max-w-7xl">{children}</div>
    </div>
  );
}
