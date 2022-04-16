import PropTypes from "prop-types";
function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt="IMG" />
      <h2>{title}</h2>
      <p>{summary}</p>
      {/* 에러를 발생하는지 확인하는 방법 두번째 &&를 넣어서 genres가 있는 경우에만 실행되게 한다. */}
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}
// Movie 함수의 props의 타입을 정해주었다. 특히 genres는 배열이어서 arrayOf()를 사용하고, 배열안의 타입도 정해주어야해서 PropTypes.string를 넣어주었다.
// 참고로 prop-types는 터미널에서 설치를 해줘야 사용할 수 있다.
// npm install -save prop-types
Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
