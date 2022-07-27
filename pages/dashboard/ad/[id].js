import AddPageContent from "@/components/views/dashboard/ads/add";
import Head from "next/head";
import { useRouter } from "next/router";

function EditAdPage(props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Osmanbaba - Edit Ad</title>
      </Head>
      <AddPageContent id={id} />
    </>
  );
}

EditAdPage.layout = "dashboard";

export default EditAdPage;
