import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./provider/authProviders.jsx";
import { ApiProvider } from "./redux/api-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <AuthProvider>
        <div className=" bg-primary h-[100dvh]">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ApiProvider>
  </React.StrictMode>
);
