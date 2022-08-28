import React from "react";

export const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export const defaultUser = {
  firstName: "Vitalii",
  lastName: "Dubinin",
  email: "s2200119@edu.bc.cfi",
  image: "//s.gravatar.com/avatar/83cdb244a8a065a5e54c810751bbe5ca",
};
