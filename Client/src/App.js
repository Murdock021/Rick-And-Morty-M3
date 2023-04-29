import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

const URL = "http://localhost:3001/rickandmorty/login/";
function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = 'diogomachadocmb@gmail.com'
  const password = '123abc'

  const onSearch = async (character) => {
    try {
      const URL_BASE = `http://localhost:3001/rickandmorty/character/${character}`;

      if (characters.find((char) => char.id === character)) {
        return alert("Personaje repetido");
      }

      const { data } = await axios(URL_BASE);
      if (data.name) setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      return window.alert("Algo salio mal");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className={style.App}>
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

/*
Extras a hacer!

------> Controlar que no se puedan agregar personajes repetidos.

Generar un botón en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).

Ahora te desafiamos a que crees un nuevo componente llamado **Error**. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404.
El desafío es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "`/home`" y "`/about`", y el usuario en el navegador escribe y "`/henry`", debería mostrar el error 404.

Si se vuelve a cargar el form access debe ser false. 
Logout button. 
Arreglar validaciones.

Terminar Estilos favorites.jsx y form.jsx


*/
