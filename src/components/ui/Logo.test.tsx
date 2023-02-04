import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from "react";
import Logo from "./Logo";

Enzyme.configure({adapter: new Adapter()});

const logopath = process.env.PUBLIC_URL + '/wolt-logo.jpeg';

describe('<Logo/>', () => {
    it('renders Wolt logo', () => {
        const logo = shallow(<Logo path={logopath}/>);
        expect(logo.find("img").prop("src")).toEqual(logopath);
    });
});