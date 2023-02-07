import React from "react";
import { useClient } from "../client";

export type Error = {
  message: string;
};

export type User = {
  uid: string;
  email?: string | null;
};

export type AuthHooks = {
  useAuthAction(): {
    loginWithEmail: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  };
};

export const AuthHooksContext = React.createContext<AuthHooks | null>(null);

export const useAuthAction: AuthHooks["useAuthAction"] = () => {
  const client = useClient(AuthHooksContext);
  return client.useAuthAction();
};