import { PropertyProps, ReviewProps } from "@/interfaces";
import { categoriesProps } from "@/interfaces";

export const HeroBg = "/images/Image 1.png";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "villa-ocean-breeze",
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/images/List 1.png",
    discount: "",
    description: `
Tucked away on the sun-drenched beaches of Seminyak, Villa Ocean Breeze is your tropical sanctuary. Begin your mornings with the gentle sound of waves washing ashore while sipping fresh juice on the pool deck. Spend your days exploring boutique shops and beach clubs or lounging under swaying palm trees. For water lovers, surfing, snorkeling, and paddleboarding are just steps away. In the evenings, gather with friends in the open-air living room, dine on freshly prepared seafood, and watch the sky explode into vibrant shades of orange and purple. The villa balances modern elegance with Balinese charm, creating the perfect escape for families or small groups.

The space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with rain shower, Dual vanity, Walk-in closet, Smart TV, Balcony with panoramic ocean view  

• Bedroom 2: Queen size bed, Shared bathroom with rain shower, Garden view  

• Bedroom 3: Twin beds, Shared bathroom, Direct pool access  
`,
    amenities: [
      "pool",
      "wifi",
      "sunrise",
      "bed",
      "chef",
      "bathtub",
      "pan",
      "housekeeping",
      "bell",
      "credit card",
    ],
  },
  {
    id: "mountain-escape-chalet",
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/images/image 3.png",
    discount: "30",
    description: `
    Mountain Escape Chalet combines rustic charm with modern comfort in the heart of Aspen. Begin your day with a steaming cup of coffee on the deck, where snow-capped peaks stretch endlessly into the horizon. In winter, enjoy world-class skiing and snowboarding before returning to cozy evenings by the roaring fireplace. In summer, the chalet transforms into a hiker’s dream, with trails winding through wildflower meadows and alpine forests. The warm wooden interiors and spacious design create the perfect balance of adventure and relaxation, ideal for families or groups seeking a true mountain retreat. 
    ${""}
    The space  
    BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with soaking tub, Fireplace, Balcony with mountain view  
• Bedroom 2: Queen size bed, Shared bathroom with rain shower  
• Bedroom 3: Bunk beds, Shared bathroom, Great for children  
• Bedroom 4: Queen size bed, Shared bathroom, Forest view  
`,
    amenities: [
      "mountain",
      "hot tub",
      "bed",
      "pool",
      "wifi",
      "people",
      "chef",
      "housekeeping",
      "bartender",
      "bathtub",
    ],
  },
  {
    id: "cozy-desert-retreat",
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/images/image 4.png",
    discount: "",
    description: `
Set against the stunning red rock formations of Sedona, Desert Mirage Retreat is a haven for those seeking tranquility and adventure. Start your day with yoga on the sunlit terrace, then set out to explore hiking trails that weave through sandstone cliffs and desert canyons. Cool off in the private pool before enjoying dinner al fresco under the starlit desert sky. With its modern design and sweeping views, this retreat blends natural beauty with luxury living.

The space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with rain shower and soaking tub, Terrace access, Desert view  
• Bedroom 2: Queen size bed, Shared bathroom with walk-in shower  
• Bedroom 3: Twin beds, Shared bathroom, Garden view  
`,
    amenities: [
      "sunrise",
      "wifi",
      "pool",
      "credit card",
      "housekeeping",
      "chef",
      "bathtub",
      "people",
      "bartender",
      "pan",
    ],
  },
  {
    id: "city-lights-penthouse",
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/images/List 4.png",
    discount: "15",
    description: `Experience New York from a whole new perspective at the City Lights Penthouse. Start your mornings with breathtaking views of Manhattan’s skyline, sipping coffee as the city awakens beneath you. Wander through the vibrant streets of New York, then retreat to your private sanctuary above it all. Floor-to-ceiling windows frame the dazzling skyline, creating the perfect backdrop for both quiet evenings and lively gatherings. When the city lights come alive, relax with friends in the open-plan lounge or step out onto the balcony to soak in the glittering night views. 

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with walk-in rain shower, Dual vanity, Walk-in closet, Floor-to-ceiling windows, Balcony with panoramic city views  
• Bedroom 2: Queen size bed, Shared bathroom with modern fixtures, Closet, City view `,
    amenities: [
      "wifi",
      "bed",
      "bathtub",
      "credit card",
      "pool",
      "chef",
      "housekeeping",
      "people",
      "mountain",
      "sunrise",
    ],
  },
  {
    id: "riverside-cabin",
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/images/image 6.png",
    discount: "20",
    description: `
Hidden along a quiet riverbank, Riverside Cabin is the perfect hideaway for nature lovers. Wake up to birdsong and the soft murmur of flowing water. Spend your afternoons kayaking, fishing, or hiking through the dense Canadian forest. When night falls, gather around the outdoor fire pit, roast marshmallows, and share stories under a canopy of stars. The cabin’s cozy wood-paneled interior provides warmth and comfort, making it a romantic escape for couples or a peaceful retreat for small families.

The space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: Queen size bed, Ensuite bathroom with shower, River view  
• Bedroom 2: Twin beds, Shared bathroom, Forest view  
`,
    amenities: [
      "bathtub",
      "wifi",
      "pool",
      "chef",
      "housekeeping",
      "pan",
      "people",
      "credit card",
      "bell",
      "hot tub",
    ],
  },
  {
    id: "modern-beachfront-villa",
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/images/image 7.png",
    discount: "",
    description: `The Modern Beachfront Villa in Sidemen, Bali offers an unparalleled luxury escape. Wake up to the sound of waves gently crashing on the shore and start your mornings with a refreshing swim in your private infinity pool. Spend the day lounging under the sun, taking long walks on the pristine beach, or indulging in water sports just steps away from your villa. Your private chef is ready to prepare delicious Balinese and international cuisine, so you can enjoy gourmet meals in the comfort of the open-air dining pavilion while overlooking panoramic ocean views. 

Evenings are perfect for unwinding with friends and family in the spacious living areas, designed with modern elegance and tropical charm. Large floor-to-ceiling windows bring the outdoors inside, flooding the villa with natural light and ocean breezes.  

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with rain shower and soaking tub, Ocean view, Direct pool access  
• Bedroom 2: King size bed, Ensuite bathroom, Garden view  
• Bedroom 3: Queen size bed, Ensuite bathroom, Balcony access  
• Bedroom 4: King size bed, Shared bathroom, Pool view  
• Bedroom 5: Twin beds, Shared bathroom, Suitable for kids `,
    amenities: [
      "pool",
      "wifi",
      "sunrise",
      "bathtub",
      "chef",
      "bed",
      "housekeeping",
      "bartender",
      "people",
      "credit card",
    ],
  },
  {
    id: "lakeside-chalet",
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/images/image 8.png",
    discount: "10",
    description: `
Overlooking Lake Wakatipu, Lakeside Luxury Lodge offers breathtaking views of snow-dusted mountains and clear waters. Guests can kayak, hike, or ski, depending on the season, and end their day with a glass of New Zealand wine on the spacious deck. The lodge blends rustic wood features with contemporary luxury, creating the ultimate year-round escape.

The space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with soaking tub and lake view  
• Bedroom 2: Queen size bed, Shared bathroom  
• Bedroom 3: Twin beds, Shared bathroom  
• Bedroom 4: Queen size bed, Ensuite bathroom with shower  
`,
    amenities: [
      "hot tub",
      "wifi",
      "bed",
      "housekeeping",
      "pool",
      "chef",
      "bathtub",
      "pan",
      "people",
      "credit card",
    ],
  },
  {
    id: "tropical-graden-villa",
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "/images/image 9.png",
    discount: "25",
    description: `
Steps from the soft sands of Patong Beach, Tropical Beach Bungalow is a cozy stay for travelers seeking sun and sea. Spend your mornings swimming in turquoise waters, afternoons exploring local street markets, and evenings enjoying Thai cuisine at beachfront restaurants. The bungalow’s simple yet charming design makes it a perfect budget-friendly option for couples.

The space  
BEDROOM & BATHROOM  
• Bedroom 1: Queen size bed, Ensuite bathroom with shower, Beach access  
`,
    amenities: [
      "wifi",
      "pool",
      "sunrise",
      "bathtub",
      "chef",
      "bed",
      "housekeeping",
      "bell",
      "people",
      "credit card",
    ],
  },
  {
    id: "urban-loft",
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/images/List 9.png",
    discount: "",
    description: `
Located in the heart of Manhattan, Urban Loft Apartment offers a sleek, modern stay with incredible city views. Floor-to-ceiling windows flood the loft with natural light, while exposed brick walls add industrial chic vibes. Step outside, and you’re minutes away from Broadway theaters, trendy cafes, and world-class shopping. Whether you’re a city explorer or a business traveler, this apartment offers comfort, convenience, and style.

The space  
BEDROOM & BATHROOM  
• Bedroom 1: Queen size bed, Ensuite bathroom with walk-in shower, City view  
• Living space: Sofa bed for additional guest  
`,
    amenities: [
      "wifi",
      "bed",
      "pool",
      "credit card",
      "bathtub",
      "chef",
      "people",
      "housekeeping",
      "bartender",
      "sunrise",
    ],
  },
  {
    id: "secluded-forest-cabin",
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/images/List 10.png",
    discount: "40",
    description: `Tucked deep within the lush forests of Whistler, the Secluded Forest Cabin offers the perfect blend of privacy, comfort, and rustic charm. Start your mornings with the sounds of birds and rustling leaves as you sip coffee on the wraparound deck. Spend the day hiking scenic mountain trails, skiing nearby slopes, or simply enjoying the peace of nature right outside your door.  

Evenings here are all about cozy relaxation — gather around the fireplace with loved ones, or soak in the private hot tub under a canopy of stars. The cabin is designed for both adventure and rest, offering modern amenities while maintaining a warm, woodsy atmosphere.  

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King bed, Ensuite bathroom, Fireplace, Forest views  
• Bedroom 2: Queen bed, Shared bathroom  
• Bedroom 3: Double bed, Shared bathroom  
• Bedroom 4: Twin beds, Ideal for kids  `,
    amenities: [
      "bathtub",
      "wifi",
      "hot tub",
      "bed",
      "housekeeping",
      "chef",
      "pool",
      "credit card",
      "people",
      "sunrise",
    ],
  },
  {
    id: "cliffside-villa",
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/images/image 12.png",
    discount: "50",
    description: `Perched high above the Amalfi Coast, Cliffside Villa is the epitome of Italian luxury living. From the moment you step onto the expansive terrace, you’re greeted with sweeping panoramic views of the Tyrrhenian Sea, colorful cliffside villages, and endless skies. The infinity pool seemingly blends into the horizon, creating a serene atmosphere that’s perfect for relaxation or entertaining guests.  

Inside, the villa is designed with elegance and comfort in mind, featuring open living spaces, vaulted ceilings, and floor-to-ceiling windows that frame the dazzling seascape. Gourmet kitchens and plush bedrooms ensure that every aspect of your stay is filled with comfort and convenience.  

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King bed, Ensuite with soaking tub and sea view  
• Bedroom 2: Queen bed, Ensuite bathroom, Balcony with sea views  
• Bedroom 3: Queen bed, Ensuite bathroom, Garden view  
• Bedroom 4: Twin beds, Ensuite bathroom  `,
    amenities: [
      "wifi",
      "pool",
      "chef",
      "bathtub",
      "bed",
      "housekeeping",
      "credit card",
      "people",
      "hot tub",
      "sunrise",
    ],
  },
  {
    id: "coastal-escape-villa",
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/images/List 12.png",
    discount: "",
    description: `
Perched on the cliffs of Oia, Coastal Harbor House overlooks the dazzling blue waters of the Aegean Sea. Whitewashed walls and bright blue accents reflect traditional Cycladic architecture. Spend your days soaking in the infinity pool while gazing at sailboats drifting across the horizon. At sunset, sip wine on the terrace as the entire sky turns pink and orange. The villa provides unmatched romance and relaxation, making it a dream for couples and honeymooners.

The space  
BEDROOM & BATHROOM  
• Bedroom 1 - Primary: King size bed, Ensuite bathroom with rain shower, Terrace with ocean view  
• Bedroom 2: Queen size bed, Ensuite bathroom with walk-in shower, Garden view  
`,
    amenities: [
      "pool",
      "wifi",
      "bathtub",
      "bed",
      "chef",
      "housekeeping",
      "credit card",
      "mountain",
      "people",
      "pan",
    ],
  },
  {
    id: "historical-villa",
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/images/List 13.png",
    discount: "35",
    description: `Step back in time with a stay at the Historical Villa in the heart of Tuscany. Surrounded by rolling vineyards and olive groves, this centuries-old estate offers timeless charm blended with modern comforts. Wake up each morning to a complimentary Tuscan breakfast, served with freshly baked bread and locally sourced cheeses.  

Inside, vaulted ceilings, terracotta floors, and antique furnishings create an atmosphere of elegance and authenticity. The villa is designed for comfort, featuring spacious bedrooms, luxurious bathrooms, and a sunlit living room perfect for gatherings.  

The Space  
BEDROOM & BATHROOM  
• Bedroom 1: King bed, Ensuite bathroom, Garden view  
• Bedroom 2: Queen bed, Shared bathroom, Historical décor `,
    amenities: [
      "bathtub",
      "bed",
      "chef",
      "wifi",
      "pool",
      "housekeeping",
      "credit card",
      "people",
      "sunrise",
      "bartender",
    ],
  },
  {
    id: "downtown-apartment",
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.7,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: "/images/List 14.png",
    discount: "",
    description: `Stay at the heart of Tokyo in this modern downtown apartment designed for city explorers. Just steps away from major shopping districts, vibrant nightlife, and efficient public transport, the apartment is your perfect hub for experiencing everything the city has to offer.  

Inside, sleek Japanese minimalism meets modern convenience with a bright open-plan design, comfortable furnishings, and high-speed WiFi.  

The Space  
BEDROOM & BATHROOM  
• Bedroom: Queen bed, Ensuite bathroom, City views`,
    amenities: [
      "wifi",
      "pool",
      "bed",
      "bathtub",
      "chef",
      "housekeeping",
      "credit card",
      "people",
      "hot tub",
      "sunrise",
    ],
  },
  {
    id: "luxury-safari-lodge",
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/images/image 17.png",
    discount: "20",
    description: `Set in the breathtaking Serengeti, the Luxury Safari Lodge offers an unforgettable African adventure with unmatched style and comfort. Begin your day with guided tours led by expert rangers, spotting elephants, lions, and giraffes in their natural habitat.  

The lodge itself is a retreat of opulence, featuring spacious suites with panoramic views of the savanna, outdoor lounges, and elegant dining spaces where complimentary breakfasts and dinners are served.  

The Space  
BEDROOM & BATHROOM  
• Bedroom 1: King bed, Ensuite with soaking tub, Private deck  
• Bedroom 2: Queen bed, Ensuite bathroom, Wildlife views  
• Bedroom 3: Queen bed, Ensuite bathroom, Canopy bed  
• Bedroom 4: Twin beds, Ensuite bathroom  `,
    amenities: [
      "pool",
      "wifi",
      "bathtub",
      "chef",
      "housekeeping",
      "bed",
      "credit card",
      "people",
      "mountain",
      "sunrise",
    ],
  },
  {
    id: "countryside-cottage",
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "/images/image 18.png",
    discount: "25",
    description: `Nestled in the rolling hills of the Cotswolds, the Countryside Cottage is a cozy escape for those seeking peace and simplicity. With its stone walls, wood-beamed ceilings, and roaring fireplace, this cottage captures the charm of the English countryside.  

Enjoy long walks through picturesque villages, explore local pubs, or simply unwind in the garden with a book and tea.  

The Space  
BEDROOM & BATHROOM  
• Bedroom 1: King bed, Shared bathroom  
• Bedroom 2: Twin beds, Shared bathroom`,
    amenities: [
      "wifi",
      "bathtub",
      "bed",
      "housekeeping",
      "chef",
      "credit card",
      "pool",
      "people",
      "sunrise",
      "pan",
    ],
  },
];

