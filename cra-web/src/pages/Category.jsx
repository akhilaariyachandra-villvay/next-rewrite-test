import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <>
      <h1 className="title">Categories</h1>

      <ul>
        <li>
          <Link to="/category/1">Category 1</Link>
        </li>

        <li>
          <Link to="/category/2">Category 2</Link>
        </li>
      </ul>
    </>
  );
};

export default CategoryPage;
