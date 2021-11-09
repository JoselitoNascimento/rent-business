import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.User.findUnique({
        where: {
            email: User.email,
            paswword: User.paswword,
        },
    })    
    console.log(result);
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })