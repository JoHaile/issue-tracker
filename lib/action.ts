"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth";
import { APIError } from "better-auth/api";
import { headers } from "next/headers";

export const signUp = async (prevState: unknown, formData: FormData) => {
  const { email, fullName, password } = {
    fullName: formData.get("fullname") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await auth.api.signUpEmail({
      body: {
        name: fullName,
        email: email,
        password: password,
      },
      headers: await headers(),
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return { errorMessage: "User Already exists." };
        case "BAD_REQUEST":
          return { errorMessage: "Invalid Email or Password." };
        default:
          return {
            errorMessage: "Something wend Wrong Please try again later.",
          };
      }
    }
    console.log(
      "email and password sign up not worked. Try another way.",
      error
    );
  }

  redirect("/dashboard");
};
