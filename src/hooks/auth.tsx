import React, { createContext, useContext, useState } from "react";

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type authContextData = {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as authContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isSigningIn }}>
      {children}
    </AuthContext.Provider>
  );    
}
