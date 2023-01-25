import { FC } from "react";
import LogInPage from "../components/page/Login";
  
export type routesWithRedirectType = {
    path: string;
    to: string;
  }[];
  
export type routesType = {
    path: string;
    component: FC;
  }[];
  
  const routesWithRedirect: routesWithRedirectType = [
    {
      path: "/",
      to: "/login",
    },
  ];

const routes: routesType = [
    {
      path: "/login",
      component: LogInPage,
    }
  ];

  export { routes,routesWithRedirect };