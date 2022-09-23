import { Box, Container, CssBaseline } from '@mui/material';

import Header from '../components/Header';

const BaseLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box >
        <Header />
        <Box flex={1}>
          <Container>{children}</Container>
        </Box>

      </Box>
    </>
  );
};

export default BaseLayout;
