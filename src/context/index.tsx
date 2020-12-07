import React, { useReducer } from 'react';

export const ENABLE_DARK_MODE = 'ENABLE_DARK_MODE';
export const DISABLE_DARK_MODE = 'DISABLE_DARK_MODE';

interface IAppState {
  darkMode?: boolean;
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    darkMode: false,
  },
  dispatch: (_value: IAction<IAppState>) => null,
};
export interface IContext<T> {
  state: T;
  dispatch: React.Dispatch<IAction<T>>;
}
const AppContext = React.createContext(initialState);
const reducer = (state: IAppState, action: IAction<IAppState>): IAppState => {
  switch (action.type) {
    case ENABLE_DARK_MODE:
      return {
        ...state,
        darkMode: true,
      };
    case DISABLE_DARK_MODE:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
};

interface IContextProvider {
  children: any;
}

const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, ContextProvider };
