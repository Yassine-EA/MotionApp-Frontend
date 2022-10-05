import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';

const MovieDemos = ({ props }) => {

    const [secondary, setSecondary] = React.useState(false);

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    return (
        <>
            <Demo>
                <List dense={props.dense}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar >
                                {props.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={props.primary}
                            secondary={props.secondary ? props.message : null}
                        />
                    </ListItem>
                </List>
            </Demo>
        </>

    );
};

export default MovieDemos;