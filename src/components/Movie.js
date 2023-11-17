import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Movie = ({id, medium_cover_image, title, summary, genres}) => {
  return (
    <div>
      <img src={medium_cover_image}/>
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.proTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;