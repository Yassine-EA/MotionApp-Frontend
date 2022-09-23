import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { FormatAlignJustifyRounded, Visibility, VisibilityOff } from '@mui/icons-material';

const SignUpForms = () => {
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
                    <TextField fullWidth label="Nom" id="lastname" type="text" />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}  >
                    <TextField fullWidth label="Prénom" id="firstname" />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}  >
                    <TextField fullWidth label="Nom d’utilisateur" id="pseudo" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} />
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <TextField fullWidth label="Email" id="email" />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}    >
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        sx={{ minWidth: '45ch' }}
                        endAdornment={
                            <InputAdornment >
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge=""
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </Grid>
            </Grid>
        </Container>
    )
};
export default SignUpForms;
