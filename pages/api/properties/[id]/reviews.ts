import type { NextApiRequest, NextApiResponse } from "next";
import { review } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid property ID" });
  }

  const propertyReviews = review[id];

  if (!propertyReviews) {
    return res
      .status(404)
      .json({ message: "No reviews found for this property" });
  }

  return res.status(200).json(propertyReviews);
}
