import { similars, items } from "../../utils/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import 'swiper/css';
import "./TvShow.css";
import BaseLayout from '../../layouts/BaseLayout';
import { Box, Grid, LinearProgress } from "@mui/material";

import useQuery from "../../hooks/useQuery";
import Media from "../../components/Media";



const TvShows = () => {
    const { data, errors, isLoading } = useQuery('http://localhost:8000/api/medias/');


    if (isLoading) {
        return (
            <Box>
                <BaseLayout />
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            </Box>
        );
    }

    if (data) {
        const mediasList = data.rows;
        let medias = []
        mediasList.forEach(element => {
            if (element.media_type !== 'Movie') {
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
                                        <Media props={item} />
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

export default TvShows;
