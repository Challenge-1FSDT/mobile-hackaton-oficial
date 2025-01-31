import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IToken{
    token: string,
    refreshToken: string,
    setToken: (token: string) => void
    setRefreshToken: (token: string) => void
}

const AuthContext = createContext<IToken | null>(null);

export default function AuthProvider({children}: Readonly<{children: ReactNode}>) : JSX.Element{
  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");

  return (
    <AuthContext.Provider value={{token, 
                                  setToken, 
                                  refreshToken, 
                                  setRefreshToken}}>
        {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const contexto = useContext(AuthContext);

  if(!contexto){
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return contexto;

}

