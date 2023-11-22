import { useParams } from "react-router-dom";

const CategoryDetailsPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1 className="title">Category {id}</h1>
    </>
  );
};

export default CategoryDetailsPage;
