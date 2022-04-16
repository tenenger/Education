import { useEffect } from "react";
import { useParams } from "react-router-dom";
// id라는 변수는 useParams로 받을 수 있다.
function Detail() {
  // const x = useParams();
  // console.log(x);
  // {id: 숫자~~}로 콘솔창에 띄워줌으로써 우리는 movie.id값을 받을 수 있다.
  // 그리고 지정한 변수로 변수명을 지정해주면 바로 id값을 받을 수 있다.
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
// id에 해당되는 영화 데이터 가져오는 순서
// 1. useParams로 App.js의 path경로에 지정한 변수(id)를 변수로 지정한다.
// 2. useEffect로 영화데이터를 한번만 가져온다.
// 3. 영화데이터를 가져오는 함수는 async(), await, fetch, json, 벡터를 이용해 가져온다.
export default Detail;
