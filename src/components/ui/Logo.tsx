import _ from "react";

const Logo = () => {
    return (
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/wolt-logo.jpeg'} alt="Logo" />
      </div>
    )
}

export default Logo;