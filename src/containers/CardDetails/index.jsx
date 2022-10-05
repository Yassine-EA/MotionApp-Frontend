import { Box, Container } from '@mui/material';
import { items } from "../../utils/image";

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'mui-image';

import Lister from './List';

const CardDetails = ({ props }) => {


    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ display: 'flex' }}>
                <Container>
                    <Box>
                        <Lister props={props}></Lister>
                    </Box>
                </Container>
                <Container  >
                    <Box sx={{ bgcolor: 'transparent', height: '100vh' }} >
                        <Image
                            src={props.image}
                            height="100%"
                            width="100%"
                            fit="contain"
                            duration={5000}
                            easing="ease-in"
                            showLoading={false}
                            errorIcon={true}
                            distance="100vh"
                            shiftDuration={900}
                            bgColor=""
                        />
                    </Box>
                </Container>


            </Box>
        </Box>
    );

};

export default CardDetails;