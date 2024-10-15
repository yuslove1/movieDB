import { Outlet } from "react-router-dom";
import Navbar from './navbar/Navbar'

const PageLayout = () => {
  return (
    <div
    //   style={{
    //     width: "90%",
    //     margin: "auto",
    //   }}
    className=" "
    >
      <Navbar />
      <Outlet />
      {/* <div>Footer place-holder(if any)</div> */}
    </div>
  );
};

export default PageLayout;