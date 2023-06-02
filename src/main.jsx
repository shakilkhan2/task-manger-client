import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import AddTask from "./pages/addTask/AddTask";
import Main from "./layouts/Main";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
        // loader: () => fetch('http://localhost:5000/task')
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </React.StrictMode>
  </div>
);
