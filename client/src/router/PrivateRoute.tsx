import { FC, PropsWithChildren } from "react";

import { useSignInToken, usemainStateData } from "../global/Jotai";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [token] = useSignInToken();
  const [state, setState] = usemainStateData();

  if (token) {
    const decode: any = jwtDecode(token);
    setState(decode.id);
  }

  console.log(state);
  return <>{state ? <>{children}</> : <Navigate to={`/sign-in`} />}</>;
};

export default PrivateRoute;
