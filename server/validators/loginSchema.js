const {z} = require("zod");

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password cannot exceed 32 characters" })
});

module.exports = loginSchema;