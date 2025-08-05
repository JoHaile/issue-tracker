import { auth } from "@/lib/auth";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      {session ? (
        <div className="text-center capitalize">
          <Heading>Welcome {session.user.name}</Heading>
        </div>
      ) : (
        <Flex align="center" direction={"column"} justify={"between"} gap={"8"}>
          <Heading>
            Welcome to Issue Tracker Sign up/Log in to Create, Update, Delete,
            and Assign an Issue.
          </Heading>

          <Link href="/sign-up">
            <Button variant="soft">Sign Up / Log In</Button>
          </Link>
        </Flex>
      )}
    </div>
  );
}
