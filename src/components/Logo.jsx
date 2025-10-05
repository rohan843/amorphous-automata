import logo from "../assets/logo.png";
import classNames from "classnames";

function Logo({ classname }) {
  return (
    <div className={classNames("logo-container", classname)}>
      <img src={logo} alt="Logo" className="logo-image" />
    </div>
  );
}

export default Logo;
