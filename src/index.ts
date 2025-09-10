import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getUserWithTodos() {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: 1
      },
      include: {
        todos: true // Now this should work
      }
    })
    console.log(user)
    return user
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}