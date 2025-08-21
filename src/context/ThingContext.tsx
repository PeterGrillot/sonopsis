"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ThingContextProps = {
  currentUser: boolean;
  login: (email: string, password: string) => void;
};

const ThingContext = createContext<ThingContextProps | null>(null);

export function useThing() {
  return useContext(ThingContext);
}

export function ThingProvider({ children }: React.PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState(false);

  function login(email: string, password: string) {
    return setCurrentUser(true);
  }

  const value = {
    currentUser,
    login,
  };

  return (
    <ThingContext.Provider value={value}>{children}</ThingContext.Provider>
  );
}

export const useThingContext = () => {
  const context = useContext(ThingContext);
  if (!context) {
    throw new Error("context not provided in scope");
  }
  return context;
};
