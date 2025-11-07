import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // In a real application, you would validate the data and save it to a database
    // For this example, we'll just simulate a successful booking

    // Log the booking data (for development purposes)
    console.log("Booking received:", req.body);

    // Simulate processing time
    // In a real app, this would be database operations
    setTimeout(() => {
      // Return a success response with a booking ID
      return res.status(200).json({
        success: true,
        bookingId: `BOOK-${Date.now()}`,
        message: "Booking confirmed successfully",
      });
    }, 1000);
  } catch (error) {
    console.error("Booking error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
