import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Ahmed",
      email: "ahmed@test.com",
      age: 25,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: { name: true, userPreference: { select: { id: true } } },
  });

  console.log(user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
