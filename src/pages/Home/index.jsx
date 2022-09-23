import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';

import { similars } from '../../utils/image';

import { flexbox } from '@mui/system';
import MyCarousel from '../../components/MyCarousel';



const Home = () => {

    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            setOpen(true);
        }
    }, []);
    return (
        <>
            <BaseLayout>
                <Box >
                    <Container >
                        <MyCarousel props={similars} />
                    </Container>
                </Box>
            </BaseLayout>

        </>
    );
};

export default Home;