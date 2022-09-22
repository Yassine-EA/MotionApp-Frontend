import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';


import { flexbox } from '@mui/system';


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
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Container sx={{ display: 'flex', justifyItems: 'center', flexDirection: 'column', gap: '30px' }}>
                        <h1>Page Home </h1>
                    </Container>



                </Box>
            </BaseLayout>

        </>
    );
};

export default Home;