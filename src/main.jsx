import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AuthProvider from "./providers/AuthProvider";
import Users from "./components/Users";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch(
            "https://coffee-store-server-69gxgpo3p-rabby-webs-projects.vercel.app/coffee"
          ),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-69gxgpo3p-rabby-webs-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffee-store-server-69gxgpo3p-rabby-webs-projects.vercel.app/user"
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
