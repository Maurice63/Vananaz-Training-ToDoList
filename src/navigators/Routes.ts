import { FC } from "react";
import LogInPage from "../components/page/Login";
import ToDoListPage from "../components/page/ToDoList";
  
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
  const protectedRoutes: routesType = [
    {
      path: "/home",
      component: ToDoListPage,
    }
  ];

  export { routes,routesWithRedirect,protectedRoutes };