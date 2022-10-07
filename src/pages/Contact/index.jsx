

import BaseLayout from '../../layouts/BaseLayout';
import { Box } from '@mui/material';
import Lister from '../../containers/CardDetails/List';
import ImageCarousel from '../../components/ImageCarousel';





const Contact = () => {
    return (
        <Box >
            <BaseLayout />
            <Box sx={{ width: '500px', height: '750px', p: 5 }}>
                <ImageCarousel />

            </Box>

        </Box>
    );
};
export default Contact;