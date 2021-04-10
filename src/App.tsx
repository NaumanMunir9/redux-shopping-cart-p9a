import { Box, Container } from "@material-ui/core";
import React from "react";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        Product Component
      </Box>

      <Box mt={5} mb={5}>
        Basket Component
      </Box>
    </Container>
  );
};

export default App;
