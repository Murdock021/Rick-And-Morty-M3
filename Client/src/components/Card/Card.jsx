import style from "./card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { agregarFav, eliminarFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.eliminarFav(props.id);
    } else {
      setIsFav(true);
      props.agregarFav(props);
    }
  };

  const myfavorites = props.myFavorites;

  useEffect(() => {
    myfavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myfavorites]);

  return (
    <div className={style.card}>
      <div className={style.contButt}>
        {isFav ? (
          <button onClick={handleFavorite} className={style.fav}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={style.fav}>
            🤍
          </button>
        )}
        <img src={props.image} alt={props.name} />
        <button onClick={props.onClose} className={style.button}>
          X
        </button>
      </div>
      <div className={style.text}>
        <Link to={`/detail/${props.id}`} className={style.link}>
          <h2 className={style.name}>Name: {props.name}</h2>
        </Link>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    agregarFav: (character) => {
      dispatch(agregarFav(character));
    },
    eliminarFav: (id) => {
      dispatch(eliminarFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
