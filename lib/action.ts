"use server";

import { APIError } from "better-auth/api";
import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

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
        email,
        password,
        callbackURL: "/dashboard",
      },
      headers: await headers(),
    });
    return {
      successMessage: "Please check your email to verify your account.",
    };
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
};

export const login = async (prevState: unknown, formData: FormData) => {
  const { email, password } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        callbackURL: "/dashboard",
      },
      headers: await headers(),
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNAUTHORIZED":
          return { errorMessage: "Invalid email or Password." };
        case "NOT_FOUND":
          return { errorMessage: "User not found." };
        case "BAD_REQUEST":
          return { errorMessage: "something went wrong" };
        default:
          return { errorMessage: "please verify your email?." };
      }
    }
    console.log(error);
  }

  redirect("/dashboard");
};

export const handleSocialAuth = async () => {
  const data = await auth.api.signInSocial({
    body: {
      provider: "google",
      callbackURL: "/dashboard",
    },

    headers: await headers(),
  });
};
