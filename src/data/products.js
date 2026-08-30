export const categories = [
  { id: "mac", name: "Mac", emoji: "💻" },
  { id: "ipad", name: "iPad", emoji: "📱" },
  { id: "iphone", name: "iPhone", emoji: "📱" },
  { id: "watch", name: "Watch", emoji: "⌚" },
  { id: "airpods", name: "AirPods", emoji: "🎧" },
  { id: "tv-home", name: "TV & Home", emoji: "📺" },
  { id: "accessories", name: "Accessories", emoji: "🔌" },
];

const defaults = {
  mac: {
    tagline: "Supercharged for pros and everyone.",
    colors: ["Space Gray", "Silver"],
    description:
      "A powerful Mac with all-day battery life, a brilliant display, and blazing-fast Apple silicon performance.",
    specs: {
      Chip: "Apple silicon",
      Memory: "16GB unified memory",
      Storage: "512GB SSD",
      Display: "Liquid Retina",
      Ports: "Thunderbolt 4",
    },
  },
  ipad: {
    tagline: "Your next computer is not a computer.",
    colors: ["Space Gray", "Silver", "Blue", "Starlight"],
    description:
      "A stunning display, incredible performance, and all-day battery life in a thin, light design.",
    specs: {
      Chip: "Apple silicon",
      Display: "Liquid Retina",
      Storage: "128GB",
      Camera: "12MP Wide",
      Connectivity: "Wi-Fi 6E",
    },
  },
  iphone: {
    tagline: "The magic continues.",
    colors: ["Black", "White", "Blue", "Pink"],
    description:
      "A gorgeous display, a fast chip, and an advanced camera system in a durable, colorful design.",
    specs: {
      Chip: "A-series chip",
      Display: "Super Retina XDR",
      Camera: "48MP Fusion system",
      Storage: "128GB",
      Battery: "All-day battery life",
    },
  },
  watch: {
    tagline: "Smarter. Brighter. Mightier.",
    colors: ["Midnight", "Starlight", "Silver", "Rose Gold"],
    description:
      "Stay connected, active, healthy, and safe with the brightest Apple Watch display yet.",
    specs: {
      Display: "Always-On Retina",
      Health: "ECG, Blood Oxygen",
      Battery: "Up to 24 hours",
      Water: "50m water resistant",
      Connectivity: "GPS + Cellular",
    },
  },
  airpods: {
    tagline: "Sound that surrounds you.",
    colors: ["White"],
    description:
      "Rich, immersive sound with a comfortable fit and seamless switching between your Apple devices.",
    specs: {
      Chip: "Apple H-series",
      Audio: "Personalized Spatial Audio",
      Battery: "All-day listening",
      Case: "Wireless charging case",
      Noise: "Active Noise Cancellation",
    },
  },
  "tv-home": {
    tagline: "The Apple experience. Cinematic.",
    colors: ["Black", "White"],
    description:
      "Bring your favorite content and rooms to life with stunning picture and room-filling sound.",
    specs: {
      Video: "4K HDR, Dolby Vision",
      Audio: "Dolby Atmos",
      Smart: "Home hub support",
      Connectivity: "Wi-Fi, Thread",
      Assistant: "Hands-free Siri",
    },
  },
  accessories: {
    tagline: "The perfect companion.",
    colors: ["White"],
    description:
      "Genuine Apple accessories designed to work perfectly with your devices.",
    specs: {
      Compatibility: "Apple devices",
      Connector: "USB-C",
      Warranty: "1 year limited",
      Design: "Premium materials",
      Find: "Find My support",
    },
  },
};

const STORAGE = {
  iphone: [
    { label: "128GB", add: 0 },
    { label: "256GB", add: 150 },
    { label: "512GB", add: 400 },
    { label: "1TB", add: 700 },
  ],
  ipad: [
    { label: "128GB", add: 0 },
    { label: "256GB", add: 150 },
    { label: "512GB", add: 450 },
    { label: "1TB", add: 900 },
  ],
  mac: [
    { label: "256GB", add: 0 },
    { label: "512GB", add: 300 },
    { label: "1TB", add: 600 },
    { label: "2TB", add: 1200 },
  ],
};

