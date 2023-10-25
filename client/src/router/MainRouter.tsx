import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/screen/HomeScreen";
import RegisterPage from "../pages/auth/RegisterPage";
import SignInPage from "../pages/auth/SignInPage";
import PrivateRoute from "./PrivateRoute";
import LayOut from "../components/common/LayOut";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <LayOut />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);
