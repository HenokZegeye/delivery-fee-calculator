import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeliveryFeeCalcComponent from './delivery-fee-calc.component';

Enzyme.configure({adapter: new Adapter()});

describe('<DeliveryFeeCalcComponent/>', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<DeliveryFeeCalcComponent />);
    });


    it('renders correctly', () => {
        shallow(<DeliveryFeeCalcComponent />);
    });

    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should have one paragraph to display the calculated price', () => {
        expect(wrapper.find('p').length).toEqual(1);
    });

    it('should have the delivery form component', () => {
        expect(wrapper.find('DeliveryFeeCalcForm').length).toEqual(1);
    });

    it('should display the delivery price', () => {
        expect(wrapper.find('p').text()).toBe('Delivery Price: 2€');
    });

});

