import { useDispatch, useSelector } from "react-redux";
import { setStartDate, setEndDate } from "@/store/store";
import { RootState } from "@/store/store";
import { useRef } from "react";
import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces";

const BookingSection: React.FC<{ booking: PropertyProps }> = ({ booking }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.bookdate
  );
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (!startDate) {
      startRef.current?.focus();
      return;
    }

    if (!endDate) {
      endRef.current?.focus();
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      endRef.current?.focus();
      return;
    } else {
      router.push(`/booking/${booking.id}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="hidden md:block bg-white sticky top-10 p-6 shadow-md h-[400px] rounded-lg w-[35%] mt-8"
      >
        <div className="text-xl text-[#8E8E8E] font-semibold">
          {" "}
          <span className="text-black">${booking.price}</span> /night
        </div>
        <div className="mt-4">
          <label className="text-black">Check in</label>
          <input
            ref={startRef}
            type="date"
            className="border border-[#E6E6E6] p-2 w-full mt-2 text-[#E6E6E6]"
            value={startDate}
            onChange={(e) => dispatch(setStartDate(e.target.value))}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
        <div className="mt-4">
          <label className="text-black">Check out</label>
          <input
            ref={endRef}
            type="date"
            className="border border-[#E6E6E6] p-2 w-full mt-2 text-[#E6E6E6]"
            value={endDate}
            onChange={(e) => dispatch(setEndDate(e.target.value))}
            min={startDate || new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        <div className="mt-4 flex justify-between">
          <p className="text-[#8E8E8E]">${booking.price} x 7 nights</p>
          <p className="text-black">
            <strong>${booking.price * 7}</strong>
          </p>
        </div>

        {/* Total payment */}
        <div className="mt-4 flex justify-between items-end border-t border-[#E6E6E6]  ">
          <p className="text-[#8E8E8E] mt-4">Total payment:</p>
          <p className="text-[#34967C]">
            <strong>${booking.price * 7}</strong>
          </p>
        </div>

        {/* Reserve button */}

        <button
          type="submit"
          className="mt-4 w-[100%] bg-[#34967C] text-white py-2 px-4 rounded-md"
        >
          Reserve now
        </button>
      </form>

      {/* Booking Section for Mobile */}
      <form
        onClick={handleSubmit}
        className="flex md:hidden items-center justify-between fixed bottom-0 left-0 w-full bg-white p-4 border-t border-[#C5C5C5]"
      >
        <div className="flex flex-col w-[40%] ">
          <div className="text-xl text-[#8E8E8E] font-semibold">
            <span className="text-black">${booking.price}</span> /night
          </div>
          <div className="flex items-end">
            <input
              name="Date"
              type="text"
              className="outline-none p-2 w-full text-[#E6E6E6]"
              placeholder="Add date"
            />
          </div>
        </div>
        <div className="w-[50%] pb-4 ">
          <button
            type="submit"
            className="mt-4 w-[100%] bg-[#34967C] text-white py-2 px-4 rounded-md"
            onClick={() => router.push(`/booking/${booking.id}`)}
          >
            Reserve now
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingSection;
