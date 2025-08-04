import { auth } from "@/lib/auth";
import { Button, Heading } from "@radix-ui/themes";
import { headers } from "next/headers";
import Link from "next/link";
import Pagination from "./components/Pagination";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      {session ? (
        <div>
          <Heading>Welcome {session.user.name}</Heading>
          <Pagination currentPage={10} itemsPerPage={10} totalItems={100} />
        </div>
      ) : (
        <Link href="/sign-up">
          <Button variant="soft">Sign Up / Log In</Button>
        </Link>
      )}
    </div>
  );
}
