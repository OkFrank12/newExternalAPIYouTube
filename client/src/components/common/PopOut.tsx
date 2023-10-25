import { AiOutlineClose } from "react-icons/ai";
import Navs from "./Navs";
import { usetoggleState } from "../../global/Jotai";

const PopOut = () => {
  const [loading, setLoading] = usetoggleState();
  console.log(loading)
  return (
    <>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(10px)",
          width: "100%",
          height: "100vh",
        }}
        className="fixed z-50 w-full h-[100vh] top-0 left-0 flex items-center justify-center flex-col"
      >
        <AiOutlineClose
          onClick={() => {
            setLoading(false);
          }}
          className="cursor-pointer"
        />
        <Navs />
      </div>
    </>
  );
};

export default PopOut;
