import { Product, Collection } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Asymmetrical Silk Column Dress",
    price: 495,
    description:
      "A masterpiece of minimalist construction, this silk column dress features a subtle asymmetrical neckline and a deep back vent for effortless movement.",
    images: [
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=687&auto=format&fit=crop&sig=2",
    ],
    category: "Dresses",
    details: [
      "100% Mulberry Silk",
      "Bias cut for natural stretch",
      "Invisible side zip",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "2",
    name: "Scrubbed Linen Studio Gown",
    price: 320,
    description:
      "Architectural in its simplicity, the Studio Gown is crafted from heavy-weight Italian linen that holds its silhouette with quiet confidence.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633225954-b3921d481aac?q=80&w=1200&auto=format&fit=crop",
    ],
    category: "Studio",
    details: [
      "100% Italian Linen",
      "Structured bodice",
      "Side pockets",
      "Hand-finished hem",
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: "3",
    name: "Midnight Crepe Evening Wrap",
    price: 550,
    description:
      "A sophisticated take on the wrap dress, rendered in high-twist midnight crepe. Designed for the woman who appreciates timeless proportions.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    ],
    category: "Collections",
    details: [
      "High-twist viscose crepe",
      "Adjustable tie waist",
      "Full-length sleeve",
      "Lined in silk",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Pleated Tulle Atelier Dress",
    price: 780,
    description:
      "Each pleat is hand-pressed in our local atelier. A dramatic yet ethereal silhouette that defines modern luxury.",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    ],
    category: "Studio",
    details: [
      "Polyamide Tulle",
      "Silk slip included",
      "Hand-pressed pleats",
      "Limited edition",
    ],
    sizes: ["S", "M"],
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "summer-26",
    title: "The Solstice Edit",
    subtitle: "Spring / Summer ’26",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
  },
];
