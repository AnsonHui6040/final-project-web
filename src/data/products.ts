import type { Product, ProductSeries, StockStatus } from "@/types/product";

export const seriesLabels: Record<ProductSeries, string> = {
  zodiac: "星座月份系列",
  color: "幸運色系列",
  birthday: "生日推薦系列",
  limited: "限量祈福系列"
};

export const stockLabels: Record<StockStatus, string> = {
  "in-stock": "現貨",
  "low-stock": "少量",
  "sold-out": "售完"
};

export const colorLabels: Record<string, string> = {
  red: "紅色",
  pink: "粉色",
  yellow: "黃色",
  green: "綠色",
  blue: "藍色",
  purple: "紫色",
  black: "黑色",
  white: "白色",
  gray: "灰色",
  gold: "金色"
};

export const zodiacOptions = [
  { label: "白羊座", value: "Aries", month: 3 },
  { label: "金牛座", value: "Taurus", month: 4 },
  { label: "雙子座", value: "Gemini", month: 5 },
  { label: "巨蟹座", value: "Cancer", month: 6 },
  { label: "獅子座", value: "Leo", month: 7 },
  { label: "處女座", value: "Virgo", month: 8 },
  { label: "天秤座", value: "Libra", month: 9 },
  { label: "天蠍座", value: "Scorpio", month: 10 },
  { label: "射手座", value: "Sagittarius", month: 11 },
  { label: "摩羯座", value: "Capricorn", month: 12 },
  { label: "水瓶座", value: "Aquarius", month: 1 },
  { label: "雙魚座", value: "Pisces", month: 2 }
];

