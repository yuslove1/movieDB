import { Outlet } from "react-router-dom";
import Navbar from './navbar/Navbar'

const PageLayout = () => {
  return (
    <div
    //   style={{
    //     width: "90%",
    //     margin: "auto",
    //   }}
    className=" h-screen"
    >
      <Navbar />
      <Outlet />
      <div>this is footer</div>
    </div>
  );
};

export default PageLayout;