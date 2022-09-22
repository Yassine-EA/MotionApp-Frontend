import { Box, Container, CssBaseline } from '@mui/material';

import Header from '../components/Header';

const BaseLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box display='flex' minHeight='100vh' flexDirection='column' borderRadius='10px'>
        <Header />
        <Box flex={1}>
          <main>
            <Container>{children}</Container>
          </main>
        </Box>

      </Box>
    </>
  );
};

export default BaseLayout;
