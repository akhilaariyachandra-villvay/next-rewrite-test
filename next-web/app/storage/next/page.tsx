import dynamic from "next/dynamic";

const StorageForm = dynamic(() => import("./StorageForm"), { ssr: false });

const StoragePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Next.js storage test</h1>

      <StorageForm />
    </>
  );
};

export default StoragePage;
