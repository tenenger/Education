import PropTypes from "prop-types";
// url로 이동시키려면 react router가 필요하다. 사용하기 전에 설치를 해야하는데, 터미널에 npm install react-router-dom을 입력하여 설치된다.
function Moive({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt="IMG" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}
Moive.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Moive;
