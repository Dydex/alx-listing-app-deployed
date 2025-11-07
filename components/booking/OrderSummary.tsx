import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { BookingDetails } from "@/interfaces";

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({
  bookingDetails,
}) => {
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.bookdate
  );

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInTime = end.getTime() - start.getTime();
  const nights = Math.max(1, Math.ceil(diffInTime / (1000 * 60 * 60 * 24)));

  return (
    <>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Review Order Details</h2>
        <div className=" items-center w-full mt-4">
          <Image
            src={bookingDetails.image}
            alt={bookingDetails.name}
            width={600}
            height={208}
            className="object-cover rounded-md"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{bookingDetails.name}</h3>
          <div className="flex gap-1 items-center">
            <Image src="/icons/Star 2.png" alt="Star" width={16} height={2} />
            <p className="text-sm text-gray-500">
              <span className="text-black">{bookingDetails.rating}</span> {""}{" "}
              (345 reviews)
            </p>
          </div>

          <div className="mt-1">
            <span className="py-1 px-1 rounded-sm bg-[#F7F7F7] text-sm text-gray-500">
              {new Date(startDate).toLocaleDateString()}
            </span>{" "}
            &bull;{" "}
            <span className="py-1 px-1 rounded-sm bg-[#F7F7F7] text-sm text-gray-500">
              {nights} {nights === 1 ? "night" : "nights"}
            </span>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="mt-6">
          <div className="flex justify-between">
            <p>Booking Fee</p>
            {/* <p>${bookingDetails.bookingFee}</p> */}
          </div>
          <div className="flex justify-between mt-2">
            <p>Subtotal</p>
            <p>${bookingDetails.price}</p>
          </div>
          <div className="flex justify-between mt-2 font-semibold">
            <p>Grand Total</p>
            {/* <p>${bookingDetails.bookingFee + bookingDetails.price}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
