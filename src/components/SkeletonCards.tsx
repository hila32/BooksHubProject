import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCards = () => {
  return (
    <>
      <Card.Root w="300px" overflow="hidden">
        <Skeleton h="300px" />
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default SkeletonCards;
