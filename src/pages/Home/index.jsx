import { useEffect, useState } from 'react';
import { Box, Container, LinearProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';

import { posterImages } from '../../utils/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import 'swiper/css';
import useQuery from '../../hooks/useQuery';
const Home = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            setOpen(true);
        }
    }, []);

    return (

        <Box >
            <BaseLayout />
            <Swiper
                centeredSlides={true}
                effect="coverflow"
                spaceBetween={0}
                slidesPerView={2}
                autoplay={{
                    Delay: 50,
                    DisableOnInteraction: false
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination, A11y]}
            >
                {
                    posterImages.map((item) => {
                        return <SwiperSlide key={item.id} sx={{ height: '100%' }} >
                            <img className='poster' src={item.image} alt="" />
                        </SwiperSlide>;
                    })
                }
            </Swiper>


        </Box>
    );

};

export default Home;