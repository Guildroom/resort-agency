export interface Room {
  id: string;
  name: string;
  total: number;
  occupancy: number;
  img: string;
  content: {
    tagline: string;
    summary: string;
    mainDescription: string;
    spaces: Array<{
      title: string;
      description: string;
    }>;
    features: Array<{
      label: string;
      value: string;
    }>;
  };
}

export const rooms: Room[] = [
  {
    id: "1",
    name: "Two-Bedroom Private Pool Villa",
    total: 2,
    occupancy: 4,
    img: "public/villa/01-lescapade-villa-villa-pool-hero-9729.webp,public/villa/02-lescapade-villa-private-pool-9720.webp,public/villa/03-lescapade-villa-poolside-loungers-9732.webp,public/villa/04-lescapade-villa-living-room-hero-9645.webp,public/villa/05-lescapade-villa-living-room-wide-9639.webp,public/villa/06-lescapade-villa-living-room-angle-9648.webp,public/villa/07-lescapade-villa-dining-and-kitchen-9628.webp,public/villa/08-lescapade-villa-master-bedroom-hero-9685.webp,public/villa/09-lescapade-villa-master-bedroom-wide-9678.webp,public/villa/10-lescapade-villa-master-bedroom-dressing-9697.webp,public/villa/11-lescapade-villa-master-bathroom-9700.webp,public/villa/12-lescapade-villa-second-bedroom-hero-9747.webp,public/villa/13-lescapade-villa-second-bedroom-pool-view-9753.webp,public/villa/14-lescapade-villa-window-seat-9759.webp,public/villa/15-lescapade-villa-second-bathroom-9769.webp",
    content: {
      tagline: "Your Secluded Island Home with a Private Pool, Lush Gardens, and a Distant Ocean Horizon.",
      summary: "A spacious two-bedroom villa featuring a private swimming pool, a full kitchen, a soaking bathtub in the master suite, and tranquil garden views with a gentle glimpse of the distant sea.",
      mainDescription: "Created for families, friends, or travelers seeking extra space and seclusion, our Two-Bedroom Private Pool Villa feels like your own tranquil island home. Framed by tropical foliage that opens up to a peaceful, distant glimpse of the ocean horizon, the villa is centered around a private swimming pool and sunny terrace built for relaxed days outdoors.\n\nInside, the villa is thoughtfully laid out for effortless indoor-outdoor living. Both bedrooms are fully air-conditioned to keep you cool and comfortable day and night. The master bedroom offers an added touch of relaxation with a private en-suite bathroom featuring a deep soaking bathtub and hot-water shower. Whether you are preparing a light meal in the private kitchen, enjoying a drink from the mini bar, or gathering in the cozy living area in front of the Smart TV, every corner is made to feel welcoming and unpretentious. Wake up each morning to a complimentary freshly prepared breakfast included with your stay.",
      spaces: [
        {
          title: "Outdoor Pool & Views",
          description: "A private swimming pool and lounging deck set amidst tropical gardens, complemented by a calm, distant view of the sea."
        },
        {
          title: "The Master Bedroom",
          description: "A quiet, air-conditioned main bedroom complete with an en-suite bathroom featuring a soaking bathtub and hot-water shower."
        },
        {
          title: "The Second Bedroom",
          description: "A comfortable, fully air-conditioned guest room offering privacy and tranquil garden surroundings."
        },
        {
          title: "Living & Kitchen Area",
          description: "A relaxed lounge space with a Smart TV and mini bar, connected to a private kitchen ideal for longer stays or casual dining."
        }
      ],
      features: [
        { label: "Layout", value: "Two private, fully air-conditioned bedrooms" },
        { label: "Outdoor Space", value: "Exclusive-use private swimming pool and sun terrace" },
        { label: "View", value: "Tropical garden surroundings with a distant glimpse of the ocean" },
        { label: "Master Bathroom", value: "En-suite bathroom with a soaking bathtub and hot-water shower" },
        { label: "Kitchen & Drinks", value: "Private kitchen and stocked in-villa mini bar" },
        { label: "Entertainment", value: "Comfortable living area equipped with a Smart TV" },
        { label: "Breakfast", value: "Complimentary freshly prepared daily breakfast" }
      ]
    }
  },
  {
    id: "2",
    name: "Garden Bungalow",
    total: 7,
    occupancy: 2,
    img: "public/bungalow/01-lescapade-bungalow-bedroom-hero-9555.webp,public/bungalow/02-lescapade-bungalow-bedroom-front-9558.webp,public/bungalow/03-lescapade-bungalow-bedroom-angle-9561.webp,public/bungalow/04-lescapade-bungalow-bedroom-garden-view-9564.webp,public/bungalow/05-lescapade-bungalow-minibar-and-wardrobe-9568.webp,public/bungalow/06-lescapade-bungalow-private-veranda-9576.webp,public/bungalow/07-lescapade-bungalow-veranda-seating-9586.webp,public/bungalow/08-lescapade-bungalow-veranda-view-9592.webp,public/bungalow/09-lescapade-bungalow-garden-exterior-9579.webp,public/bungalow/10-lescapade-bungalow-bungalow-entrance-9595.webp,public/bungalow/11-lescapade-bungalow-open-air-vanity-9573.webp,public/bungalow/12-lescapade-bungalow-bathroom-vanity-9603.webp,public/bungalow/13-lescapade-bungalow-open-air-bathroom-9606.webp,public/bungalow/14-lescapade-bungalow-shower-detail-9570.webp,public/bungalow/15-lescapade-bungalow-bathroom-shower-9609.webp",
    content: {
      tagline: "An Intimate Island Hideaway Surrounded by Lush Nature.",
      summary: "Tucked away within vibrant tropical gardens, our Garden Bungalow offers a peaceful, private retreat designed for unhurried island living and restful comfort.",
      mainDescription: "Surrounded by rich tropical greenery and calming natural sounds, the Garden Bungalow is a quiet sanctuary where boutique charm meets everyday comfort. Designed to help you slow down and unwind, each bungalow offers an inviting, light-filled space with a relaxed atmosphere.\n\nInside, the cool, air-conditioned bedroom is centered around a spacious king-size bed dressed in crisp, soft linens for a restful night's sleep. Spend quiet afternoons on your terrace with a chilled drink from the in-room mini bar while looking out over the lush garden, or refresh beneath a warm, soothing shower after a day of exploring. Every stay includes a freshly prepared complimentary daily breakfast to start your morning at your own pace.",
      spaces: [
        {
          title: "The Bedroom",
          description: "A calm, air-conditioned space featuring a comfortable king-size bed and soft, breathable linens."
        },
        {
          title: "The Setting",
          description: "Surrounded by well-tended tropical gardens that offer natural privacy and a soothing green view."
        },
        {
          title: "The Bathroom",
          description: "A clean, private en-suite bathroom equipped with a reliable hot-water shower."
        }
      ],
      features: [
        { label: "Bedding", value: "Spacious King-Size Bed" },
        { label: "View", value: "Lush tropical garden view" },
        { label: "Comfort", value: "Individually controlled air conditioning" },
        { label: "Bathroom", value: "Private en-suite bathroom with hot-water shower" },
        { label: "Refreshments", value: "Stocked in-room mini bar" },
        { label: "Breakfast", value: "Complimentary freshly prepared daily breakfast" }
      ]
    }
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}

export function getRoomImages(room: Room): string[] {
  return room.img
    .split(",")
    .map((path) => path.trim().replace(/^public\//, "/"))
    .filter(Boolean);
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getAvailability(room: Room, checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return room.total;
  const seed = hashString(`${room.id}|${checkIn}|${checkOut}`);
  const booked = seed % (room.total + 1);
  return room.total - booked;
}
