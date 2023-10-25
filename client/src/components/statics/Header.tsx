import { AiOutlineMenu } from "react-icons/ai";
import youTubeImg from "../../assets/youLogo.jpg";
import { GoSearch } from "react-icons/go";
import reactImg from "../../assets/react.svg";
import { BsMicFill, BsBell } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { usetoggleState } from "../../global/Jotai";
const Header = () => {
  const [state, setState] = usetoggleState();
  return (
    <>
      <div className="w-full h-[70px] bg-white fixed flex justify-between items-center border-b-2 p-3">
        <div className="flex items-center">
          <div
            className="w-[50px] h-[50px] rounded-full hover:bg-slate-300 flex justify-center items-center text-[24px] cursor-pointer transition-all duration-300"
            onClick={() => {
              setState(!state);
            }}
          >
            <AiOutlineMenu />
          </div>
          <img src={youTubeImg} className="w-[100px]" />
        </div>
        <div className="flex items-center">
          <div className="w-[600px] phone:hidden tablet:w-[500px] flex rounded-full overflow-hidden h-[45px] border-[2px]">
            <input
              placeholder="Search"
              className="w-[88%] pl-3 outline-none h-full"
            />

            <div className="w-[12%] border h-full bg-slate-300 flex items-center justify-center text-[24px]">
              <GoSearch />
            </div>
          </div>
          <div className="w-[50px] h-[50px] rounded-full hover:bg-slate-300 flex justify-center items-center text-[24px] cursor-pointer transition-all ml-2 duration-300">
            <BsMicFill />
          </div>
        </div>
        <div className="flex tablet:hidden items-center">
          <div className="w-[50px] h-[50px] rounded-full hover:bg-slate-300 flex justify-center items-center text-[24px] cursor-pointer transition-all duration-300">
            <BiVideoPlus />
          </div>
          <div className="w-[50px] h-[50px] rounded-full hover:bg-slate-300 flex justify-center items-center text-[24px] cursor-pointer transition-all duration-300">
            <BsBell />
          </div>
          <img
            src={reactImg}
            className="w-[50px] object-cover h-[50px] rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
