import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// 링크를 걸어 해당페이지로 이동하는 방법은 일반적인 HTML에서는 <a href=''>를 이용하면된다. 그러나 새로고침이 되기때문에 새로고침을 사용하지 않으려고 React를 사용하면 그 장점이 사라진다. 그래서 Route에 있는 Link를 이용하면 새로고침 없이도 사이트로 이동할 수 있다.

function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt="IMG" />
      <h2>
        <Link to="./movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}
Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
