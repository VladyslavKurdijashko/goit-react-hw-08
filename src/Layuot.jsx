import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet /> {}
      </Suspense>
    </div>
  );
};

export default Layout;
