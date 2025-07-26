import { auth } from "@/lib/auth";
import { Button, Heading } from "@radix-ui/themes";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      {session ? (
        <Heading>Welcome {session.user.name}</Heading>
      ) : (
        <Link href="/sign-up">
          <Button variant="soft">Sign Up / Log In</Button>
        </Link>
      )}
    </div>
  );
}
