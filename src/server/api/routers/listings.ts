
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.parkingLocation.findMany();
  }),
  get: publicProcedure
    .input(z.object({ listingIds: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.parkingSpaces.findMany({
        where: {
          parkingId: input.listingIds,
        },
      });
    }),
  getMessage: protectedProcedure.query(async ({ input, ctx }) => {
    const userId = ctx.auth.userId;
    const listing = await ctx.prisma.listing.findMany({
      where: {
        userId,
      },
      include: {
        message: true,
      },
    });
    return listing.flatMap((item) => item.message);
  }),
  create: protectedProcedure
    .input(
      z.object({ name: z.string(), description: z.string(), price: z.number() })
    )
    .mutation(async ({ input, ctx }) => {
      const listing = await ctx.prisma.listing.create({
        data: {
          ...input,
          userId: ctx.auth.userId,
        },
      });
      return listing;
    }),
});