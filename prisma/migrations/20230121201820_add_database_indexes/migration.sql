-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderProduct` DROP FOREIGN KEY `OrderProduct_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `OrderProduct` DROP FOREIGN KEY `OrderProduct_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `ProductImages` DROP FOREIGN KEY `ProductImages_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- RenameIndex
ALTER TABLE `Account` RENAME INDEX `Account_userId_fkey` TO `Account_userId_idx`;

-- RenameIndex
ALTER TABLE `Order` RENAME INDEX `Order_user_id_fkey` TO `Order_user_id_idx`;

-- RenameIndex
ALTER TABLE `OrderProduct` RENAME INDEX `OrderProduct_order_id_fkey` TO `OrderProduct_order_id_idx`;

-- RenameIndex
ALTER TABLE `OrderProduct` RENAME INDEX `OrderProduct_product_id_fkey` TO `OrderProduct_product_id_idx`;

-- RenameIndex
ALTER TABLE `ProductImages` RENAME INDEX `ProductImages_product_id_fkey` TO `ProductImages_product_id_idx`;

-- RenameIndex
ALTER TABLE `Session` RENAME INDEX `Session_userId_fkey` TO `Session_userId_idx`;
