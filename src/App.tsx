import React, { useState } from 'react';
import List from './components/List';
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string 
  }[]
}


function App() {
  const [numbers, setNumber] = useState(5);
  const [people, setPeople] = useState<IState["people"]>([
    {name: 'Abebe', age: 20, url: 'test'},
  ]);


  const onSubmit = () => {

  }

  const onChange = () => {

  }
  return (
    <div className='parent-div'>
      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="form-item">
            <label htmlFor="Cart Value" className='form-label'>Cart Value</label>
            <input type="number" placeholder='Enter Cart Value' onChange={onChange} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Delivery Distance" className='form-label'>Delivery Distance</label>
            <input type="number" placeholder="Enter Delivery Distance" onChange={onChange} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Amount of Items" className='form-label'>Amount of Items</label>
            <input type="number" placeholder="Enter Amount of Items" onChange={onChange} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Order Time" className='form-label'>Order Time</label>
            <input type="date" onChange={onChange} className="form-control" required/>
          </div>
          <div className="form-item">
            <button className='btn'>Calculate Delivery Price</button>
          </div>
        </form>
        <p className="form-item">Delivery Price: 2€</p>
      </div>
    </div>
  );
}

export default App;
