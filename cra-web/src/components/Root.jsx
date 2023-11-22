import { Outlet, Link } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <>
      <header>
        <nav className="navigation">
          <Link to={"/"}>Home</Link>

          <Link to={"/category"}>Categories</Link>

          <Link to={"/category/1"}>Category Details</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Root;
