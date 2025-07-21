// "use server";

import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

export async function issueFormAction(prevState: unknown, formData: FormData) {
  const issueData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };

  try {
    await axios.post("/api/issues", issueData);
    return { errorMessage: "form submitted." };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      if (error.code === "ERR_BAD_REQUEST")
        return { errorMessage: "Please fill out the form properly." };
      return { errorMessage: "unexpected error has occurred." };
    }
  }
}
