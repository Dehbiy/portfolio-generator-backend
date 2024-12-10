import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
        name: 'Mohammed Abdul',
    }
  })

  console.log(user)
}

main()