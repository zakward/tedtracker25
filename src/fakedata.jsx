// src/data/inventoryData.js

/**
 * Seed data definitions
 */
const flowerNames = [
  "Blue Dream", "Girl Scout Cookies", "Granddaddy Purple", "Sour Diesel", "OG Kush",
  "Purple Haze", "Northern Lights", "Pineapple Express", "Mango Kush", "White Widow",
  "Jack Herer", "Gelato", "Wedding Cake", "Banana Kush", "Green Crack",
  "AK-47", "Lemon Haze", "Bubba Kush", "Gorilla Glue", "Strawberry Cough",
  "Cherry Pie", "Blueberry", "Chem Dog", "Trainwreck", "Maui Wowie"
];

const concentrateNames = [
  "Shatter", "Live Resin", "Wax", "Rosin", "Distillate",
  "Budder", "Crumble", "Sauce", "Sugar", "Pull and Snap",
  "Honeycomb", "Ice Water Hash", "Solventless Hash Oil", "Tincture", "Rick Simpson Oil",
  "THC Crystalline", "Hash Rosin", "Water Hash", "Distillate Cartridge", "Full Melt Hash",
  "Bubble Hash", "Dry Sift", "Rosin Tech Sauce", "High-Terpene Extract", "Diamond Sauce"
];

const gummyNames = [
  "Bear Buds", "Canna Chews", "Gummy Garden", "Edible Elotes", "High Hues",
  "Sweet Drops", "Zen Gummies", "Mellow Mints", "Rainbow Squares", "Chill Bears",
  "Trippy Triangles", "Pineapple Rings", "Cherry Hearts", "Blue Razz Cubes", "Lime Wheels",
  "Peach Fuzzies", "Tropical Stars", "Candy Clouds", "Grape Gems", "Berry Breeze",
  "Mango Mania", "Watermelon Wedges", "Sour Strips", "Citrus Circles", "Mint Melts"
];

const vapeNames = [
  "Sky High Vape", "Pineapple Express Vape", "Banana OG Vape", "Gelato Vape", "Sour Tangie Vape",
  "Mango Kush Vape", "Blue Dream Vape", "Purple Haze Vape", "Lemon Haze Vape", "Cherry Pie Vape",
  "Green Crack Vape", "White Widow Vape", "Jack Herer Vape", "OG Kush Vape", "Wedding Cake Vape",
  "Fruit Punch Vape", "Watermelon Vape", "Berry Blast Vape", "Pineapple Rings Vape", "Mint Vape",
  "Citrus Burst Vape", "Berry Breeze Vape", "Tropical Storm Vape", "Mellow Mango Vape", "Trippy Tropics Vape"
];

const growers = [
  "Emerald Farms", "Green Leaf Co.", "Purple Haze Collective",
  "Diesel Brothers", "Highland Harvest", "Harvest Gourmet",
  "Rainbow Reef", "Cloud 9 Collective", "Elevated Edibles Co.",
  "Resin Rangers"
];

const strainTypes = ["Indica", "Sativa", "Hybrid"];

const authors = [
  "Zak", "Pops", "GMaLeesha", "Bill", "Ted",
  "Alice", "Bob", "Charlie", "Dana", "Eli"
];

const reviewSamples = [
  "Great quality and smooth experience.",
  "Really enjoyed the aroma and flavor!",
  "A bit too harsh on the throat.",
  "Will definitely buy again.",
  "Not what I expected, slightly dry.",
  "Perfect potency, highly recommend.",
  "Too mild for my taste.",
  "Exceeded my expectations.",
  "Good value for the price.",
  "The grower did an amazing job."
];

/**
 * Build category arrays with unique IDs
 */
let nextId = 1;
function makeCategory(names) {
  return names.map((name) => ({
    id: nextId++,
    name,
    grower: growers[Math.floor(Math.random() * growers.length)],
    strainType: strainTypes[Math.floor(Math.random() * strainTypes.length)],
  }));
}

export const categories = {
  Flower: makeCategory(flowerNames),
  Concentrate: makeCategory(concentrateNames),
  Gummy: makeCategory(gummyNames),
  Vape: makeCategory(vapeNames),
};

/**
 * Generate 3 random purchases per item, each with a review
 */
export const purchases = [];
let purchaseId = 1;

Object.values(categories).flat().forEach((item) => {
  for (let i = 0; i < 3; i++) {
    // Random harvest date before purchase
    const harvest = new Date(2025, Math.floor(Math.random() * 12), Math.ceil(Math.random() * 28));
    const purchase = new Date(harvest.getTime() + Math.ceil(Math.random() * 20) * 24 * 60 * 60 * 1000);

    purchases.push({
      id: purchaseId++,
      author: authors[Math.floor(Math.random() * authors.length)],
      itemId: item.id,
      datePurchased: purchase.toISOString().split('T')[0],
      harvestDate: harvest.toISOString().split('T')[0],
      thc: Math.round((Math.random() * 75 + 15) * 100) / 100, // 15–90%
      cbd: Math.round(Math.random() * 5 * 100) / 100,         // 0–5%
      review: reviewSamples[Math.floor(Math.random() * reviewSamples.length)]
    });
  }
});
