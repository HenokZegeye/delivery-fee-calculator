import _, { useState, useReducer } from "react";
import { calculatFee } from "../../services/delivery-fee-calculator.service";
import DeliveryFeeCalcForm from "../forms/delivery-fee-calc-form";
import Card from "../ui/Card";
import Logo from "../ui/Logo";

const LOGO_PATH = process.env.PUBLIC_URL + '/wolt-logo.jpeg';

const formReducer = (state: any, {target}: any) => {
  return {
    ...state,
    [target.name]: target.value
  }
}


const DeliveryFeeCalcComponent = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [deliveryPrice, setDeliveryPrice] = useState(2);
  
    const onSubmit = (event: any) => {
      event.preventDefault();
      const payload = {...formData, date: new Date(formData.date)?.toISOString()};
      setDeliveryPrice(calculatFee(payload));    
    }

    return (
        <div className='wrapper'>
            <Logo path={LOGO_PATH}/>
            <Card>
                <DeliveryFeeCalcForm onSubmit={onSubmit} onInputChange={setFormData}/>
                <p className="form-item">Delivery Price: {deliveryPrice}€</p>
            </Card>
        </div>
    )
}

export default DeliveryFeeCalcComponent;