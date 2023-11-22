import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

import CategoryPage from "./pages/Category";
import CategoryDetailsPage from "./pages/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "category/:id",
        element: <CategoryDetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
