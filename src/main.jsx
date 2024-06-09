import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./provider/authProviders.jsx";
import { ApiProvider } from "./redux/api-provider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <AuthProvider>
      <HelmetProvider>
        <div className=" bg-primary h-[100dvh]">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="dark"
      transition:Bounce
    />
  </ApiProvider>
);
