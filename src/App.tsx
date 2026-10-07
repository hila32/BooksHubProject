import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductsGrid from "./components/ProductGrid";
import Genres from "./components/Genres";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow={"lg"} area="aside" bg="gold">
        <Genres />
      </GridItem>
      <GridItem area="main">
        <ProductsGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
