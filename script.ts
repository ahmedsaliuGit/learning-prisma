import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Ahmed",
        email: "ahmed@test.com",
        age: 25,
      },
      {
        name: "Abiodun",
        email: "abiodun@test.com",
        age: 35,
      },
    ],
  });

  console.log(user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
