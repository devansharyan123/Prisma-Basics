import { PrismaClient } from '../prisma/generated/prisma/index.js'
import express from 'express'
const app = express()
app.use(express.json())


const prisma = new PrismaClient()

app.get('/' , async (req, res)=>{
  const user = await prisma.user.findMany();
      res.json({
       user
    })
})

app.get('/todos/:id' , async (req,res)=>{
  const id1 = req.params.id;
  const user = await prisma.user.findFirst({
    where : {
      id : parseInt(id1)
    },
    select : {
        todos : true,
        username : true ,
        age : true
    }
  })
  res.json({
    user
  })
})

// async function getUserWithTodos() {
  
//     const user = await prisma.user.findFirst({
//       where: {
//         id: 1
//       },
//       include: {
//         todos: true // Now this should work
//       }
//     })
//     console.log(user)
 
// }

// getUserWithTodos();

app.listen(3000);