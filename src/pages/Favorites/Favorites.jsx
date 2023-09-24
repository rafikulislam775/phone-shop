import { useEffect, useState } from "react";

import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setisShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
    // console.log(typeof favoriteItem);//object
    if (favoriteItem) {
      setFavorites(favoriteItem);
      const total = favoriteItem.reduce(
        (preValue, curValue) => preValue + curValue.price,
        0
      );
      // console.log(total);
      setTotalPrice(total);
    } else {
      setNoFound("no-found");
    }
  }, []);
  console.log(favorites);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("no-found");
    setTotalPrice(0);
  };
  // console.log(isShow);

  return (
    <div>
      <h2>total Price:{totalPrice}</h2>
      {favorites.length > 0 && (
        <button onClick={handleRemove} className="btn btn-primary">
          {}
          DELETE all
        </button>
      )}
      {noFound ? (
        <p>NO data Found</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {isShow
              ? favorites.map((phone) => (
                  <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                ))
              : favorites
                  .slice(0, 4)
                  .map((phone) => (
                    <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                  ))}
          </div>
          {favorites.length > 4 && (
            <button onClick={() => setisShow(!isShow)} className="btn">
              {isShow ? "see less" : "see more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
