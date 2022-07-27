import { useRouter } from "next/router";
// components
import AdsPageContent from "@/components/views/dashboard/ads";
import { parseCookies } from "nookies";

function AllAdsPage() {
  const router = useRouter();
  let cookies = parseCookies();
  if (cookies?.user) cookies = JSON.parse(cookies?.user);
  else cookies = null;

  return (
    <>
      <AdsPageContent locale={router.locale} cookies={cookies} />
    </>
  );
}

AllAdsPage.layout = "dashboard";

export default AllAdsPage;
