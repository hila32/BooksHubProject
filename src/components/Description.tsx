import { Box, HoverCard, Link, Portal } from "@chakra-ui/react";
import { useState } from "react";

import type { Product } from "../hooks/useProducts";
import { RxInfoCircled } from "react-icons/rx";

interface Prop {
  product: Product;
}

const Description = ({ product }: Prop) => {
  const [open, setOpen] = useState(false);
  return (
    <HoverCard.Root size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <HoverCard.Trigger asChild>
        <Link href="#">
          <RxInfoCircled />
        </Link>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="240px">
            <HoverCard.Arrow />
            <Box>{product.description}</Box>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
};

export default Description;
