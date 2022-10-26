import React from 'react'
import { useState, useEffect } from 'react'

const Search = () => {

    const [film, setFilm] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [strana, setStrana] = useState(1);

    // UseEffect Ucitava API podatke kad god se promeni search string
    useEffect(() => {
        getData();
        // console.log(film);
    }, [searchString]);

    // API Poziv
    const getData = () => {
        if (searchString !== '') {

            fetch(`http://www.omdbapi.com/?apikey=b1c7adef&s=${searchString}&page=${strana}`)
                .then((res) => res.json())
                .then((data) => {
                    setFilm(data.Search);
                })

        } else {
            setFilm([]);
        }
    }


    const formSubmit = (event) => {
        event.preventDefault();
        setSearchString(event.target.searchString.value);
        // console.log(event.target.searchString.value);
    }

    return (
        <div>
            <form onSubmit={(event) => formSubmit(event)}>
                <div className="input-group pt-2 pb-3">
                    <input name='searchString' type="text" className="form-control " placeholder="Search Movie..." aria-label="Movie name" aria-describedby="button-addon2" />
                    <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
                </div>
            </form>


            <div className="d-flex flex-wrap justify-content-center gap-4 pt-3 pb-5">

                {
                    film.map((element, idx) => {

                        return (

                            <div className="card text-bg-dark custopOpacity sirinaKartice"  >
                                <img src={element.Poster} className="card-img-top imgHeight" alt="..." />
                                <div className="card-body py-2">
                                    <h5 className="card-title m-0 ">{element.Title}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-bg-dark">Year: {element.Year}</li>
                                    <li className="list-group-item text-bg-dark">Genre: {element.Type}</li>
                                </ul>
                                <div className="card-body d-flex justify-content-between">
                                    <a href="#" className="card-link text-info">More Info</a>
                                    <button className='btn btn-outline-success btn-sm'>Add to list</button>
                                </div>
                            </div>





                        )
                    })
                }
            </div>

        </div>

    )
}

export default Search