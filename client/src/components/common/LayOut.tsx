import { Outlet } from "react-router-dom";
import Header from "../statics/Header";
import Sider from "../statics/Sider";
import { usetoggleState } from "../../global/Jotai";

const LayOut = () => {
  const [state, setState] = usetoggleState();
//   console.log(setState)
  return (
    <>
      <Header />
      <div className="flex">
        <Sider />
        <div className="w-full h-[calc(100vh-70px)] mt-[70px] flex justify-end">
          <div
            className={`pl-2 ${
              !state ? "w-[calc(100vw-200px)]" : "w-[calc(100vw-70px)]"
            } mini_phone:w-full h-full`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
