import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInToken } from "../../global/Jotai";
import { signInAPI } from "../../api/API";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [state, setState] = useSignInToken();
  console.log(state)
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[500px] rounded-md h-[300px] border-blue-400 border-[2px] p-3">
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
                signInAPI({ email, password })
                  .then((res: any) => {
                    setState(res);
                  })
                  .then(() => {
                    navigate("/");
                  });
              }}
              className="px-7 py-2 bg-slate-700 rounded text-white"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
