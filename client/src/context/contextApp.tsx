import React, { createContext, PropsWithChildren, useReducer } from 'react';
import { DefaultContext, TAction, TDefaultContext } from './defaultContext';

const AppContext: React.Context<TDefaultContext> = createContext(DefaultContext);

const reducer = (state: TDefaultContext, action: TAction): TDefaultContext => {
  switch (action.type) {
    case 'setLocale':
      return { ...state, locale: action.locale };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, DefaultContext);
  const value = { locale: state.locale, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
