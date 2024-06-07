import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./provider/authProviders.jsx";
import { ApiProvider } from "./redux/api-provider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")).render(
    <ApiProvider>
      <AuthProvider>
        <div className=" bg-primary h-[100dvh]">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
      <ToastContainer theme="dark" />
    </ApiProvider>
);
