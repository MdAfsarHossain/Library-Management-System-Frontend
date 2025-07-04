import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import "./index.css";
import store from "./redux/store.ts";
import router from "./routes/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <HelmetProvider> */}
      <Toaster />
      <RouterProvider router={router} />
      {/* </HelmetProvider> */}
    </Provider>
  </StrictMode>
);

/*
1. Assignemnt 3 modify
2. Page List => /borrow/:bookId
Backend
3. Borrow Management -> CRUD
4. 
*/
