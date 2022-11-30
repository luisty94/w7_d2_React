import Film from "./Film";
import "./FilmList.css";

const FilmList = ({allFilms, title}) => {


    const filmNodes = allFilms.map( (film) => {
        return <Film key={film.id} filmObj={film}/>
    });
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {filmNodes}
            </ul>
        </>
    );
}

export default FilmList;