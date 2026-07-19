import { Component, PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const createComponent = async (data: any): Promise<Component> => {
  return await prisma.component.create({ data });
};

const getAllComponents = async (query: Record<string, unknown>) => {
  const { type, brand, minPrice, maxPrice, ...dynamicFilters } = query;
  const andConditions: Prisma.ComponentWhereInput[] = [];

  if (type) {
    andConditions.push({ type: type as any });
  }

  if (brand) {
    const brandsArray = (brand as string).split(',');
    andConditions.push({ brand: { in: brandsArray } });
  }

  if (minPrice || maxPrice) {
    const priceFilter: { gte?: number; lte?: number } = {};
    if (minPrice) priceFilter.gte = Number(minPrice);
    if (maxPrice) priceFilter.lte = Number(maxPrice);
    
    andConditions.push({ price: priceFilter });
  }

  if (Object.keys(dynamicFilters).length > 0) {
    Object.entries(dynamicFilters).forEach(([key, value]) => {
      andConditions.push({
        specifications: {
          path: [key],
          equals: value as string,
        },
      });
    });
  }

  const whereConditions: Prisma.ComponentWhereInput = andConditions.length > 0 ? { AND: andConditions } : {};

  return await prisma.component.findMany({
    where: whereConditions,
    orderBy: { createdAt: 'desc' },
  });
};

export const ComponentService = { createComponent, getAllComponents };