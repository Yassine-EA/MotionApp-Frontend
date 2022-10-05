import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useQuery from '../../hooks/useQuery';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { nanoid } from 'nanoid'
import ClearIcon from '@mui/icons-material/Clear';



const GenreSelector = () => {

    const { data, errors, isLoading } = useQuery('http://localhost:8000/api/genres/');
    const [genre, setGenre] = useState('Tous');

    const handleChange = (event) => {

        setGenre(event.target.value);

    };

    useEffect(() => {

        console.log('genre :>> ', genre);

    }, [genre]);

    if (data) {
        const genresList = data.rows;
        let genres = [];
        genres.push({ id: nanoid(), genre_value: "Tous" })
        genresList.forEach(element => {
            genres.push({ id: nanoid(), genre_value: element.genre_value });

        });
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
                        label="Selection"
                        value={genre}
                        onChange={handleChange}
                        helperText="Choisir un genre"
                    >
                        {genres.map((option) => (
                            <MenuItem key={option.id} value={option.genre_value}>
                                {option.genre_value}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <Box>

                </Box>


            </Box>

        );
    };

}


export default GenreSelector;
