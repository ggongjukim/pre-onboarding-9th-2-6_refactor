import { Grid } from '@chakra-ui/react';

import ProductCard from '../ProductCard';

export default function ProductList({ products }) {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={6}
      padding="150px"
      paddingTop="0px">
      {products.map((product) => (
        <ProductCard key={product.idx} product={product} />
      ))}
    </Grid>
  );
}
