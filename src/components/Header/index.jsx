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
import { grey } from '@mui/material/colors';
import { display } from '@mui/system';


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: grey[900],
            darker: '#304ffe',
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
                <AppBar position='static' color='primary' sx={{ borderRadius: '30px' }} >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Typography
                            size='large'
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/'
                            sx={{ textDecoration: 'none' }}
                        >
                            <HomeIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/movies'
                            sx={{ textDecoration: 'none' }}
                        >
                            <LocalMoviesIcon fontSize="large" />
                        </Typography>
                        <Typography
                            size='large'
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/tv'
                            sx={{ textDecoration: 'none' }}
                        >
                            <LiveTvIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/actors'
                            sx={{ textDecoration: 'none' }}
                        >
                            <StarsIcon fontSize="large" />
                        </Typography>
                        <SeachTab sx={{ size: '15vw' }} />
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/contact'
                            sx={{ textDecoration: 'none' }}
                        >
                            <ContactMailIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/signin'
                            sx={{ textDecoration: 'none' }}
                        >
                            <LoginIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/signup'
                            sx={{ textDecoration: 'none' }}
                        >
                            <PersonAddIcon fontSize="large" />
                        </Typography>
                        <Typography
                            color='inherit'
                            variant='h6'
                            component={Link}
                            to='/signup'
                            sx={{ textDecoration: 'none' }}
                        >
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav> */}
        </header >
    );
};
export default Header;


