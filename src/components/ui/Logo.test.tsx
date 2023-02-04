import { render } from "@testing-library/react";
import _ from "react";
import Logo from "./Logo";

const logopath = process.env.PUBLIC_URL + '/wolt-logo.jpeg';

describe('<Logo/>', () => {
    it('renders Wolt logo', () => {
        const logo = render(<Logo path={logopath}/>);
    });
});