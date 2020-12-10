import React, { useReducer } from 'react';
import { INotification } from 'types';

export const AUTH_CHECKED = 'AUTH_CHECKED';
export const ENABLE_DARK_MODE = 'ENABLE_DARK_MODE';
export const DISABLE_DARK_MODE = 'DISABLE_DARK_MODE';
export const NOTIFY = 'NOTIFY';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

interface IAppState {
  darkMode?: boolean;
  notification?: INotification;
  authLoading?: boolean;
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    darkMode: false,
    notification: {},
    authLoading: true,
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
    case AUTH_CHECKED:
      return { ...state, authLoading: false };
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
    case NOTIFY:
      return {
        ...state,
        notification: action.data?.notification,
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: {},
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
