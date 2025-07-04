import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/module/Footer";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      {/* <div className="container mx-auto"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </div>
  );
};
