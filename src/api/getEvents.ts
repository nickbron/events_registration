import prisma from "@/lib/prisma";
import { IEvents } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

export const getEvents = () =>
  prisma.events.findMany({
    orderBy: {
      eventDate: "desc",
    },
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IEvents>>
) {
  const data = await getEvents();

  res.status(200).json(data);
}
