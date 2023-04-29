let myFavorites = [];

const postFav = (req, res) => {
  try {
    const char = req.body;

    const characterFound = myFavorites.find((fav) => fav.id === char.id);

    if (characterFound) throw Error("El personaje ya existe en favoritos");

    myFavorites.push(char);
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
