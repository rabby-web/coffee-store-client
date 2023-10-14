import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto mt-4 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
