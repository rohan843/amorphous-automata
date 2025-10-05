import logo from "../assets/logo.png";

function Logo({ classname }) {
  return (
    <div className={classname}>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
