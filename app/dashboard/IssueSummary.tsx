import { Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { string } from "zod";
import { Status } from "../generated/prisma";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

function IssueSummary({ closed, inProgress, open }: Props) {
  const statuses: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex gap={"5"}>
      {statuses.map((container) => (
        <Card key={container.label}>
          <Flex direction={"column"} gap={"2"}>
            <Link
              href={`/issues?status=${container.status}`}
              className="font-light"
            >
              {container.label}
            </Link>
            <Text size={"5"} className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}

export default IssueSummary;
