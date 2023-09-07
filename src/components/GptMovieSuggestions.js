import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  // { Shimmer UI }

  return <div className="p-4 m-4 bg-black text-white bg-opacity-90">
    <div>
      {movieNames.map((movieName, i) => <MovieList key={movieName} title={movieName} movies={movieResults[i]} />)}
    </div>
  </div>;
};

export default GptMovieSuggestions;
