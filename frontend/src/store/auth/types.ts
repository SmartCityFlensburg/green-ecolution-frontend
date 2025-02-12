import { ClientToken } from "@green-ecolution/backend-client";

type AuthState = {
  isAuthenticated: boolean;
  token: ClientToken | null;
};

type AuthActions = {
  setIsAuthenticated: (auth: boolean) => void;
  setToken: (token: ClientToken) => void;
  clear: () => void;
};

export type AuthStore = AuthState & AuthActions;

