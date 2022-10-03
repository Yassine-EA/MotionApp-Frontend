import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useQuery from '../../hooks/useQuery';



const GenreSelector = () => {
    const { data, errors, isLoading } = useQuery('http://localhost:8000/api/genres/');




    const [genre, setGenre] = React.useState('');

    const handleChange = (event) => {
        setGenre(event.target.value);
        console.log('genre :>> ', genre);
    };
    if (data) {
        const genres = data.rows;

        return (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '19vw', minWidth: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-select-genre"
                        select
                        label="Select"
                        value={genre}
                        onChange={handleChange}
                        helperText="Please select your genre"
                    >
                        {genres.map((option) => (
                            <MenuItem key={option.id_genre} value={option.genre_value}>
                                {option.genre_value}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>
            </Box>
        );
    };

}


export default GenreSelector;
