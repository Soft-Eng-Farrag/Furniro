import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Layout/Navbar/Navbar";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "nav", element: <Navbar /> },
      { path: "shop", element: <div></div> },
    ],
  }
]);

export default router;
