import { Outlet, Link } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <>
      <header>
        <div>This page is being served by CRA.</div>

        <nav className="navigation">
          <Link to={"/"}>Home</Link>

          <Link to={"/category"}>Categories</Link>

          <a href="/osr">OSR</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
