import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import App from "./App";
import Work from "./pages/Work";

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
      }
    ],
  },
]);
