/*
  Warnings:

  - You are about to drop the column `categorySlug` on the `CoffeeShop` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `CoffeeShop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CoffeeShop" DROP CONSTRAINT "CoffeeShop_categorySlug_fkey";

-- AlterTable
ALTER TABLE "CoffeeShop" DROP COLUMN "categorySlug",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CoffeeShop" ADD CONSTRAINT "CoffeeShop_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
