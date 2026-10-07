import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import SkeletonCards from "./SkeletonCards";

const ProductsGrid = () => {
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const { products, error, isLoading } = useProducts();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} gap={10} p="10px">
        {isLoading && Skeletons.map((s) => <SkeletonCards key={s} />)}
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
