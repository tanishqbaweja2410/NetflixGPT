import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API Call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give names of 5 movies, comma separated like the example result given ahead. Example : Don, 3 Idiots, Sholay, Gadar, Dhoom";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      {
        /*todo : write error handling*/
      }
    }

    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    // console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
