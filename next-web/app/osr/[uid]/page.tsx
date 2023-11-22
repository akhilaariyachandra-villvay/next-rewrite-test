type OSRDetailsPageProps = {
  params: {
    uid: string;
  };
};

const OSRDetailsPage = ({ params }: OSRDetailsPageProps) => {
  const { uid } = params;

  let title = "Default OSR";
  switch (uid) {
    case "grant-hoyle":
      title = "Grant Hoyle";
      break;
    case "sammy-ortiz":
      title = "Sammy Ortiz";
      break;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
    </>
  );
};

export default OSRDetailsPage;
