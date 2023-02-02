import React from "react";

export function useClient<T>(context: React.Context<T | null>): T {
  const client = React.useContext(context);
  if (!client) {
    throw new Error("client error");
  }
  return client;
}