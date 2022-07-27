import dynamic from "next/dynamic";

const PageContent = dynamic(() => import("components/views/dashboard/index"), {
  ssr: false,
});

function DashboardIndexPage() {
  return (
    <>
      <PageContent />
    </>
  );
}
DashboardIndexPage.layout = "dashboard";
export default DashboardIndexPage;
