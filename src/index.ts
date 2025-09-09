import { PrismaClient } from "./generated/prisma/index.js"

const client = new PrismaClient()


async function check()
{
  await client.user.create({
    data: {
        username : "Devansh Aryan",
        password : "12345",
        age : 22
    }
})
}

check();
