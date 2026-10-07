import { Stack, Text } from "@chakra-ui/react";
import type { Product } from "../hooks/useProducts";

interface Prop {
  product: Product;
}

const ProductTitle = ({ product }: Prop) => {
  return (
    <Stack color="gray.500" marginY={1}>
      <Text fontSize={18}>{product.title}</Text>
      <Text fontSize={15}>{product.price}</Text>
    </Stack>
  );
};

export default ProductTitle;
