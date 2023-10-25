import { useState } from "react";
import { getYouTubeVideos } from "../../api/API";

const Navs = () => {
  const [state0, setState0] = useState<boolean>(false);
  const [state1, setState1] = useState<boolean>(false);
  const [state2, setState2] = useState<boolean>(false);
  const [state3, setState3] = useState<boolean>(false);
  const [state4, setState4] = useState<boolean>(false);
  const [state5, setState5] = useState<boolean>(false);
  const [state6, setState6] = useState<boolean>(false);
  const [state7, setState7] = useState<boolean>(false);
  const [state8, setState8] = useState<boolean>(false);
  const [state9, setState9] = useState<boolean>(false);

  console.log(state0);

  const onState0 = () => {
    setState0(true);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState1 = () => {
    setState0(false);
    setState1(true);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState2 = () => {
    setState0(false);
    setState1(false);
    setState2(true);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState3 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(true);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState4 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(true);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState5 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(true);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState6 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(true);
    setState7(false);
    setState8(false);
    setState9(false);
  };

  const onState7 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(true);
    setState8(false);
    setState9(false);
  };

  const onState8 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(true);
    setState9(false);
  };

  const onState9 = () => {
    setState0(false);
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(false);
    setState5(false);
    setState6(false);
    setState7(false);
    setState8(false);
    setState9(true);
  };

  return (
    <>
      <button
        onClick={() => {
          onState0();
          getYouTubeVideos("News").then((res: any) => {
            console.log(res);
            localStorage.setItem("youTube", JSON.stringify(res[0].News));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state0 ? "bg-black" : "bg-red-500"
        }`}
      >
        News
      </button>
      <button
        onClick={() => {
          onState1();
          getYouTubeVideos("Sports").then((res: any) => {
            console.log(res);
            localStorage.setItem("youTube", JSON.stringify(res[1].Sports));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state1 ? "bg-black" : "bg-red-500"
        }`}
      >
        Sports
      </button>
      <button
        onClick={() => {
          onState2();
          getYouTubeVideos("War").then((res: any) => {
            console.log(res);
            localStorage.setItem("youTube", JSON.stringify(res[3].War));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state2 ? "bg-black" : "bg-red-500"
        }`}
      >
        War
      </button>
      <button
        onClick={() => {
          onState3();
          getYouTubeVideos("Technology").then((res: any) => {
            console.log(res);
            localStorage.setItem("youTube", JSON.stringify(res[2].Technology));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state3 ? "bg-black" : "bg-red-500"
        }`}
      >
        Technology
      </button>
      <button
        onClick={() => {
          onState4();
          getYouTubeVideos("Religion").then((res: any) => {
            localStorage.setItem("youTube", JSON.stringify(res[4].Religion));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state4 ? "bg-black" : "bg-red-500"
        }`}
      >
        Religion
      </button>
      <button
        onClick={() => {
          onState5();
          getYouTubeVideos("Government").then((res: any) => {
            localStorage.setItem("youTube", JSON.stringify(res[5].Government));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state5 ? "bg-black" : "bg-red-500"
        }`}
      >
        Government
      </button>
      <button
        onClick={() => {
          onState6();
          getYouTubeVideos("Education").then((res: any) => {
            localStorage.setItem("youTube", JSON.stringify(res[6].Education));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state6 ? "bg-black" : "bg-red-500"
        }`}
      >
        Education
      </button>
      <button
        onClick={() => {
          onState7();
          getYouTubeVideos("Music").then((res: any) => {
            localStorage.setItem("youTube", JSON.stringify(res[7].Music));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state7 ? "bg-black" : "bg-red-500"
        }`}
      >
        Music
      </button>
      <button
        onClick={() => {
          onState8();
          getYouTubeVideos("Debates").then((res: any) => {
            localStorage.setItem("youTube", JSON.stringify(res[8].Debates));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state8 ? "bg-black" : "bg-red-500"
        }`}
      >
        Debates
      </button>
      <button
        onClick={() => {
          onState9();
          getYouTubeVideos("Programming").then((res: any) => {
            localStorage.setItem("youTube", JSON.stringify(res[9].Programming));
          });
        }}
        className={`px-5 h-[50px] m-1 hover:scale-[1.04] transition-all duration-500 cursor-pointer rounded-md text-white items-center justify-center flex ${
          !state9 ? "bg-black" : "bg-red-500"
        }`}
      >
        Programming
      </button>
      <div className="w-[50px] h-[50px] rounded-full bg-slate-300 flex justify-center items-center border"></div>
    </>
  );
};

export default Navs;
