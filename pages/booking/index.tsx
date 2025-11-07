import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import axios from "axios";

export default function BookingPage() {
  const Router = useRouter();
  const { id } = Router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);
  if (!property) return <p>Property not found</p>;

  return (
    <>
      <div className=" bg-[#F8FAFC]" onClick={() => Router.back()}>
        <div className="flex gap-2 w-[95%] lg:w-[85%] pt-4 pb-4 m-auto ">
          <img src="/icons/Arrow Left.png" alt="Arrow" width={16} height={6} />
          <h6>Booking</h6>
        </div>
      </div>

      <div className="w-[95%] lg:w-[85%] pt-4 pb-4 mx-auto flex flex-col-reverse md:flex-row gap-6">
        <div className="grid grid-row-2">
          <BookingForm />
        </div>
        <div>
          <OrderSummary bookingDetails={property} />
        </div>
      </div>
    </>
  );
}
