import { Outlet } from "react-router";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
