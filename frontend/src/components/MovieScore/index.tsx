import MovieStars from "components/MovieStars";
//import { Movie } from "types/movie";

//import { Movie } from "types/movie";

//import { movie } from "types/movie";
import './styles.css';

type Props = {
    score: number;
    count: number;
    }


function Moviescore({score, count}: Props) {

    

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars   score={score}  />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default Moviescore;