import { connectDb, prisma } from "../src/config/database.js";

async function main() {
  connectDb();

  await prisma.cars.upsert({
    where: { licensePlate: "ABC9090" },
    update: {},
    create: {
      model: "HB20",
      licensePlate: "ABC9090",
      year: 2001,
      color: "AZUL",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "EZD3035" },
    update: {},
    create: {
      model: "SONATA",
      licensePlate: "EZD3035",
      year: 2010,
      color: "PRETO",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "FBI2231" },
    update: {},
    create: {
      model: "X1",
      licensePlate: "FBI2231",
      year: 2018,
      color: "BRANCO",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "LPA1019" },
    update: {},
    create: {
      model: "CIVIC",
      licensePlate: "LPA1019",
      year: 2021,
      color: "CINZA",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "HFA2713" },
    update: {},
    create: {
      model: "ONIX",
      licensePlate: "HFA2713",
      year: 2023,
      color: "AMARELO",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "EPR6655" },
    update: {},
    create: {
      model: "EVOLUTION",
      licensePlate: "EPR6655",
      year: 2005,
      color: "CINZA",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "DMP7935" },
    update: {},
    create: {
      model: "UNO",
      licensePlate: "DMP7935",
      year: 2000,
      color: "PRETO",
    },
  });

  await prisma.cars.upsert({
    where: { licensePlate: "LAS5546" },
    update: {},
    create: {
      model: "320i",
      licensePlate: "LAS5546",
      year: 2017,
      color: "BRANCO",
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
