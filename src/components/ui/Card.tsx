import _, { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const Card = ({children}: IProps) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default Card;