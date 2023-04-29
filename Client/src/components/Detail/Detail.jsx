import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./detail.module.css";
import loading from "../../assets/loading.gif";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState("");

  useEffect(() => { 
    // const API_KEY = '56c6058834fd.f27c49183ca32fa9b84f';
    // fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
    //  const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const URL_BASE = `http://localhost:3001/rickandmorty/character/${detailId}`;
   
    fetch(URL_BASE)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      {character.name ? (
        <div>
          <div className={style.all}>
            <div className={style.data}>
              <h1 className={style.name}>Name: {character?.name}</h1>
              <h2 className={style.info}>Status: {character?.status}</h2>
              <h2 className={style.info}>Species: {character?.species}</h2>
              <h2 className={style.info}>Gender: {character?.gender}</h2>
              <h2 className={style.info}>Origen: {character?.origin?.name}</h2>
            </div>
            <div className={style.rigth}>
              <img src={character?.image} alt={character?.name} />
            </div>
          </div>
          <Link to="/home">
            <button className={style.button}>Home</button>
          </Link>
          <></>
        </div>
      ) : (
        <>
          <h3 className={style.loading}>Loading...</h3>
          <img className={style.img} src={loading} alt="Rick and Morty..." />
        </>
      )}
    </div>
  );
};
export default Detail;
