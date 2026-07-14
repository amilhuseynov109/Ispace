const files = import.meta.glob("../assets/products/*.png", {
  eager: true,
  import: "default",
});
const img = {};
for (const path in files) {
  const name = path.split("/").pop().replace(/\.png$/, "");
  img[name] = files[path];
}

const FAMILY_IMAGES = {
  "iphone-17pro": {
    Silver: img["17pro-silver"],
    "Cosmic Orange": img["17pro-cosmicorange"],
    "Deep Blue": img["17pro-deepblue"],
  },
  "iphone-17": {
    Black: img["17-black"],
    White: img["17-white"],
    Lavender: img["17-lavender"],
    Sage: img["17-sage"],
    "Mist Blue": img["17-mistblue"],
  },
  "iphone-air": {
    "Space Black": img["air-spaceblack"],
    "Cloud White": img["air-cloudwhite"],
    "Light Gold": img["air-lightgold"],
    "Sky Blue": img["air-skyblue"],
  },
  "iphone-16pro": {
    "Black Titanium": img["16pro-black"],
    "White Titanium": img["16pro-white"],
    "Natural Titanium": img["16pro-natural"],
    "Desert Titanium": img["16pro-desert"],
  },
  "iphone-16": {
    Black: img["16-black"],
    White: img["16-white"],
    Pink: img["16-pink"],
    Teal: img["16-teal"],
    Ultramarine: img["16-ultramarine"],
  },
  "iphone-16e": {
    Black: img["16e-black"],
    White: img["16e-white"],
  },
  "iphone-15": {
    Black: img["15-black"],
    Blue: img["15-blue"],
    Green: img["15-green"],
    Yellow: img["15-yellow"],
    Pink: img["15-pink"],
  },
  "mac-air": {
    Midnight: img["mba-midnight"],
    Starlight: img["mba-starlight"],
    Silver: img["mba-silver"],
    "Sky Blue": img["mba-skyblue"],
  },
  "mac-book-pro": {
    "Space Black": img["mbp-spaceblack"],
    Silver: img["mbp-silver"],
  },
  imac: {
    Blue: img["imac-blue"],
    Green: img["imac-green"],
    Pink: img["imac-pink"],
    Silver: img["imac-silver"],
  },
  "ipad-pro": {
    "Space Black": img["ipadpro-spaceblack"],
    Silver: img["ipadpro-silver"],
  },
  "ipad-air": {
    Blue: img["ipadair-blue"],
    Purple: img["ipadair-purple"],
    Starlight: img["ipadair-starlight"],
    "Space Gray": img["ipadair-spacegray"],
  },
  "ipad-mini": {
    Blue: img["ipadmini-blue"],
    Starlight: img["ipadmini-starlight"],
    "Space Gray": img["ipadmini-spacegray"],
    Purple: img["ipadmini-purple"],
  },
};

const SINGLE_IMAGES = {
  "mac-mini": img["macmini"],
  "mac-studio": img["macstudio"],
  "watch-series": img["watch-s11"],
  "watch-ultra": img["watch-ultra"],
  "watch-se": img["watch-se"],
  "airpods-pro": img["airpodspro"],
  "airpods-4": img["airpods4"],
  "airpods-max": img["airpodsmax"],
  "apple-tv": img["appletv"],
  homepod: img["homepod"],
  "homepod-mini": img["homepodmini"],
  airtag: img["airtag"],
};

const CATEGORY_PHOTO = {
  mac: img["mac"],
  ipad: img["ipad"],
  watch: img["watch"],
  airpods: img["airpods"],
  "tv-home": img["tv-home"],
  accessories: img["accessories"],
};

export const COLOR_HEX = {
  Black: "#1d1d1f",
  "Jet Black": "#0b0b0d",
  "Space Black": "#2b2b2e",
  "Space Gray": "#8a8a8f",
  Midnight: "#2e3641",
  White: "#f2f2f4",
  "Cloud White": "#eceae5",
  Silver: "#dfe1e4",
  Starlight: "#f7f2e7",
  "Light Gold": "#e7d3a1",
  Blue: "#3a7bd5",
  "Sky Blue": "#a7c7e7",
  "Mist Blue": "#c3d3df",
  "Deep Blue": "#26436e",
  Ultramarine: "#3b4cc0",
  Teal: "#3fa3a3",
  Green: "#4a8f5d",
  Sage: "#b7c2a8",
  Pink: "#f3b6c2",
  "Soft Pink": "#f6c9d3",
  Lavender: "#c9c2e0",
  Purple: "#a78bd0",
  "Rose Gold": "#e6c3b5",
  Desert: "#c9a87c",
  "Cosmic Orange": "#e0642a",
  Titanium: "#b3b2ae",
  "Natural Titanium": "#c8c5bd",
  "Black Titanium": "#3a3a3c",
  "White Titanium": "#e8e6e1",
  "Desert Titanium": "#c9a87c",
  Orange: "#e8834e",
  Yellow: "#f2d15a",
  Red: "#c8324a",
};

