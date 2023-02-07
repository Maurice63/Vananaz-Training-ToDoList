import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { selectUser } from "../redux/features/User";

type AuthRouteProps = {
  children: ReactNode;
};

const AuthRoutes = ({ children }: AuthRouteProps) => {
  const { uid } = useSelector(selectUser);
  console.log(uid);
  if (uid === "") {
    return <Redirect to="/login" />;
  } else return <>{children}</>;
};

export default AuthRoutes;
