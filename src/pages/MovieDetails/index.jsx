import { useParams } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout";
import useQuery from "../../hooks/useQuery";
import CardDetails from "../../containers/CardDetails";
import { chainPropTypes } from "@mui/utils";
import { Box } from "@mui/system";



const MovieDetails = () => {

    const { data, errors, isLoading } = useQuery('http://localhost:8000/api/medias/');




    const { id } = useParams();
    let movie = {};




    if (data) {
        const movies = data.rows
        movies.forEach(element => {
            if (element.id_media == id) {
                movie = element;

            }

        });
    }

    return (
        <div>
            <Box sx={{ marginTop: '5vh' }} />
            <CardDetails props={movie}></CardDetails>


            <BaseLayout />
        </div>
    );

};

export default MovieDetails