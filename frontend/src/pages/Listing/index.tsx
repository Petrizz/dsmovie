import axios from "axios";
import MovieCard from "componentes/MovieCard";

import Pagination from "componentes/Pagination";

import { useEffect, useState } from "react";

import { MoviePage } from "types/movie";

import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    //usando para ser realizado apenas quando carregar a pagina
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);


        });
    }, [pageNumber]);//esse pageNumber faz com que quando ele for mudado faça a requisição novamente


    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber)
    };

    return (
        <>
            <Pagination page ={page}  onChange = {handlePageChange}/>

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key ={movie.id} className="col-sn-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}



                </div>
            </div>

        </>
    );
}
export default Listing;