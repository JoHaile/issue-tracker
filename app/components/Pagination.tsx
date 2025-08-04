import { Button, Flex, Text } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}
function Pagination({ currentPage, itemsPerPage, totalItems }: Props) {
  const calculatePage = Math.ceil(totalItems / itemsPerPage);
  if (calculatePage <= 1) return null;

  return (
    <Flex align={"center"} gap="4">
      <Text>
        Page {currentPage} of {calculatePage}
      </Text>
      <div>
        <Button variant="soft" color="gray" disabled={currentPage === 1}>
          <ChevronLeft />
        </Button>
        <Button
          variant="soft"
          color="gray"
          disabled={currentPage === calculatePage}
        >
          <ChevronRight />
        </Button>
      </div>
    </Flex>
  );
}

export default Pagination;
