import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () =>
{
  const { transactiions } = useContext( GlobalContext );
  console.log( transactiions );

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className='list'>
        { transactiions.map( transactiion => (
          <Transaction key={ transactiion.id } transaction={ transactiion } />
        ) ) }
      </ul>
    </div>
  )
}
