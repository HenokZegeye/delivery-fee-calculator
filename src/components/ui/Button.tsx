import _ from "react";

interface IProps {
    label: string;
}

const Button = ({label}: IProps) => {
    return (
        <button className='btn'>{label}</button>
    )
}

export default Button;