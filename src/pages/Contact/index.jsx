

import GenreSelector from '../../containers/Selector';
import BaseLayout from '../../layouts/BaseLayout';
import CardDetails from '../../containers/CardDetails';
import { Box } from '@mui/material';
import Lister from '../../containers/CardDetails/List';

const Contact = () => {
    return (
        <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center' }}>
            <BaseLayout />
            <Box sx={{ marginTop: '3vh', flexGrow: 1 }} />
            <h1>Contact</h1>
            <CardDetails sx={{ width: '100vw', }} />


        </Box>
    );
};
export default Contact;