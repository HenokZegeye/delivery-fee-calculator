import React, { useState, useReducer } from 'react';
import './App.css';

const BULK_FEE = 1.20;

const formReducer = (state: any, {target}: any) => {
  return {
    ...state,
    [target.name]: target.value
  }
}


function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [deliveryPrice, setDeliveryPrice] = useState(2);

  const isFridayRush = (date: Date) => {
    const utchour = ((new Date(date).getUTCHours()) + 24) % 12;
    const utcday = new Date(date).getDay();
    return utcday === 5 && (utchour >= 3 && utchour <= 7);
  }

  const get_distance_fee = (distance: number): number => {
    return distance <= 1000 ? 2 : Math.ceil(distance/500);
  }

  const get_num_items_fee = (amount_of_items: number): number => {
    let surcharge_num_items = 0;
    if(amount_of_items >= 5){
      const additional = 0.5*((amount_of_items - 5)+1);
      surcharge_num_items = amount_of_items > 12 ?  additional + BULK_FEE: additional; 
    }
    return surcharge_num_items;
  }

  const get_small_orders_fee = (cart_value: number): number => {
    return cart_value < 10 ? 10 - cart_value : 0;
  }

  const get_fridayrush_fee = (isFridayRush: boolean, total_fee: number) => {
    return isFridayRush ? 1.2 * total_fee : total_fee;
  }

  const calculatFee = ({delivery_distance, amount_of_items, cart_value, date}: any) => {
    const distance_fee = get_distance_fee(delivery_distance);
    const num_items_fee = get_num_items_fee(amount_of_items);
    const small_orders_fee = get_small_orders_fee(cart_value);
    const total_fee = distance_fee + num_items_fee + small_orders_fee;
    return cart_value < 100 ? Math.min(15, get_fridayrush_fee(isFridayRush(date), total_fee)) : 0;
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    const payload = {...formData, date: new Date(formData.date).toISOString()};
    setDeliveryPrice(calculatFee(payload));    
  }

  return (
    <div className='parent-div'>
      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="form-item">
            <label htmlFor="Cart Value" className='form-label'>Cart Value</label>
            <div className="flex-start">
              <span className="unit">€</span>
              <input type="number" name='cart_value' placeholder='Enter Cart Value' onChange={setFormData} className="form-control no-border-left" required/>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="Delivery Distance" className='form-label'>Delivery Distance</label>
            <div className="flex-start">
              <span className="unit">m</span>
              <input type="number" name='delivery_distance' placeholder="Enter Delivery Distance" onChange={setFormData} className="form-control no-border-left" required/>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="Amount of Items" className='form-label'>Amount of Items</label>
            <input type="number" name='amount_of_items' placeholder="Enter Amount of Items" onChange={setFormData} className="form-control" required/>
          </div>
          <div className="form-item">
            <label htmlFor="Order Time" className='form-label'>Order Time</label>
            <input type="datetime-local" name='date' onChange={setFormData} className="form-control" required/>
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
