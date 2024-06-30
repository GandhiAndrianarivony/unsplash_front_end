import { z } from "zod";

export const CollectionInputSchema = z.object({
    name: z.string().max(60, { message: "Too long" }),
});

export const UserInfoSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    username: z.string().min(5, { message: "Too short username" }),
    gender: z.enum(["Male", "Female", "Other"]),
    website: z.string().nullish(),
    bio: z.string().nullish(),
    interests: z.string().nullish(),
    location: z.string().nullish(),
    phoneNumber: z
        .string()
        .regex(/[0-9]+/, { message: "Invalid Phone Number" })
        .or(z.string().length(0))
        .nullish(),
});
