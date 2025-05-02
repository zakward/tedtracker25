// src/data/inventoryData.js

/**
 * Inventory definitions (no purchase data)
 * Categorized by product type
 */
export const categories = {
    Flower: [
      { id: 1, name: "Blue Dream", grower: "Emerald Farms", strainType: "Sativa" },
      { id: 2, name: "Girl Scout Cookies", grower: "Green Leaf Co.", strainType: "Hybrid" },
      { id: 3, name: "Granddaddy Purple", grower: "Purple Haze Collective", strainType: "Indica" },
      { id: 4, name: "Sour Diesel", grower: "Diesel Brothers", strainType: "Sativa" },
      { id: 5, name: "OG Kush", grower: "Highland Harvest", strainType: "Hybrid" },
    ],
    Concentrate: [
      { id: 6, name: "Shatter", grower: "Resin Rangers", strainType: "Hybrid" },
      { id: 7, name: "Live Resin", grower: "Emerald Farms", strainType: "Hybrid" },
      { id: 8, name: "Wax", grower: "Green Leaf Co.", strainType: "Indica" },
      { id: 9, name: "Rosin", grower: "Purple Haze Collective", strainType: "Sativa" },
      { id: 10, name: "Distillate", grower: "Diesel Brothers", strainType: "Sativa" },
    ],
    Gummy: [
      { id: 11, name: "Bear Buds", grower: "Elevated Edibles Co.", strainType: "Hybrid" },
      { id: 12, name: "Canna Chews", grower: "Sweet Leaf Treats", strainType: "Indica" },
      { id: 13, name: "Gummy Garden", grower: "Green Gummy LLC", strainType: "Sativa" },
      { id: 14, name: "Edible Elotes", grower: "Harvest Gourmet", strainType: "Hybrid" },
      { id: 15, name: "High Hues", grower: "Rainbow Reef", strainType: "Hybrid" },
    ],
    Vape: [
      { id: 16, name: "Sky High Vape", grower: "Cloud 9 Collective", strainType: "Sativa" },
      { id: 17, name: "Pineapple Express Vape", grower: "Emerald Farms", strainType: "Hybrid" },
      { id: 18, name: "Banana OG Vape", grower: "Purple Haze Collective", strainType: "Indica" },
      { id: 19, name: "Gelato Vape", grower: "Green Leaf Co.", strainType: "Hybrid" },
      { id: 20, name: "Sour Tangie Vape", grower: "Diesel Brothers", strainType: "Sativa" },
    ],
  };
  
  /**
   * User purchases: link to category items by id
   * Includes purchase metadata
   * Authors are limited to four distinct users
   */
  export const purchases = [
    { id: 1, author: "user1", itemId: 1, datePurchased: "2025-04-10", harvestDate: "2025-03-22", thc: 18, cbd: 0.2 },
    { id: 2, author: "user2", itemId: 2, datePurchased: "2025-03-25", harvestDate: "2025-02-28", thc: 20, cbd: 0.1 },
    { id: 3, author: "user3", itemId: 3, datePurchased: "2025-02-14", harvestDate: "2025-01-20", thc: 22, cbd: 0.3 },
    { id: 4, author: "user4", itemId: 4, datePurchased: "2025-04-01", harvestDate: "2025-03-10", thc: 19, cbd: 0.15 },
    { id: 5, author: "user1", itemId: 5, datePurchased: "2025-03-30", harvestDate: "2025-03-05", thc: 17, cbd: 0.25 },
    { id: 6, author: "user2", itemId: 6, datePurchased: "2025-04-05", harvestDate: "2025-03-20", thc: 75, cbd: 0.5 },
    { id: 7, author: "user3", itemId: 7, datePurchased: "2025-03-28", harvestDate: "2025-03-18", thc: 65, cbd: 1 },
    { id: 8, author: "user4", itemId: 8, datePurchased: "2025-02-20", harvestDate: "2025-02-05", thc: 70, cbd: 0.8 },
    { id: 9, author: "user1", itemId: 9, datePurchased: "2025-04-12", harvestDate: "2025-03-30", thc: 80, cbd: 0.4 },
    { id: 10, author: "user2", itemId: 10, datePurchased: "2025-03-15", harvestDate: "2025-03-01", thc: 90, cbd: 0.1 },
    { id: 11, author: "user3", itemId: 11, datePurchased: "2025-04-08", harvestDate: "2025-02-15", thc: 10, cbd: 5 },
    { id: 12, author: "user4", itemId: 12, datePurchased: "2025-03-22", harvestDate: "2025-02-28", thc: 15, cbd: 0.5 },
    { id: 13, author: "user1", itemId: 13, datePurchased: "2025-04-01", harvestDate: "2025-03-10", thc: 20, cbd: 0.2 },
    { id: 14, author: "user2", itemId: 14, datePurchased: "2025-03-30", harvestDate: "2025-03-05", thc: 25, cbd: 0 },
    { id: 15, author: "user3", itemId: 15, datePurchased: "2025-02-18", harvestDate: "2025-01-30", thc: 5, cbd: 5 },
    { id: 16, author: "user4", itemId: 16, datePurchased: "2025-04-15", harvestDate: "2025-03-25", thc: 60, cbd: 1 },
    { id: 17, author: "user1", itemId: 17, datePurchased: "2025-03-05", harvestDate: "2025-02-10", thc: 70, cbd: 0 },
    { id: 18, author: "user2", itemId: 18, datePurchased: "2025-02-28", harvestDate: "2025-02-14", thc: 65, cbd: 0.2 },
    { id: 19, author: "user3", itemId: 19, datePurchased: "2025-04-02", harvestDate: "2025-03-12", thc: 75, cbd: 0.1 },
    { id: 20, author: "user4", itemId: 20, datePurchased: "2025-03-18", harvestDate: "2025-03-01", thc: 55, cbd: 0.5 },
  ];