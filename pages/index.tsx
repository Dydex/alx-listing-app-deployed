import Image from 'next/image';
import Button from '@/components/common/Button';
import Pill from '@/components/common/Pill';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import React, { useEffect, useState } from 'react';
import { categories } from '@/constants';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { PropertyProps } from '@/interfaces';

const Card = dynamic(
  () =>
    new Promise<typeof import('@/components/common/Card')>((resolve) => {
      setTimeout(() => resolve(import('@/components/common/Card')), 2000);
    }),
  {
    loading: () => (
      <div className='bg-white rounded-xl overflow-hidden shadow-sm p-4 animate-pulse'>
        <div className='bg-gray-200 h-48 w-full rounded-xl mb-4' />
        <div className='h-4 bg-gray-200 rounded w-3/4 mb-2' />
        <div className='h-4 bg-gray-200 rounded w-1/2 mb-4' />
        <div className='h-5 bg-gray-200 rounded w-1/4' />
      </div>
    ),
  }
);

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => (
    <div className='relative w-[95%] mx-auto h-[481px] bg-gray-200 rounded-3xl overflow-hidden animate-pulse' />
  ),
});

const filters = [
  'All',
  'Top Villa',
  'Free Reschedule',
  'Book Now, Pay Later',
  'Self CheckIn',
  'Instant Book',
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <head>
        <title>Property Listings</title>
      </head>
      <main>
        {/* Different Property Images */}
        <section
          className='
            flex items-center w-[95%] mx-auto h-[100px] gap-4 lg:gap-1 px-2 py-2
            overflow-x-auto lg:overflow-visible scroll-smooth snap-x lg:snap-none
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            justify-start lg:justify-between'
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center flex-shrink-0 snap-start'
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={item.height || 40}
                className=''
              />
              <h6 className='text-[#616161] text-xs mt-2 font-medium'>
                {item.label}
              </h6>
            </div>
          ))}
        </section>

        {/* Hero Section */}
        <HeroSection />

        {/* Filter section */}
        <section className='bg-white py-4 sm:py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center w-[95%] mx-auto gap-4 text-xs sm:text-sm'>
            {/* Filter Pills */}
            <div className='w-full sm:w-auto'>
              <div className='max-w-5xl mx-auto flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start'>
                {filters.map((filter) => (
                  <Pill
                    key={filter}
                    label={filter}
                    active={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  />
                ))}
              </div>
            </div>

            {/* Filter & Sort Buttons */}
            <div className='flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-end'>
              <div className='px-4 sm:px-6 py-2 rounded-full text-black border border-[#E9E9E9]'>
                <Button
                  className='bg-white'
                  label='Filter'
                  onClick={() => {
                    /* handle filter click */
                  }}
                />
              </div>

              <div className='px-4 sm:px-6 py-2 rounded-full text-black border border-[#E9E9E9]'>
                <Button
                  className='bg-white'
                  label='Sort by: Highest Price'
                  onClick={() => {
                    /* handle search click */
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section className='w-[95%] mx-auto py-4 bg-white text-sm'>
          <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-8'>
            {properties.map((property) => (
              <Link key={property.id} href={`/property/${property.id}`}>
                <Card key={property.name} card={property} />
              </Link>
            ))}
          </div>
          <div className=' flex flex-col items-center justify-center bg-[#ffffff]  gap-4 h-[150px] '>
            <div className='bg-black px-6 py-2 rounded-full text-white'>
              <Button
                label='Show more'
                onClick={() => {
                  /* show more */
                }}
              />
            </div>
            <h1 className=' text-black'>Click to see more listings</h1>
          </div>
        </section>
      </main>
    </>
  );
}
