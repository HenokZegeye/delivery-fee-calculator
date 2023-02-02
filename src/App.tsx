import React, { useState, useReducer } from 'react';
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string 
  }[]
}

const formReducer = (state: any, {target}: any) => {
  return {
    ...state,
    [target.name]: target.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [deliveryPrice, setDeliveryPrice] = useState(2);

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
    
  }

  return (
    <div className='parent-div'>
      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="form-item">
            <label htmlFor="Cart Value" className='form-label'>Cart Value</label>
            <input type="number" name='cart_value' placeholder='Enter Cart Value' onChange={setFormData} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Delivery Distance" className='form-label'>Delivery Distance</label>
            <input type="number" name='delivery_distance' placeholder="Enter Delivery Distance" onChange={setFormData} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Amount of Items" className='form-label'>Amount of Items</label>
            <input type="number" name='amount_of_items' placeholder="Enter Amount of Items" onChange={setFormData} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Order Time" className='form-label'>Order Time</label>
            <input type="datetime" name='date' onChange={setFormData} className="form-control" required/>
          </div>
          <div className="form-item">
            <button type='submit' className='btn'>Calculate Delivery Price</button>
          </div>
        </form>
        <p className="form-item">Delivery Price: {deliveryPrice}€</p>
      </div>
      
    </div>
  );
}

export default App;
