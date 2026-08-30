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

export function deviceImage(product, colorName) {
  if (typeof product === "string") {
    return CATEGORY_PHOTO[product] || "";
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

  return "";
}
