import { z } from "zod";

export const Greeting = z.object({ message: z.string() });
export type Greeting = z.infer<typeof Greeting>;