const catalogue = {
  mac: [
    ["MacBook Air 13\u2033 M4", 2749, 2999, "New"],
    ["MacBook Air 15\u2033 M4", 3199, null, "New"],
    ["MacBook Pro 14\u2033 M5 Pro", 5299, null, "New"],
    ["MacBook Pro 16\u2033 M5 Max", 7499, null, null],
    ["MacBook Air 13\u2033 M3", 2299, 2499, null],
    ["MacBook Pro 14\u2033 M4", 3999, null, null],
    ["iMac 24\u2033 M4", 3199, null, null],
    ["Mac mini M4", 1449, null, null],
    ["Mac mini M4 Pro", 2599, null, null],
    ["Mac Studio M4 Max", 6999, null, null],
    ["Mac Pro M2 Ultra", 13999, null, null],
    ["MacBook Neo 13\u2033", 1499, 1699, "New"],
  ],
  ipad: [
    ["iPad Pro 13\u2033 M5", 3299, null, "New"],
    ["iPad Pro 11\u2033 M5", 2599, null, "New"],
    ["iPad Air 13\u2033 M4", 1999, null, null],
    ["iPad Air 11\u2033 M4", 1539, 1699, null],
    ["iPad (11th gen)", 899, null, null],
    ["iPad mini 7", 1199, null, null],
    ["iPad Pro 12.9\u2033 M4", 3099, 3299, null],
    ["iPad Air 11\u2033 M3", 1199, 1499, null],
    ["iPad (10th gen)", 799, 899, null],
    ["iPad mini 6", 999, null, null],
    ["iPad Pro 11\u2033 M4", 2399, null, null],
    ["iPad (9th gen)", 699, null, null],
  ],
  iphone: [
    ["iPhone 17 Pro Max", 3799, null, "New"],
    ["iPhone 17 Pro", 3299, null, "New"],
    ["iPhone 17", 1999, null, "New"],
    ["iPhone 17e", 1819, null, null],
    ["iPhone Air", 2699, null, "New"],
    ["iPhone 16 Pro Max", 3299, 3599, null],
    ["iPhone 16 Pro", 2899, null, null],
    ["iPhone 16", 1799, 1999, null],
    ["iPhone 16e", 1399, null, null],
    ["iPhone 15", 1399, 1799, null],
    ["iPhone 15 Plus", 1799, null, null],
    ["iPhone SE", 999, null, null],
  ],
  watch: [
    ["Apple Watch Series 11 (42mm)", 899, null, "New"],
    ["Apple Watch Series 11 (46mm)", 999, null, "New"],
    ["Apple Watch Ultra 3", 1799, null, "New"],
    ["Apple Watch SE 3", 549, null, null],
    ["Apple Watch Series 10", 649, 899, null],
    ["Apple Watch Ultra 2", 1699, null, null],
    ["Apple Watch SE 2", 449, 499, null],
    ["Apple Watch Series 9", 699, null, null],
    ["Apple Watch Hermès Ultra 3", 2999, null, null],
    ["Apple Watch Nike Series 11", 949, null, null],
    ["Apple Watch Series 11 Titanium", 1499, null, null],
    ["Apple Watch SE 3 (44mm)", 599, null, null],
  ],
  airpods: [
    ["AirPods Pro 3", 549, null, "New"],
    ["AirPods 4", 349, null, "New"],
    ["AirPods 4 (ANC)", 449, null, "New"],
    ["AirPods Max 2", 1519, null, "New"],
    ["AirPods Pro 2", 499, 549, null],
    ["AirPods 3", 329, null, null],
    ["AirPods Max", 1399, 1519, null],
    ["Beats Studio Pro", 699, null, null],
    ["Beats Fit Pro", 499, null, null],
    ["Beats Solo 4", 399, null, null],
    ["Powerbeats Pro 2", 549, null, null],
    ["Beats Studio Buds+", 349, null, null],
  ],
  "tv-home": [
    ["Apple TV 4K (128GB)", 449, null, null],
    ["Apple TV 4K (64GB)", 379, null, null],
    ["HomePod (2nd gen)", 649, null, null],
    ["HomePod mini", 169, null, null],
    ["HomePod mini (Orange)", 169, null, null],
    ["Apple TV 4K Wi-Fi", 399, 449, null],
    ["HomePod (White)", 649, null, null],
    ["HomePod mini (Blue)", 169, null, null],
    ["Siri Remote", 129, null, null],
    ["Apple TV 4K + HomePod Bundle", 799, 899, null],
    ["HomePod mini (Yellow)", 169, null, null],
    ["HomePod (Midnight)", 649, null, null],
  ],
  accessories: [
    ["Apple Pencil Pro", 249, null, "New"],
    ["Apple Pencil (USB-C)", 149, null, null],
    ["Magic Keyboard", 329, null, null],
    ["Magic Keyboard with Touch ID", 399, null, null],
    ["Magic Mouse", 199, null, null],
    ["Magic Trackpad", 249, null, null],
    ["AirTag", 69, null, null],
    ["AirTag (4 pack)", 219, 249, null],
    ["MagSafe Charger", 89, null, null],
    ["20W USB-C Power Adapter", 45, null, null],
    ["USB-C to Lightning Cable", 29, null, null],
    ["Polishing Cloth", 25, null, null],
  ],
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[\u2033"']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function resolveModel(category, name) {
  const n = name.toLowerCase();

  if (category === "iphone") {
    if (n.includes("17 pro"))
      return { imageKey: "iphone-17pro", colors: ["Silver", "Cosmic Orange", "Deep Blue"] };
    if (n.includes("air"))
      return { imageKey: "iphone-air", colors: ["Space Black", "Cloud White", "Light Gold", "Sky Blue"] };
    if (n.includes("17"))
      return { imageKey: "iphone-17", colors: ["Black", "White", "Lavender", "Sage", "Mist Blue"] };
    if (n.includes("16 pro"))
      return { imageKey: "iphone-16pro", colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"] };
    if (n.includes("16e"))
      return { imageKey: "iphone-16e", colors: ["Black", "White"] };
    if (n.includes("16"))
      return { imageKey: "iphone-16", colors: ["Black", "White", "Pink", "Teal", "Ultramarine"] };
    if (n.includes("15"))
      return { imageKey: "iphone-15", colors: ["Black", "Blue", "Green", "Yellow", "Pink"] };
    return { imageKey: "iphone-16e", colors: ["Black", "White"] };
  }

  if (category === "mac") {
    if (n.includes("macbook air") || n.includes("macbook neo"))
      return { imageKey: "mac-air", colors: ["Midnight", "Starlight", "Silver", "Sky Blue"] };
    if (n.includes("macbook pro"))
      return { imageKey: "mac-book-pro", colors: ["Space Black", "Silver"] };
    if (n.includes("imac"))
      return { imageKey: "imac", colors: ["Blue", "Green", "Pink", "Silver"] };
    if (n.includes("mac mini")) return { imageKey: "mac-mini", colors: ["Silver"] };
    if (n.includes("studio")) return { imageKey: "mac-studio", colors: ["Silver"] };
    return { imageKey: "mac-studio", colors: ["Silver"] };
  }

  if (category === "ipad") {
    if (n.includes("pro")) return { imageKey: "ipad-pro", colors: ["Space Black", "Silver"] };
    if (n.includes("mini"))
      return { imageKey: "ipad-mini", colors: ["Blue", "Starlight", "Space Gray", "Purple"] };
    return { imageKey: "ipad-air", colors: ["Blue", "Purple", "Starlight", "Space Gray"] };
  }

  if (category === "watch") {
    if (n.includes("ultra")) return { imageKey: "watch-ultra", colors: ["Natural Titanium"] };
    if (/\bse\b/.test(n)) return { imageKey: "watch-se", colors: ["Starlight"] };
    return { imageKey: "watch-series", colors: ["Rose Gold"] };
  }

  if (category === "airpods") {
    if (n.includes("max")) return { imageKey: "airpods-max", colors: ["Blue"] };
    if (n.includes("pro")) return { imageKey: "airpods-pro", colors: ["White"] };
    if (n.includes("airpods 4") || n.includes("airpods 3"))
      return { imageKey: "airpods-4", colors: ["White"] };
    return { imageKey: null, colors: ["Black"] }; 
  }

  if (category === "tv-home") {
    if (n.includes("homepod mini")) return { imageKey: "homepod-mini", colors: ["White"] };
    if (n.includes("homepod")) return { imageKey: "homepod", colors: ["White"] };
    return { imageKey: "apple-tv", colors: ["Black"] }; 
  }

  if (n.includes("airtag")) return { imageKey: "airtag", colors: ["Silver"] };
  return { imageKey: null, colors: ["White"] };
}

let idCounter = 1;

export const products = [];

for (const category in catalogue) {
  const items = catalogue[category]; 
  const base = defaults[category]; 
  
  const categoryInfo = categories.find((c) => c.id === category);
  const emoji = categoryInfo ? categoryInfo.emoji : "📦";

  for (const item of items) {
    const [name, price, oldPrice, badge] = item;
    const { imageKey, colors } = resolveModel(category, name);

    products.push({
      id: idCounter++,
      slug: slugify(name),
      name: name,
      category: category,
      imageKey: imageKey,
      price: price,
      oldPrice: oldPrice || undefined,
      badge: badge || undefined,
      emoji: emoji,
      tagline: base.tagline,
      colors: colors,
      description: base.description,
      specs: base.specs,
      storageOptions: STORAGE[category],
    });
  }
}