export const products: Product[] = [
  {
    id: "p-zodiac-aries",
    slug: "aries-fire-red-bracelet",
    name: "白羊座｜火曜紅石手串",
    series: "zodiac",
    price: 390,
    color: "red",
    zodiac: "Aries",
    birthMonth: 3,
    meaning: "勇氣、行動力、熱情",
    description:
      "以紅石與暖金色細節搭配，適合想把行動力帶進日常的白羊座與三月生日禮物。",
    tags: ["星座", "白羊座", "紅色", "生日禮物"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "red"
  },
  {
    id: "p-zodiac-taurus",
    slug: "taurus-forest-green-bracelet",
    name: "金牛座｜森土綠石手串",
    series: "zodiac",
    price: 420,
    color: "green",
    zodiac: "Taurus",
    birthMonth: 4,
    meaning: "穩定、放鬆、踏實感",
    description:
      "以森林綠與米白珠色呈現安定步調，適合喜歡自然質感與耐看配色的人。",
    tags: ["星座", "金牛座", "綠色", "日常配戴"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "green"
  },
  {
    id: "p-zodiac-cancer",
    slug: "cancer-moon-pearl-bracelet",
    name: "巨蟹座｜月白珍珠手串",
    series: "zodiac",
    price: 420,
    color: "white",
    zodiac: "Cancer",
    birthMonth: 6,
    meaning: "溫柔、陪伴、安心感",
    description:
      "月白珠光搭配柔亮小珠，像一件能安放心情的輕飾品，適合自己配戴或送給在意的人。",
    tags: ["星座", "巨蟹座", "白色", "溫柔"],
    isLimited: false,
    stockStatus: "low-stock",
    image: "white"
  },
  {
    id: "p-zodiac-scorpio",
    slug: "scorpio-deep-purple-bracelet",
    name: "天蠍座｜深紫夜石手串",
    series: "zodiac",
    price: 430,
    color: "purple",
    zodiac: "Scorpio",
    birthMonth: 10,
    meaning: "直覺、沉著、神秘感",
    description:
      "深紫色調搭配霧面珠材，保留一點距離感，也讓日常穿搭多一份成熟層次。",
    tags: ["星座", "天蠍座", "紫色", "質感穿搭"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "purple"
  },
  {
    id: "p-color-blue-focus",
    slug: "blue-focus-bracelet",
    name: "藍色專注手串",
    series: "color",
    price: 350,
    color: "blue",
    meaning: "冷靜、專注、清晰",
    description:
      "以清透藍色為主視覺，適合讀書、工作或需要整理思緒的日子，作為狀態提醒與穿搭點綴。",
    tags: ["幸運色", "藍色", "專注", "學生友善"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "blue"
  },
  {
    id: "p-color-pink-soft",
    slug: "pink-kindness-bracelet",
    name: "粉色人緣手串",
    series: "color",
    price: 350,
    color: "pink",
    meaning: "溫柔、人緣、愛意",
    description:
      "柔粉色珠串帶來親近又乾淨的印象，適合約會、聚會，也適合作為不過度甜膩的小禮物。",
    tags: ["幸運色", "粉色", "送禮", "溫柔"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "pink"
  },
  {
    id: "p-color-black-boundary",
    slug: "black-boundary-bracelet",
    name: "黑色界線手串",
    series: "color",
    price: 360,
    color: "black",
    meaning: "保護感、穩重、界線",
    description:
      "黑色與金屬細節形成俐落風格，適合想讓配件低調、有存在感，又好搭衣服的人。",
    tags: ["幸運色", "黑色", "穩重", "中性風格"],
    isLimited: false,
    stockStatus: "low-stock",
    image: "black"
  },
  {
    id: "p-birthday-january",
    slug: "january-garnet-red-bracelet",
    name: "1月｜新年石榴紅手串",
    series: "birthday",
    price: 390,
    color: "red",
    birthMonth: 1,
    meaning: "新的開始、生日祝福、行動力",
    description:
      "為一月與新年氛圍設計的紅色手串，適合送給迎接新階段的朋友，也適合犒賞自己。",
    tags: ["生日推薦", "1月", "紅色", "新開始"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "red"
  },
  {
    id: "p-birthday-june",
    slug: "june-moonlight-birthday-bracelet",
    name: "6月｜月光生日手串",
    series: "birthday",
    price: 390,
    color: "white",
    birthMonth: 6,
    meaning: "生日祝福、溫柔、新階段",
    description:
      "月光白與珍珠感細節，適合作為六月生日禮物，象徵在新一歲裡溫柔前進。",
    tags: ["生日推薦", "6月", "白色", "禮物"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "white"
  },
  {
    id: "p-birthday-november",
    slug: "november-warm-yellow-bracelet",
    name: "11月｜暖黃自信手串",
    series: "birthday",
    price: 390,
    color: "yellow",
    birthMonth: 11,
    meaning: "自信、活力、生日祝福",
    description:
      "暖黃色珠材讓整體明亮卻不刺眼，適合送給正在累積自信、準備跨出下一步的人。",
    tags: ["生日推薦", "11月", "黃色", "自信"],
    isLimited: false,
    stockStatus: "in-stock",
    image: "yellow"
  },
  {
    id: "p-limited-peace",
    slug: "peace-blessing-limited-bracelet",
    name: "平安祝福限定手串",
    series: "limited",
    price: 490,
    color: "black",
    meaning: "象徵平安、陪伴與穩定",
    description:
      "以深色珠材與微金細節設計，適合作為重要旅程、考試前或生活轉換時的小小祝福。",
    tags: ["限量", "祈福系列", "送禮祝福", "平安"],
    isLimited: true,
    limitedQuantity: 30,
    stockStatus: "low-stock",
    image: "black"
  },
  {
    id: "p-limited-new-start",
    slug: "new-start-limited-bracelet",
    name: "新開始限定手串",
    series: "limited",
    price: 490,
    color: "white",
    meaning: "象徵重新開始、整理心情與祝福",
    description:
      "白色與透明感珠材組成乾淨視覺，適合作為畢業、搬家、轉職或生日後的新階段紀念。",
    tags: ["限量", "祈福系列", "新開始", "紀念禮物"],
    isLimited: true,
    limitedQuantity: 25,
    stockStatus: "in-stock",
    image: "white"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0
  }).format(price);
}
