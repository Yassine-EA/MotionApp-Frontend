import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import DarkModeIcon from '@mui/icons-material/DarkMode';

import App from "../../App"


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


export const MyApp = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '80%',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flexWrap: 'nowrap',
                    bgcolor: 'transparent',
                    color: '#ff3d00',
                    borderRadius: 3,

                }}
            >

                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <DarkModeIcon />}
                </IconButton>

            </Box>
        </Box>

    );
}

const ToggleColorMode = () => {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme} >
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ToggleColorMode;