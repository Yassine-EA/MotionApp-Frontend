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
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';


const AvatarIcon = ({ props }) => {

    if (props === 'Movie') {

        return (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" variant="rounded">
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
        <Card sx={{ maxWidth: 450, margin: 1 }}>
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
                height="100%"
                width="auto"
                image={props.image}
                alt=""
            />
            {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
            </CardContent> */}
            <CardActions>

                <Button size="small" color='error' variant="contained" endIcon={<SendIcon />}>Lire la suite </Button>

            </CardActions>
        </Card>
    );

};
export default Media;