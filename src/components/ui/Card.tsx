import _, { ReactNode } from "react";

interface IProps {
    childern: ReactNode;
}

const Card = ({children}: any) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default Card;