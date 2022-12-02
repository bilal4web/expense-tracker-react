import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) =>
{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function delTransaction (id)
  {
    dispatch(
      {
        type: 'DELETE_TRANSACTION',
        payload: id
      }
    );
  }

  function addTransaction (transactiion)
  {
    dispatch(
      {
        type: 'ADD_TRANSACTION',
        payload: transactiion
      }
    );
  }

  return (
    <GlobalProvider value={
      {
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }
    }>
      {children}

    </GlobalProvider>
  );
};