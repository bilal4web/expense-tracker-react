import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () =>
{
  const [description, setDescription] = useState('');
  const [transactionamount, setTransactionAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) =>
  {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionamount: +transactionamount
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='description'>Name of Transaction</label>
          <input type='text' id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter name of the transaction.....' required />
        </div>
        <div className='form-control'>
          <label htmlFor='transactionamount'>Transaction Amount</label>
          <input type='text' id='transactionamount' value={transactionamount} onChange={(e) => setTransactionAmount(e.target.value)} placeholder='Enter transactiion amount....' required />
          <input type='radio' onClick={() => {transactionamount('+'.transactionamount);}}>Income</input>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};
