import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
const AvatarIcon = ({ props }) => {

    if (props === 'Movie') {

        return (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <LocalMoviesIcon />
            </Avatar>

        );

    } else {
        return (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <LiveTvIcon />
            </Avatar>

        );

    }

}

const Media = ({ props }) => {


    return (
        <Card sx={{ maxWidth: 450, maxHeight: '62vh', margin: 1 }}>
            <CardHeader
                avatar={
                    <AvatarIcon props={props.media_type}></AvatarIcon>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            // title={

            // }

            />
            <CardMedia
                component="img"
                height="auto"
                width="100%"
                image={props.image}
                alt=""
            />
            {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent> */}
            <CardActions>
                <Button size="small">Lire la suite</Button>
            </CardActions>
        </Card>
    );

};
export default Media;