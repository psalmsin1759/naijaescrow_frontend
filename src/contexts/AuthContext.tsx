"use client";
import { User } from "@/lib/types";
import React, { createContext, useContext, useEffect, useState } from "react";


type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (user: User, token: string, remember?: boolean) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // hydrate from localStorage or sessionStaorage
    const saved =
      localStorage.getItem("auth") || sessionStorage.getItem("auth");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed.user);
        setToken(parsed.token);
      } catch (e) {
        console.warn("Failed to parse auth storage", e);
      }
    }
    setLoading(false);
  }, []);

  const login = (u: User, t: string, remember = false) => {
    setUser(u);
    setToken(t);
    const payload = JSON.stringify({ user: u, token: t });
    if (remember) localStorage.setItem("auth", payload);
    else sessionStorage.setItem("auth", payload);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
    sessionStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used inside AuthProvider");
  return ctx;
};
