import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient();
const app = express();
 
app.use(express.json());

app.get("/users", async(req, res) => {
    const result = await prisma.user.findMany();
    res.json(result);
});

app.post("/signup", async(req, res) => {
    const { nameuser, email, password, category } = req.body;

    const result = await prisma.user.create({
        nameuser,
        email,
        password,
        category,
    })
    res.json(result);
});

app.post("/post", async(req, res) => {
    const { nameuser, email, password, category } = req.body;

    const result = await prisma.user.create({
        nameuser,
        email,
        password,
        category,
    })
    res.json(result);
});

app.put("/post/:id/views", async(req, res) => {
    const { id } = req.params;

    const { nameuser, email, password, category } = req.body;
    const result = await prisma.user.update({
        where : {
            id,    
        },
        data : {
            nameuser,
            email,
            password,
            category,
        },
    });
    res.json(result);
});
