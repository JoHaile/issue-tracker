// "use server";

import axios from "axios";
import { redirect } from "next/navigation";

export async function issueFormAction(prevState: unknown, formData: FormData) {
  const issueData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };

  try {
    axios.post("/api/issues", issueData);
    redirect("/issues");
  } catch (error) {
    return { errorMessage: "unexpected error Happened" };
  }
}
