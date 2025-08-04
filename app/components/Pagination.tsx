"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}
function Pagination({ currentPage, itemsPerPage, totalItems }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const calculatePage = Math.ceil(totalItems / itemsPerPage);
  if (calculatePage <= 1) return null;

  const onChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align={"center"} gap="4" my="5">
      <Text size="3">
        Page {currentPage} of {calculatePage}
      </Text>
      <div className="flex gap-5">
        <Button
          variant="soft"
          color="gray"
          disabled={currentPage === 1}
          onClick={() => onChange(currentPage - 1)}
        >
          <ChevronLeft />
        </Button>

        <Button
          variant="soft"
          color="gray"
          disabled={currentPage === calculatePage}
          onClick={() => onChange(currentPage + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </Flex>
  );
}

export default Pagination;
