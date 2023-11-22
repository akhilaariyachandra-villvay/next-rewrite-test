import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.75rem",
            padding: "1rem",
          }}
        >
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
