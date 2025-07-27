import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface Props {
  params: { id: string };
}

async function issueDetailsPage({ params }: Props) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="sm:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box className="sm:col-span-4 md:col-span-1">
        {session && (
          <Flex
            direction="column"
            gap="5"
            maxWidth={{ initial: "500px" }}
            m={{ initial: "auto" }}
          >
            <EditIssueButton id={issue.id} />
            <DeleteIssueButton id={issue.id} />
          </Flex>
        )}
      </Box>
    </Grid>
  );
}

export default issueDetailsPage;
