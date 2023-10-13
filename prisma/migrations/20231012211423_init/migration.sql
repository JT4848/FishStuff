-- CreateTable
CREATE TABLE "Fish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "minSize" TEXT NOT NULL,
    "maxSize" TEXT NOT NULL,
    "edibility" TEXT NOT NULL,
    "measurement" TEXT NOT NULL,
    "bagLimit" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "saltwater" BOOLEAN NOT NULL,
    "freshwater" BOOLEAN NOT NULL,

    CONSTRAINT "Fish_pkey" PRIMARY KEY ("id")
);
