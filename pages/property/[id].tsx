import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from '@/components/property/BookingSection';
import ReviewSection from '@/components/property/ReviewSection';
import { review } from '@/constants/index';
import PropertyImage from '@/components/property/PropertyImages';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <>
      <head>
        <title>Property Details</title>
      </head>
      <main>
        <div className=''>
          <PropertyImage property={property} />
        </div>
        <div className='flex w-[95%] mx-auto justify-between '>
          <PropertyDetail property={property} />
          <BookingSection booking={property} />
        </div>
        <div className=' w-[95%] mx-auto '>
          <ReviewSection reviews={review} />
        </div>
      </main>
    </>
  );
}
