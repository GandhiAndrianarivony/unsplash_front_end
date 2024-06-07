import { z } from "zod";

export const CollectionInputSchema = z.object({
    name: z.string().max(60, {message: "Too long"})
}); 