export const categories: categoriesProps[] = [
  { src: "/logos/living-room 1.png", alt: "Rooms", label: "Rooms" },
  { src: "/logos/mansion 1.png", alt: "Mansion", label: "Mansion" },
  { src: "/logos/farm 1.png", alt: "Countryside", label: "Countryside" },
  { src: "/logos/villa 1.png", alt: "Villa", label: "Villa" },
  { src: "/logos/palm-tree 1.png", alt: "Tropical", label: "Tropical" },
  { src: "/logos/key-chain 1.png", alt: "New", label: "New" },
  {
    src: "/logos/swimming-pool 1.png",
    alt: "Amazing pool",
    label: "Amazing pool",
  },
  { src: "/logos/vacations 1.png", alt: "Beach house", label: "Beach house" },
  { src: "/logos/island (1) 1.png", alt: "Island", label: "Island" },
  { src: "/logos/tent 1.png", alt: "Camping", label: "Camping" },
  { src: "/logos/apartment 1.png", alt: "Apartment", label: "Apartment" },
  { src: "/logos/home 1.png", alt: "House", label: "House" },
  { src: "/logos/cottage 1.png", alt: "Lakefront", label: "Lakefront" },
  { src: "/logos/barn 1.png", alt: "Farm house", label: "Farm house" },
  { src: "/logos/treehouse (1) 1.png", alt: "Treehouse", label: "Treehouse" },
  { src: "/logos/cabin 1.png", alt: "Cabins", label: "Cabins" },
  { src: "/logos/castle-tower 1.png", alt: "Castles", label: "Castles" },
  { src: "/logos/farm 1.png", alt: "Countryside", label: "Countryside" },
];

