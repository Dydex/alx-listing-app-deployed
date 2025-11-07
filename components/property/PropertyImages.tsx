import { PropertyProps } from "@/interfaces";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const PropertyImage: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const router = useRouter();

  const images = [
    property.image,
    property.image,
    property.image,
    property.image,
  ];

  // State management for Image in small screen
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check which image is in view
  const handleScroll = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      const index = Math.round(scroll.scrollLeft / scroll.offsetWidth);
      setCurrentIndex(index + 1);
    }
  };

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) scroll.addEventListener("scroll", handleScroll);
    return () => scroll?.removeEventListener("scroll", handleScroll);
  }, []);

  // State Management for TabsBar
  const [showTabs, setShowTabs] = useState(false);
  const [active, setActive] = useState("description");

  useEffect(() => {
    const hero = document.getElementById("images");
    const observer = new IntersectionObserver(
      ([entry]) => setShowTabs(!entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.8 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section id="images" className="w-full sm:w-[95%] mx-auto mt-0 md:mt-16">
        <div className="flex flex-col-reverse sm:flex-col">
          {/* Property Name & Location  */}
          <div className="pl-4 sm:pl-0 mt-4 sm:mt-0">
            <h1 className="text-2xl sm:text-4xl font-bold">{property.name}</h1>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-2  mt-2">
                <Image
                  src="/icons/Star 2.png"
                  alt="Star"
                  width={16}
                  height={2}
                />
                <span className="text-yellow-500">{property.rating} stars</span>
              </div>
              <div className="flex items-start space-x-2 mt-2">
                <Image
                  src="/icons/Location.png"
                  alt="Location"
                  width={16}
                  height={20}
                />
                <span>
                  {property.address.city}, {property.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Image Grid for Tabs/Desktop */}
          <div className="hidden sm:flex gap-2 mt-4 w-full">
            {/* Left big image */}
            <div className="relative w-1/2 h-96">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover rounded-tl-lg rounded-bl-lg"
              />
            </div>

            {/* Right side grid */}
            <div className="flex flex-col w-1/2 gap-2">
              {/* Top wide image */}
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover rounded-tr-lg"
                />
              </div>

              {/* Bottom two side-by-side images */}
              <div className="flex gap-2 h-46">
                <div className="relative w-1/2">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-1/2">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover rounded-br-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid for Mobile */}
          <div className="relative sm:hidden ">
            <div
              className="flex h-15 items-center gap-2 w-[95%] mx-auto"
              onClick={() => router.back()}
            >
              <Image
                src="/icons/Arrow Left.png"
                alt="Arrow"
                width={16}
                height={6}
              />
              <h6>Return</h6>
            </div>
            <div
              ref={scrollRef}
              className=" flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth w-full"
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={property.name}
                  className="w-full h-80 flex-shrink-0 object-cover snap-center"
                />
              ))}
            </div>

            <div className="absolute bottom-2 right-3 bg-black/60 text-white text-sm px-2 py-1 rounded-full">
              {currentIndex}/{images.length}
            </div>
          </div>
        </div>

        <ul className="pl-4 sm:pl-0 flex flex-wrap space-x-4 mt-4">
          {property.category.map((amenity, index) => (
            <li
              key={index}
              className="bg-[#E9E9E9] pl-4 pt-2 pb-2 pr-4 rounded-full text-xs sm:text-lg text-black"
            >
              {amenity}
            </li>
          ))}
        </ul>
      </section>

      <div className="hidden md:block">
        {showTabs && (
          <div className="fixed top-0 z-40 w-full bg-white border-b border-[#E6E6E6] flex py-3 transition-all duration-300 shadow-sm">
            <div className="flex justify-between w-[50%] px-8">
              {["description", "offers", "reviews"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium ${
                    active === id
                      ? "text-[#34967C] border-b-2 border-[#34967C] pb-1"
                      : "text-gray-500"
                  }`}
                >
                  {id === "description"
                    ? "Description"
                    : id === "offers"
                    ? "What We Offer"
                    : "Reviews"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyImage;
