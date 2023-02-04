import _ from "react";
import Button from '../ui/Button';

interface IProps {
    onSubmit: any;
    onInputChange: any;
}

const DeliveryFeeCalcForm = ({onSubmit, onInputChange}: IProps) => {
    return (
        <div >
            <form onSubmit={onSubmit}>
            <div className="form-item">
              <label htmlFor="Cart Value" className='form-label'>Cart Value</label>
              <div className="flex-start">
                <span className="unit">€</span>
                <input type="number" 
                       name='cart_value' 
                       placeholder='Enter Cart Value' 
                       onChange={onInputChange} 
                       className="form-control no-border-left" 
                       required/>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="Delivery Distance" className='form-label'>Delivery Distance</label>
              <div className="flex-start">
                <span className="unit">m</span>
                <input type="number" 
                       name='delivery_distance' 
                       placeholder="Enter Delivery Distance" 
                       onChange={onInputChange} 
                       className="form-control no-border-left" 
                       required/>
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="Amount of Items" className='form-label'>Amount of Items</label>
              <input type="number" 
                     name='amount_of_items' 
                     placeholder="Enter Amount of Items" 
                     onChange={onInputChange} 
                     className="form-control" 
                     required/>
            </div>
            <div className="form-item">
              <label htmlFor="Order Time" className='form-label'>Order Time</label>
              <input type="datetime-local" 
                     name='date' 
                     onChange={onInputChange} 
                     className="form-control" 
                     required/>
            </div>
            <div className="form-item">
              <Button label='Calculate Delivery Price'/>
            </div>
        </form>
        </div>
    )
}

export default DeliveryFeeCalcForm;