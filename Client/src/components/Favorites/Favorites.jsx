import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "./favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true); //!aux
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.container}>
      <div>
        <h2 className={style.tittle}>Favorites:</h2>
        <select name="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter}>
          <option value="allCharacters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        {favorites.map(({ name, species, gender, image, id }) => {
          return (
            <Card
              name={name}
              species={species}
              gender={gender}
              image={image}
              key={id}
              id={id}
              // onClose={() => onClose(id)}
            />
          );
        })}
      </div>
      <div className={style.contLink}>
        <Link to={"/home"} className={style.link}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