export function hexFor(colorName) {
  return COLOR_HEX[colorName] || "#9aa0a6";
}

function shade(hex, amount) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((n >> 16) & 255) * (1 - amount));
  const g = Math.max(0, ((n >> 8) & 255) * (1 - amount));
  const b = Math.max(0, (n & 255) * (1 - amount));
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

function device(category, color) {
  const dark = shade(color, 0.25);
  const screen = "#ffffff";

  switch (category) {
    case "iphone":
      return `
        <rect x="36" y="14" width="28" height="72" rx="7" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <rect x="38.5" y="17" width="23" height="66" rx="4.5" fill="${screen}"/>
        <rect x="45" y="17.5" width="10" height="2.6" rx="1.3" fill="${color}"/>
        <circle cx="58" cy="26" r="1.6" fill="${dark}"/>`;
    case "ipad":
      return `
        <rect x="26" y="14" width="48" height="72" rx="5" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <rect x="29" y="17" width="42" height="66" rx="2.5" fill="${screen}"/>
        <circle cx="70.5" cy="20.5" r="1.3" fill="${dark}"/>`;
    case "mac":
      return `
        <rect x="24" y="24" width="52" height="34" rx="2.2" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <rect x="26.5" y="26.5" width="47" height="29" rx="1.2" fill="${screen}"/>
        <polygon points="18,58 82,58 88,66 12,66" fill="${shade(color, 0.1)}" stroke="${dark}" stroke-width="0.6"/>
        <rect x="42" y="58" width="16" height="2.4" rx="1.2" fill="${dark}"/>`;
    case "watch":
      return `
        <rect x="42" y="14" width="16" height="16" rx="4" fill="${dark}"/>
        <rect x="42" y="70" width="16" height="16" rx="4" fill="${dark}"/>
        <rect x="37" y="30" width="26" height="40" rx="9" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <rect x="40" y="34" width="20" height="32" rx="6" fill="${screen}"/>`;
    case "airpods":
      return `
        <rect x="41" y="40" width="18" height="26" rx="6" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <circle cx="46" cy="36" r="4.5" fill="${color}" stroke="${dark}" stroke-width="0.6"/>
        <rect x="44.5" y="36" width="3" height="12" rx="1.5" fill="${color}" stroke="${dark}" stroke-width="0.4"/>
        <circle cx="54" cy="36" r="4.5" fill="${color}" stroke="${dark}" stroke-width="0.6"/>
        <rect x="52.5" y="36" width="3" height="12" rx="1.5" fill="${color}" stroke="${dark}" stroke-width="0.4"/>`;
    case "tv-home":
      return `
        <rect x="22" y="24" width="56" height="36" rx="3" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <rect x="25" y="27" width="50" height="30" rx="1.5" fill="${screen}"/>
        <rect x="44" y="60" width="12" height="10" fill="${shade(color, 0.1)}"/>
        <rect x="34" y="70" width="32" height="3" rx="1.5" fill="${dark}"/>`;
    default:
      return `
        <rect x="32" y="32" width="36" height="36" rx="9" fill="${color}" stroke="${dark}" stroke-width="0.8"/>
        <circle cx="50" cy="50" r="7" fill="${screen}"/>`;
  }
}

function svgFallback(category, colorName, size) {
  const color = hexFor(colorName);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f5f5f7"/>
        <stop offset="100%" stop-color="#e8e8ed"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bg)"/>
    ${device(category, color)}
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function deviceImage(product, colorName, size = 480) {
  if (typeof product === "string") {
    return CATEGORY_PHOTO[product] || svgFallback(product, colorName, size);
  }

  const { imageKey, category } = product ?? {};

  const family = imageKey && FAMILY_IMAGES[imageKey];
  if (family) {
    return family[colorName] || Object.values(family)[0];
  }

  if (imageKey && SINGLE_IMAGES[imageKey]) {
    return SINGLE_IMAGES[imageKey];
  }

  if (category && CATEGORY_PHOTO[category]) {
    return CATEGORY_PHOTO[category];
  }

  return svgFallback(category, colorName, size);
}
