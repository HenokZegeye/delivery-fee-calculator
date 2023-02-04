import _ from "react";

interface IProps {
  path: string;
}

const Logo = ({path}: IProps) => {
    return (
      <div className="logo">
        <img src={path} alt="Logo" />
      </div>
    )
}

export default Logo;