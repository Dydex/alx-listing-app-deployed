import { getNames } from "country-list";
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const countries = getNames();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      alert("Booking Confirmed!");
    } catch (error) {
      console.log("Booking error:", error);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Contact Detail</h2>
        <form onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                id="lastname"
                type="text"
                className="border p-2 w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                type="text"
                className="border p-2 w-full mt-2"
              />
            </div>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="border p-2 w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                id="phonenumber"
                type="number"
                className="border p-2 w-full mt-2"
              />
            </div>
          </div>

          {/* Payment Information */}
          <h2 className="text-xl font-semibold mt-6">Pay with</h2>
          <div>
            <select
              id="card-type"
              name="card-type"
              required
              className="border p-2 w-full mt-4"
              title="Card Type"
            >
              <option>Credit or debit card</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
            </select>
          </div>
          <div className="mt-4">
            <input
              id="cardnumber"
              type="number"
              placeholder="Card number"
              className="border p-2 w-full mt-2"
            />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <input
                id="expirationdate"
                type="text"
                placeholder="Expiration date"
                className="border p-2 w-full "
              />
            </div>
            <div>
              <input
                id="cvv"
                type="text"
                placeholder="CVV"
                className="border p-2 w-full"
              />
            </div>
          </div>

          {/* Billing Address */}
          <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
          <div className="mt-4">
            <label htmlFor="streetaddress">Street Address</label>
            <input
              id="streetaddress"
              type="text"
              placeholder="Street Address"
              className="border p-2 w-full mt-2"
            />
          </div>
          <div className="gap-4 mt-4">
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                className="border p-2 w-full mt-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="zipcode">Zip Code</label>
              <input
                id="zipcode"
                type="text"
                placeholder="Zip Code"
                className="border p-2 w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                placeholder="State"
                className="border p-2 w-full mt-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              className="border p-2.5 w-full mt-2"
              title="country"
              autoComplete="country"
            >
              <option value="">Choose a Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Cancellation policy</h2>
            <p className="mt-2 text-gray-600">
              Free cancellation before Aug 23. Cancel before check-in on Aug 24
              for a partial refund.
            </p>

            <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
            <p className="mt-2 text-gray-600">
              We ask every guest to remember a few simple things about what
              makes a great guest.
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Follow the house rules</li>
              <li>Treat your Host’s home like your own</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-10 bg-[#34967c] text-white py-2 px-4 rounded-md w-1/2"
            onClick={() => setFormData}
          >
            {loading ? "Proceesing..." : "Confirm & Pay"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </>
  );
}
