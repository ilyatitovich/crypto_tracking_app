import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./pages/Root/Root";
import Error404 from "./pages/Error404/Error404";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement: <Error404 />,
      children: [
          {
              index: true,
              element: <Home />,
              // loader: homeLoader,
          },
     
      ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


