-- CreateTable
CREATE TABLE "Entidade" (
    "id" SERIAL NOT NULL,
    "cnpj_cpf" VARCHAR(200) NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "fantasia" VARCHAR(200) NOT NULL,
    "insc_mun" VARCHAR(50) NOT NULL,
    "insc_est" VARCHAR(50) NOT NULL,
    "status" VARCHAR(1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "category" INTEGER NOT NULL,
    "status" VARCHAR(1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
