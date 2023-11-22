import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

import CategoryPage from "./pages/Category";
import CategoryDetailsPage from "./pages/CategoryDetails";
import StoragePage from "./pages/Storage";
import { CookiesProvider } from "react-cookie";

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
      {
        path: "storage/cra",
        element: <StoragePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  );
};

export default App;
