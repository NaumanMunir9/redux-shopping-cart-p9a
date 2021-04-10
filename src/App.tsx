import { Box, Container } from "@material-ui/core";
import React from "react";
import { Basket } from "./components/Basket";
import { Product } from "./components/Product";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        <Product />
      </Box>

      <Box mt={5} mb={5}>
        <Basket />
      </Box>
    </Container>
  );
};

export default App;
