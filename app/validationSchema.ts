import z from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is Required.").max(255),
  description: z.string().min(1, "Description is Required.").max(60000),
});

export const patchedIssueSchema = z.object({
  title: z.string().min(1, "Title is Required.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is Required.")
    .max(60000)
    .optional(),
  assignedToUserID: z
    .string()
    .min(1, "A Valid User ID is Required!")
    .max(255)
    .optional()
    .nullable(),
});
