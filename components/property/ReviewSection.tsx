import axios from "axios";
import { useState, useEffect } from "react";
import { ReviewProps } from "@/interfaces";
import Image from "next/image";

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }
  return (
    <section
      id="reviews"
      data-section
      className=" container mt-8 mb-16 pt-6 mx-auto sm:mx-0 w-[97%] sm:w-[62%] border-t    border-b border-[#E6E6E6]"
    >
      <div className="w-[95%] mt-8 mb-8 ">
        <h3 className="text-2xl mb-8 font-semibold">Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((item, index) => (
            <div key={index} className=" pb-4 mb-4">
              <div className="flex items-center mb-6">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />

                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-yellow-500">{item.rating} stars</p>
                </div>
              </div>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
