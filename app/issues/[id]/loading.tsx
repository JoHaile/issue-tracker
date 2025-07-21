import { Flex, Skeleton } from "@radix-ui/themes";

function loading() {
  return (
    <div className="max-w-4/5">
      <Skeleton height="2rem" width="10rem" />
      <Flex gap="4" py="3" align="center">
        <Skeleton width="3rem" />

        <Skeleton height="5rem" />
      </Flex>
      <Skeleton height="10rem" />
    </div>
  );
}

export default loading;
