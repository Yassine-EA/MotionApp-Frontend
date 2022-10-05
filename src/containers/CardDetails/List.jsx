import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import MovieDemos from '../MovieDemo';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));

const Lister = ({ props }) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item >
                    <Typography variant="h2" component="h2">
                        {props.title}
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox sx={{ justifySelf: 'center' }}
                                    icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />}
                                    checked={secondary}
                                    onChange={(event) => setSecondary(event.target.checked)}
                                    color='error'
                                />
                            }
                            label="Détails"
                        />

                        <Typography component={Link} to={`/movies`} >
                            <Fab variant="extended" size='small' color='error' >
                                <SendIcon sx={{ mr: 1 }} />
                                Retour
                            </Fab>
                        </Typography>
                    </FormGroup>
                    <MovieDemos props={{
                        dense: dense,
                        icon: <StarIcon color='error' />,
                        primary: "NOTE IMDb :",
                        secondary: secondary,
                        message: props.rating
                    }}
                    />
                    <MovieDemos props={{
                        dense: dense,
                        icon: <LocalMoviesIcon color='error' />,
                        primary: props.media_type,
                        secondary: secondary,
                        message: "Sortie : " + props.releaseDate + " Durée : " + props.runtimeStr
                    }}
                    />
                    <MovieDemos props={{
                        dense: dense,
                        icon: <RecordVoiceOverIcon color='error' />,
                        primary: props.directors,
                        secondary: secondary,
                        message: "Scénario : " + props.writers
                    }}
                    />
                    <MovieDemos props={{
                        dense: dense,
                        icon: <TheaterComedyIcon color='error' />,
                        primary: "Acteurs principaux : ",
                        secondary: secondary,
                        message: props.stars
                    }}
                    />
                    <MovieDemos props={{
                        dense: dense,
                        icon: <InfoIcon color='error' />,
                        primary: "Synopsis : ",
                        secondary: secondary,
                        message: props.plot
                    }}
                    />
                    <MovieDemos props={{
                        dense: dense,
                        icon: <TranslateIcon color='error' />,
                        primary: "Langue(s) : ",
                        secondary: secondary,
                        message: props.languages
                    }}
                    />
                    <MovieDemos props={{
                        dense: dense,
                        icon: <LanguageIcon color='error' />,
                        primary: "Pays : ",
                        secondary: secondary,
                        message: props.countries
                    }}
                    />
                </Grid>

            </Grid>
        </Box >
    );
};

export default Lister;
