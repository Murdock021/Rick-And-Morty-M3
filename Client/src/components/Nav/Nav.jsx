import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className={style.nav}>
      <div className={style.buton}>
        <Link to={"/home"} className={style.ln}>
          Home
        </Link>
      </div>
      <div className={style.buton}>
        <Link to={"/about"} className={style.ln}>
          About
        </Link>
      </div>
      <div className={style.buton}>
        <Link to={"/favorites"} className={style.ln}>
          Favorites
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
      <div className={style.buton}>
        <Link to={"/"} onClick={handleLogOut} className={style.ln}>
          LOG OUT
        </Link>
      </div>
    </div>
  );
};

export default Nav;
