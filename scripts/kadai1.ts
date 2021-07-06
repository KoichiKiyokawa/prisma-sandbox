import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({ log: ["query", "info", `warn`, `error`] })

async function main() {
  const result = await prisma.user.findMany({
    where: {
      gender: "male",
      labels: {
        some: { id: 1 },
        none: { id: 3 },
      },
    },
  })

  console.log(
    result.filter((r) =>
      [3, 4, 5].map((n) => n - 1).includes(r.birthday.getMonth())
    )
  )
}

main().finally(() => prisma.$disconnect())
