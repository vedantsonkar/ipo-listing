import IPOListTable from "@/components/IPOListTable";

export default function Home() {
  if (typeof window === "object") {
    console.log("Something", document.body.style.fontFamily);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <IPOListTable />
    </main>
  );
}
