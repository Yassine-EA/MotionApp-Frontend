import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const SignInForms = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <Container
            sx={{
                width: '80vw',
                height: 'auto',
                marginTop: '10vh',
                border: '2px solid primary.main',
                padding: '15px'
            }}
        >
            <h1>Créer un compte</h1>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                <Grid item xs={6} sm={6} md={6} lg={6}  >
                    <TextField
                        id="outlined-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        sx={{ minWidth: '45ch', maxWidth: '60ch' }}
                        placeholder='Nom d’utilisateur'
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} />
                <Grid item xs={6} sm={6} md={6} lg={6}  >
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        sx={{ minWidth: '45ch', maxWidth: '60ch' }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />

                </Grid>
            </Grid>
            <p>Vous n'avez pas encore de compte ?
                <Typography
                    color='inherit'
                    variant='h6'
                    component={Link}
                    to='/signup'
                    sx={{ textDecoration: 'none' }}
                >Créez-en un !</Typography> </p>
        </Container>

    );
}
export default SignInForms;
