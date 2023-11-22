import { useParams } from "react-router-dom";
import placeholderImage from "../assets/placeholder.webp";

const CategoryDetailsPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1 className="title">Category {id}</h1>

      <div>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={placeholderImage}
          alt="Placeholder image"
          width={171}
          height={171}
        />

        <p>This image is being loaded directly from the CRA code base.</p>
      </div>
    </>
  );
};

export default CategoryDetailsPage;
