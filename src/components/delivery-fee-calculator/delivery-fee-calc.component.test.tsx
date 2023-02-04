import { render } from '@testing-library/react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DeliveryFeeCalcComponent from './delivery-fee-calc.component';

Enzyme.configure({adapter: new Adapter()});

describe('<DeliveryFeeCalcComponent/>', () => {
    let wrapper: any;
    const setDeliveryPrice = jest.fn();
    const useStateMock: any = ((deliveryPrice: any) => [deliveryPrice, setDeliveryPrice]);
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    beforeEach(() => {
        wrapper = shallow(<DeliveryFeeCalcComponent />);
    });

    it('calls setDeliveryPrice total calculated fee', () => {

    });

});

