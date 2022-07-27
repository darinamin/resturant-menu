import Head from "next/head";
// components
import DashProfilePageContent from "@/components/views/dashboard/profile";

DashProfilePage.layout = "dashboard";
export default function DashProfilePage() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <DashProfilePageContent />
    </>
  );
}
