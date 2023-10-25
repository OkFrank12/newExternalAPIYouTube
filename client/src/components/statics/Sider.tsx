import {
  AiFillHome,
  AiFillPlayCircle,
  AiOutlinePlaySquare,
} from "react-icons/ai";
import { BiLike, BiSolidVideos } from "react-icons/bi";
import { BsCollectionPlayFill } from "react-icons/bs";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import Side from "./Side";
import reactImg from "../../assets/react.svg";
import { usetoggleState } from "../../global/Jotai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Sider = () => {
  const [state, setState] = usetoggleState();
//   console.log(setState)
  const [parent] = useAutoAnimate();
  return (
    <>
      {!state ? (
        <div ref={parent} className="w-[200px] h-[100vh] mini_phone:hidden py-2 mt-[70px] fixed border-r-2">
          <Side text="home" icon={<AiFillHome />} />
          <Side text="shorts" icon={<AiFillPlayCircle />} />
          <Side text="subscriptions" icon={<BiSolidVideos />} />
          <hr />
          <Side text="library" icon={<BsCollectionPlayFill />} />
          <Side text="history" icon={<GoHistory />} />
          <Side text="your videos" icon={<AiOutlinePlaySquare />} />
          <Side text="watch later" icon={<MdOutlineWatchLater />} />
          <Side text="downloads" icon={<LiaDownloadSolid />} />
          <Side text="liked videos" icon={<BiLike />} />
          <hr />
          <p className="mt-2 ml-2">Subscription</p>
          <div
            className="w-full flex mb-2 items-center h-[45px] p-3 hover:bg-gray-300 cursor-pointer transition-all duration-300
         rounded-md capitalize"
          >
            <img
              src={reactImg}
              className="h-[35px] w-[35px] object-cover mr-2 rounded-full"
            />
            <span className="flex flex-1">Romans</span>
            <div className="w-[5px] h-[5px] rounded-full bg-blue-400"></div>
          </div>
          <div
            className="w-full flex mb-2 items-center h-[45px] p-3 hover:bg-gray-300 cursor-pointer transition-all duration-300
         rounded-md capitalize"
          >
            <img
              src={reactImg}
              className="h-[35px] w-[35px] object-cover mr-2 rounded-full"
            />
            <span className="flex flex-1">Romans</span>
            <div className="w-[5px] h-[5px] rounded-full bg-blue-400"></div>
          </div>
        </div>
      ) : (
        <div ref={parent} className="w-[70px] h-[100vh] mini_phone:hidden py-2 mt-[70px] fixed border-r-2">
          <Side icon={<AiFillHome />} />
          <Side icon={<AiFillPlayCircle />} />
          <Side icon={<BiSolidVideos />} />
          <hr />
          <Side icon={<BsCollectionPlayFill />} />
          <Side icon={<GoHistory />} />
          <Side icon={<AiOutlinePlaySquare />} />
          <Side icon={<MdOutlineWatchLater />} />
          <Side icon={<LiaDownloadSolid />} />
          <Side icon={<BiLike />} />
          <hr />
          <div
            className="w-full flex mb-2 items-center h-[45px] p-3 hover:bg-gray-300 cursor-pointer transition-all duration-300
         rounded-md capitalize"
          >
            <img
              src={reactImg}
              className="h-[35px] w-[35px] object-cover mr-2 rounded-full"
            />
          </div>
          <div
            className="w-full flex mb-2 items-center h-[45px] p-3 hover:bg-gray-300 cursor-pointer transition-all duration-300
         rounded-md capitalize"
          >
            <img
              src={reactImg}
              className="h-[35px] w-[35px] object-cover mr-2 rounded-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sider;
