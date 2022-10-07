
import 'swiper/css';
import "./Movies.css";
import * as React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";

import useQuery from "../../hooks/useQuery";
import Media from "../../components/Media";
import { Link } from 'react-router-dom';




const Movies = () => {
    const { data, errors, isLoading } = useQuery('http://localhost:8000/api/medias/');


    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', flexDirection: 'column' }}>
                <BaseLayout />
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </Box>
        );
    }

    if (data) {
        const mediasList = data.rows
        let medias = []
        mediasList.forEach(element => {
            if (element.media_type === 'Movie') {
                medias.push(element);
            }
        });
        return (
            <>
                <Box sx={{ marginTop: '5vh' }} />
                <Box sx={{ flexGrow: 1, margin: 5 }}>
                    <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 20 }}>
                        {
                            medias.map((item) => {
                                return (
                                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={item.id}>
                                        <Typography component={Link} to={`/movies/detail/${item.id_media}`} >
                                            <Media props={item} />
                                        </Typography>
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
export default Movies;
