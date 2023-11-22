import Link from "next/link";

const OSRListPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Outside Sales Representatives</h1>

      <ul>
        <li>
          <Link href="/osr/grant-hoyle">Grant Hoyle</Link>
        </li>

        <li>
          <Link href="/osr/sammy-ortiz">Sammy Ortiz</Link>
        </li>
      </ul>
    </>
  );
};

export default OSRListPage;
