import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // json으로 변환하는 방법은 2가지가 있는데 밑의 코드방법이 실무에서 많이 쓰인다. 이 코드를 외우기로 하자.
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            // mpa함수는 () => () 소괄호를 쓴다.
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt="IMG" />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              {/* hasOwnProperty함수를 사용해 해당 객체키가 있는지 확인을 해야한다. 확인을 안하면 객체키가 없는 경우에 에러가 발생한다. */}
              {movie.hasOwnProperty("genres") ? (
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
