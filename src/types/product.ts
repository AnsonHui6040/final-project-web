export type ProductSeries = "zodiac" | "color" | "birthday" | "limited";

export type StockStatus = "in-stock" | "low-stock" | "sold-out";

export type Product = {
  id: string;
  slug: string;
  name: string;
  series: ProductSeries;
  price: number;
  originalPrice?: number;
  color: string;
  zodiac?: string;
  birthMonth?: number;
  meaning: string;
  description: string;
  tags: string[];
  isLimited: boolean;
  limitedQuantity?: number;
  stockStatus: StockStatus;
  image: string;
};