export const review: Record<string, ReviewProps[]> = {
  "villa-ocean-breeze": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],

  "mountain-escape-chalet": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],

  "cozy-desert-retreat": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "city-lights-penthouse": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "riverside-cabin": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "modern-beachfront-villa": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "lakeside-chalet": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "tropical-graden-villa": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "urban-loft": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "secluded-forest-cabin": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "cliffside-villa": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "coastal-escape-villa": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "historical-villa": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "downtown-apartment": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "luxury-safari-lodge": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
  "countryside-cottage": [
    {
      avatar: "/avatars/avatar 1.png",
      name: "Kerry",
      rating: 4.89,
      comment:
        "Villa Ocean Breeze exceeded our expectations. The staff were attentive yet gave us privacy, the pool was breathtaking, and we couldn’t get enough of the ocean view from the balcony.",
    },
    {
      avatar: "/avatars/avatar 2.png",
      name: "Oliver",
      rating: 4.58,
      comment:
        "The Countryside Cottage was charming and peaceful. We loved the fireplace in the evenings and the easy access to nearby villages. It was the perfect spot to disconnect and relax.",
    },

    {
      avatar: "/avatars/avatar 3.png",
      name: "Amina",
      rating: 4.97,
      comment:
        "Staying at the Luxury Safari Lodge was the highlight of our trip. The guided tours were incredible, and we saw the Big Five up close. The lodge itself felt like a five-star resort, and the staff made every moment unforgettable.",
    },
    {
      avatar: "/avatars/avatar 4.png",
      name: "Hiroshi",
      rating: 4.8,
      comment:
        "The Downtown Apartment was a great choice for our Tokyo trip. It was clean, modern, and close to everything we needed — restaurants, trains, and nightlife. The view of the city skyline from the balcony was a bonus.",
    },
  ],
};
