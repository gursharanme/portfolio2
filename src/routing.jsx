import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import App from "./App";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
