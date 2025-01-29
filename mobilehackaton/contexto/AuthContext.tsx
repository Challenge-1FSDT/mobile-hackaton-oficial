import React, { createContext } from 'react';

interface dtoToken{
    token: string,
    refreshToken: string,
}

const AuthContext = createContext<dtoToken>({
    token: "",
    refreshToken: "",
  });

export default AuthContext;