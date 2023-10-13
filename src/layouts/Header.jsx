import { Link } from "react-router-dom";
import Logo from "../assets/pokemon-logo.png";

function Header() {
  return (
    <header className="w-full flex justify-center py-4 px-10 border-b-[1px] border-gray-300">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-[100px]" />
        {/* Pokemon */}
      </Link>
      <div></div>
    </header>
  );
}

export default Header;
