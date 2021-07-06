import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function seed() {
  await prisma.user.create({
    data: { name: "sano", gender: "male", birthday: new Date("1900/3/1") },
  })
  await prisma.user.create({
    data: { name: "sato", gender: "female", birthday: new Date("1900/4/1") },
  })
  await prisma.user.create({
    data: { name: "sato", gender: "female", birthday: new Date("1900/4/1") },
  })
  await prisma.user.create({
    data: { name: "saito", gender: "female", birthday: new Date("1900/5/1") },
  })
  await prisma.user.create({
    data: { name: "sakuma", gender: "male", birthday: new Date("1900/6/1") },
  })

  await prisma.label.create({
    data: { name: "第1部署", users: { connect: [{ id: 1 }] } },
  })
  await prisma.label.create({
    data: { name: "第2部署", users: { connect: [{ id: 1 }, { id: 2 }] } },
  })
  await prisma.label.create({
    data: { name: "第3部署", users: { connect: [{ id: 3 }] } },
  })

  await prisma.$disconnect()
}
