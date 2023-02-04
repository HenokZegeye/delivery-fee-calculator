import _, { ReactNode } from "react";

interface IProps {
    childern: ReactNode;
}

const Wrapper = ({children}: any) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
}

export default Wrapper;