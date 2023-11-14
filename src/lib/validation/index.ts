import * as z from "zod"


export const signUpValidation = z.object({
    name: z.string().min(2, {message: ''}),
    username: z.string().min(2, {message: ''} ),
    email: z.string().email(),
    password: z.string().min(8, {message: ''}),
  })