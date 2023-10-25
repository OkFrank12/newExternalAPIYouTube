import { useEffect, useState } from "react";
import Cards from "../../components/common/Cards";
import Navs from "../../components/common/Navs";
import PopOut from "../../components/common/PopOut";
import { usetoggleState } from "../../global/Jotai";

const HomeScreen = () => {
  const [loading, setLoading] = usetoggleState();

  const onLoading = () => {
    setLoading(!loading);
  };

  const [state, setState] = useState<Array<{}>>();

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("youTube")!));
  }, [state]);
  console.log(state);
  return (
    <>
      {loading && <PopOut />}
      <div className="w-full h-[70px] laptop:hidden fixed bg-white top-[70px] items-center flex">
        <Navs />
      </div>
      <div className="hidden fixed top-[70px] laptop:flex my-2 items-center justify-center">
        <button
          onClick={onLoading}
          className="px-5 py-3 bg-red-400 hover:rounded cursor-pointer"
        >
          Click here to choose
        </button>
      </div>
      <div className="w-full mt-20 flex justify-center flex-wrap">
        {state?.map((props: any) => (
          <Cards props={props}/>
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
