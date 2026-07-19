import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createOrder = async (userId: string, payload: any) => {
  return await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId,
        totalPrice: payload.totalPrice,
        address: payload.address,
      },
    });

    await tx.orderItem.createMany({
      data: payload.items.map((item: any) => ({
        orderId: order.id,
        componentId: item.componentId,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    return order;
  });
};

export const OrderService = { createOrder };