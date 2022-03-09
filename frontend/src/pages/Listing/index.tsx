import Pagination from "assets/components/Pagination";
import MovieCard from "assets/components/MovieCard";

function Listing (){
    return (
        <>
        <Pagination />

    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-x1-3 mb=3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-x1-3 mb=3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-x1-3 mb=3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-x1-3 mb=3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-x1-3 mb=3">
                <MovieCard />
            </div>
        </div>
    </div>

        

        </> 
    );
}

export default Listing;
