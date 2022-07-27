import { useRouter } from "next/router";
import AddPageContent from "@/components/views/dashboard/ads/add";

function AddAdPage() {
  const router = useRouter();

  return (
    <>
      <AddPageContent locale={router.locale} router={router} />
    </>
  );
}

AddAdPage.layout = "dashboard";

export default AddAdPage;
