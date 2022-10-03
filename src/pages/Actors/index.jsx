import BaseLayout from '../../layouts/BaseLayout';
import useQuery from '../../hooks/useQuery';
import { Box, Grid, LinearProgress } from '@mui/material';
import ActorCards from "../../components/ActorCards";

const Actors = () => {
    const { data, errors, isLoading } = useQuery('http://localhost:8000/api/makers/');
    if (isLoading) {
        return (
            <Box >
                <Box>
                    <LinearProgress />
                </Box>
            </Box>
        );
    }
    if (data) {
        const makers = data.rows;
        let makersList = [];
        makers.forEach(element => {

            if (element.image !== 'https://imdb-api.com/images/original/nopicture.jpg') {

                makersList.push(element);

            }


        });
        return (
            <>
                <Box sx={{ marginTop: '5vh' }} />
                <Box sx={{ flexGrow: 1, margin: 5 }}>
                    <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 20 }}>
                        {
                            makersList.map((item) => {
                                return (
                                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={item.id}>
                                        <ActorCards props={item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <BaseLayout />
                </Box>
            </>
        );
    }

};

export default Actors;