"use client";

import { ErrorComponent } from "@/app/components";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchema";
import { z } from "zod";
import { Issue } from "@/app/generated/prisma";

type IssueFormData = z.infer<typeof issueSchema>;

interface Props {
  issue?: Issue | null;
}

function IssueForm({ issue }: Props) {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (issue) {
        await axios.patch("/api/issues/" + issue.id, data);
      } else {
        await axios.post("/api/issues", data);
      }
      router.push("/issues");
    } catch (error) {
      setError("Unexpected Error Occurred.");
    }
  });

  return (
    <div className="w-4/6">
      {error && <ErrorComponent errorMessage={error} />}
      <form onSubmit={onSubmit} className="space-y-4">
        <TextField.Root
          placeholder="Title"
          defaultValue={issue?.title}
          {...register("title")}
        />
        {errors.title && <ErrorComponent errorMessage={errors.title.message} />}
        <TextArea
          placeholder="Description..."
          rows={8}
          defaultValue={issue?.description}
          {...register("description")}
        />
        {errors.description && (
          <ErrorComponent errorMessage={errors.description.message} />
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : issue ? "Update Issue" : "Create Issue"}
        </Button>
      </form>
    </div>
  );
}

export default IssueForm;
