import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'
const Movie = ({id, medium_cover_image, title, year, summary, genres}) => {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={medium_cover_image} alt=''/>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length >235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
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