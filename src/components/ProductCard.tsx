import { Box, Card, Heading, HStack, Image } from "@chakra-ui/react";
import type { Product } from "../hooks/useProducts";
import Description from "./Description";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Card.Root w="300px" overflow="hidden">
        <Box
          width="300px"
          height="300px"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={product.image}
            gap={10}
            p={8}
            objectFit="contain"
            maxWidth="100%"
            maxHeight="100%"
          />
        </Box>
        <Card.Body>
          <Heading fontSize="xl">{product.title}</Heading>
          <HStack mt="auto" justifyContent="space-between">
            {product.category}
            <Description product={product}></Description>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default ProductCard;
