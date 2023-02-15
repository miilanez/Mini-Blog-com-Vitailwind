import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//páginas
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";

import { RouterProvider, Route, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
