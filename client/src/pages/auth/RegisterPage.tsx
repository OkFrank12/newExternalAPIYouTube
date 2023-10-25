import reactImg from "../../assets/react.svg";
import { FaCamera } from "react-icons/fa";
import { useJotaiState, useMainUserRegister } from "../../global/Jotai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserAPI } from "../../api/API";
const RegisterPage = () => {
  const [state, setState] = useJotaiState();
//   console.log(setState);
  const [parent] = useAutoAnimate();
  return (
    <>
      <div
        ref={parent}
        className="w-full h-screen flex justify-center items-center"
      >
        {state === 1 ? (
          <StepI />
        ) : state === 2 ? (
          <StepII />
        ) : state === 3 ? (
          <StepIII />
        ) : null}
      </div>
    </>
  );
};

export default RegisterPage;

const StepI = () => {
  const [state, setState] = useJotaiState();
  console.log(state);
  const [user, setUser]: any = useMainUserRegister();

  const [userName, setUserName] = useState<string>(user.userName);
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>(user.password);

  return (
    <div className="w-[500px] rounded-md h-[300px] border-blue-400 border-[2px] p-3">
      <div className="w-full flex justify-center items-center">
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 text-white rounded-full text-[20px] flex justify-center items-center bg-blue-400">
          1
        </div>
        <hr className="w-[100px] mx-2 border-[2px] border-blue-400" />
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-[20px] flex justify-center items-center text-blue-400">
          2
        </div>
        <hr className="w-[100px] mx-2 border-[2px] border-blue-400" />
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-[20px] flex justify-center items-center text-blue-400">
          3
        </div>
      </div>
      <input
        type="text"
        value={userName}
        onChange={(e: any) => {
          setUserName(e.target.value);
        }}
        placeholder="enter your user name"
        className="w-full mt-3 border-blue-400 border pl-2 text-blue-400 rounded-md h-[40px] outline-none"
      />
      <input
        type="text"
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
        placeholder="enter your email address"
        className="w-full mt-3 border-blue-400 border pl-2 text-blue-400 rounded-md h-[40px] outline-none"
      />
      <input
        type="text"
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
        placeholder="enter your password"
        className="w-full my-3 border-blue-400 border pl-2 text-blue-400 rounded-md h-[40px] outline-none"
      />
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            setState(2);

            setUser({
              userName,
              email,
              password,
              bio: user.bio,
            });
          }}
          className="px-7 py-2 bg-slate-700 rounded text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const StepII = () => {
  const [state, setState] = useJotaiState();
  console.log(state);
  const [user, setUser]: any = useMainUserRegister();
  const [bio, setBio] = useState<string>(user.bio);

  return (
    <div className="w-[500px] rounded-md h-[300px] border-blue-400 border-[2px] p-3">
      <div className="w-full flex justify-center items-center">
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-white text-[20px] flex justify-center items-center bg-blue-400">
          1
        </div>
        <hr className="w-[100px] mx-2 border-[2px] border-blue-400" />
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-white text-[20px] flex justify-center items-center bg-blue-400">
          2
        </div>
        <hr className="w-[100px] mx-2 border-[2px] border-blue-400" />
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-[20px] flex justify-center items-center text-blue-400">
          3
        </div>
      </div>
      <textarea
        value={bio}
        onChange={(e: any) => setBio(e.target.value)}
        placeholder="enter your bio"
        className="w-full mt-3 pt-2 resize-none border-blue-400 border pl-2 text-blue-400 rounded-md h-[165px] outline-none"
      />

      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            setState(1);
          }}
          className="px-7 py-2 mr-2 bg-slate-700 rounded text-white"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setState(3);
            setUser({
              email: user.email,
              password: user.password,
              userName: user.userName,
              bio: bio,
            });
          }}
          className="px-7 py-2 bg-blue-500 rounded text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const StepIII = () => {
  const [state, setState] = useJotaiState();
  console.log(state);
  const [user, setUser]: any = useMainUserRegister();
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");
  const [imageData, setImageData] = useState<string>("");
  const formData = new FormData();

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setImageData(file);
  };
  return (
    <div className="w-[500px] rounded-md h-[300px] border-blue-400 border-[2px] p-3">
      <div className="w-full flex justify-center items-center">
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-[20px] flex justify-center items-center text-white bg-blue-400">
          1
        </div>
        <hr className="w-[100px] mx-2 border-[2px] border-blue-400" />
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-[20px] flex justify-center items-center text-white bg-blue-400">
          2
        </div>
        <hr className="w-[100px] mx-2 border-[2px] border-blue-400" />
        <div className="w-[50px] h-[50px] border-[3px] border-blue-400 rounded-full text-[20px] flex justify-center items-center text-white bg-blue-400">
          3
        </div>
      </div>
      <div className="w-full h-[160px] my-3 border relative">
        <img
          src={image === "" ? reactImg : image}
          className="w-full h-full object-cover"
        />
        <input
          type="file"
          onChange={onHandleImage}
          className="hidden"
          id="pix"
        />
        <label
          htmlFor="pix"
          className="w-[50px] bg-blue-400 rounded-full bottom-2 cursor-pointer right-2 text-[20px] absolute h-[50px] flex justify-center items-center"
        >
          <FaCamera />
        </label>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            setState(2);
          }}
          className="px-7 mr-2 py-2 bg-slate-700 rounded text-white"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setState(1);

            setUser({
              bio: user.bio,
              userName: user.userName,
              password: user.password,
              email: user.email,
              avatar: image,
            });

            formData.append("avatar", imageData);
            formData.append("bio", user.bio);
            formData.append("userName", user.userName);
            formData.append("email", user.email);
            formData.append("password", user.password);

            registerUserAPI(formData).then(() => {
              navigate("/sign-in");
            });
          }}
          className="px-7 py-2 bg-blue-500 rounded text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
