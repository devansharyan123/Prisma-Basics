import { PrismaClient } from "./generated/prisma/index.js"

const client = new PrismaClient()

client.user.create({
    data: {
        username : "Devansh Aryan",
        password : "12345",
        age : 22
    }
})