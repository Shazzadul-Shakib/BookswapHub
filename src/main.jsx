import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./provider/authProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <div className=" bg-primary h-[100dvh]">
          <RouterProvider router={router} />
        </div>
    </AuthProvider>
  </React.StrictMode>
);
