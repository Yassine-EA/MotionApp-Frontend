import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import StarsIcon from '@mui/icons-material/Stars';

import { Link, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SeachTab from "../../components/SeachTab";
import { grey, lightBlue, red } from '@mui/material/colors';
import { display } from '@mui/system';
import { MyApp } from '../DarkMode';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: lightBlue[800],
            darker: grey[900],
        },
        neutral: {
            main: '#304ffe',
            contrastText: '#fff',
        },
    },
});


const Header = () => {
    return (
        <header>
            <ThemeProvider theme={theme}>
                <AppBar position='fixed' color='transparent' sx={{ padding: '0px', margin: '0px' }} >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Typography
                            size='large'

                            variant='h6'
                            component={Link}
                            to='/'
                            sx={{ textDecoration: 'none', color: "#ff3d00" }}
                        >
                            <HomeIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/movies'
                            sx={{ textDecoration: 'none', color: "#ff3d00" }}
                        >
                            <LocalMoviesIcon fontSize="large" />
                        </Typography>
                        <Typography
                            size='large'
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/tv'
                            sx={{ textDecoration: 'none', color: "#ff3d00" }}
                        >
                            <LiveTvIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/actors'
                            sx={{ textDecoration: 'none', color: "#ff3d00" }}
                        >
                            <StarsIcon fontSize="large" />
                        </Typography>
                        <SeachTab />
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/contact'
                            sx={{ textDecoration: 'none', color: "#ff3d00" }}
                        >
                            <ContactMailIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/signin'
                            sx={{ textDecoration: 'none', color: "#ff3d00" }}
                        >
                            <LoginIcon fontSize="large" />
                        </Typography>
                        <MyApp />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </header >
    );
};
export default Header;


