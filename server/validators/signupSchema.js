const {z} = require("zod");

const signupSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot exceed 20 characters" }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" }),

  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be exactly 10 digits" })
    .max(10, { message: "Phone number must be exactly 10 digits" }),

  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password cannot exceed 32 characters" })
});

module.exports = signupSchema;