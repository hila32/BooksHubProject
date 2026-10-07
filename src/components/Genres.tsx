import { useState } from "react";

const Genres = () => {
  const [genres, setGenres] = useState([
    { id: 1, category: "men's clothing" },
    { id: 2, category: "women's clothing" },
    { id: 3, category: "jewelery" },
    { id: 4, category: "electronics" },
  ]);
  return (
    <div>
      {genres.map((g) => (
        <ul key={g.id}>{g.category}</ul>
      ))}
    </div>
  );
};

export default Genres;
