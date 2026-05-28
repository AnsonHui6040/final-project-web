"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type { Product, ProductSeries, StockStatus } from "@/types/product";

export type Locale = "zh" | "en" | "th" | "id";

type ProductCopy = {
  name: string;
  meaning: string;
  description: string;
  tags: string[];
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof dictionaries.zh) => string;
  productText: (product: Product) => ProductCopy;
  seriesLabel: (series: ProductSeries) => string;
  stockLabel: (status: StockStatus) => string;
  colorLabel: (color: string) => string;
  zodiacLabel: (zodiac: string) => string;
  monthLabel: (month: number) => string;
};

export const localeOptions: { value: Locale; label: string; short: string }[] = [
  { value: "zh", label: "繁體中文", short: "繁中" },
  { value: "en", label: "English", short: "EN" },
  { value: "th", label: "ไทย", short: "TH" },
  { value: "id", label: "Indonesia", short: "ID" }
];

const dictionaries = {
  zh: {
    language: "語言",
    brandSub: "AURA JEWELRY",
    navHome: "首頁",
    navShop: "商品",
    navGuide: "Aura Guide",
    navLimited: "限量",
    navStory: "品牌故事",
    cart: "購物車",
    menu: "選單",
    add: "加入",
    added: "已加入",
    soldOut: "售完",
    view: "查看",
    limited: "限量",
    productImage: "情境商品圖",
    handcraftedPiece: "手工情緒飾品",
    allCollections: "全部系列",
    allTones: "全部色調",
    collection: "系列",
    auraTone: "情緒色調",
    curation: "陳列方式",
    editorialFirst: "主題優先",
    everydayEntry: "日常入門",
    giftPieces: "送禮款",
    noProducts: "目前沒有符合條件的商品。",
    homeEyebrow: "手工情緒飾品",
    homeTitle: "Luma Beads",
    homeIntro: "把看不見的感受，做成可以佩戴的存在感。為 Gen Z 與年輕專業族群設計的情緒護符型手工飾品。",
    startGuide: "開始 Aura Guide",
    curatedShop: "精選商品",
    philosophy: "品牌哲學",
    philosophyTitle: "不是把幸運戴上，而是把狀態留住",
    philosophyBody: "Luma Beads 以色彩、生日與星座作為情緒線索，將日常壓力、轉換期與送禮心意，整理成可佩戴的手工飾品。",
    states: "情緒狀態",
    statesTitle: "以情緒狀態陳列，而不是用分類推銷",
    statesBody: "四個入口對應不同的佩戴時刻，讓選款更像翻閱一本可購買的情緒 lookbook。",
    enterMood: "進入狀態",
    calm: "安定",
    calmText: "給需要慢下來的日子，一點貼近皮膚的安定。",
    boundary: "界線",
    boundaryText: "保留距離感，也保留自己的節奏與重量。",
    tenderness: "溫柔",
    tendernessText: "讓溫柔不是討好，而是一種清楚的存在。",
    newLight: "新光",
    newLightText: "為轉換期、生日後、重新開始的那一刻留一個記號。",
    signatures: "精選款式",
    signaturesTitle: "Signature pieces",
    signaturesBody: "精選款式先呈現材質、情緒與生活畫面，購買動作留到使用者真的想靠近時。",
    viewAll: "查看全部",
    unboxing: "開箱儀式",
    unboxingTitle: "送出的不只是飾品，是一段被整理好的心意。",
    unboxingBody: "包裝被設計成慢下來的片刻：描圖紙、布袋、象徵卡與一段可留存的短句，讓收禮者在打開前就感覺到被想起。",
    lifestyle: "生活情境",
    lifestyleTitle: "讓商品出現在生活裡，而不是貨架上",
    lifestyleBody: "視覺應該呈現皮膚、衣料、晨光、包袋與拆封過程。商品是狀態的載體，不只是可被加入購物車的物件。",
    auraNote: "Aura note",
    guideTitle: "今天想帶著什麼狀態出門？",
    guideBody: "從生日、星座與顏色開始，但最後回到你的生活：考試、通勤、告白、轉職、送禮，或只是想把自己照顧好的一天。",
    productPageTitle: "想帶著的狀態",
    productPageBody: "從生日、星座、顏色與當下心情開始，選擇一件能進入日常穿搭的情緒護符。",
    cartEmptyTitle: "購物車目前是空的",
    cartEmptyBody: "先逛逛精選商品，找到今天想戴上的那一款。",
    cartTitle: "購物車",
    cartBody: "確認商品、數量與金額。正式金流開放前，可先透過社群或表單完成預購。",
    quantity: "數量",
    remove: "刪除",
    orderSummary: "訂單摘要",
    subtotal: "商品小計",
    shipping: "運費",
    shippingLater: "下單時確認",
    total: "總金額",
    checkout: "前往下單",
    preorderNote: "目前為預購測試階段，點擊後會看到 Instagram、LINE 與 Google Form 下單入口佔位。",
    footerBody: "為安靜的自信、情緒陪伴與日常送禮儀式設計的手工 aura jewelry。",
    explore: "探索",
    note: "提醒",
    footerNoteA: "星座、幸運色與生日推薦是情緒與風格線索，不代表實際效果保證。",
    footerNoteB: "部分款式為精選現貨，客製需求可作為下一階段品牌功能延伸。",
    heroAlt: "配戴 Luma Beads 手串的晨光生活情境",
    philosophyBodyA: "我們不把手串做成誇張的開運物，也不把它變成大量複製的飾品。每一款都從可搭配、可送禮、可被記住的生活場景出發。",
    philosophyBodyB: "你選的不是一串珠子，而是今天想帶出門的狀態：安定、界線、溫柔、新開始，或一個只想送給對方的祝福。",
    unboxingAlt: "Luma Beads 手串開箱、束口袋與 aura card",
    ritualOne: "依照生日、星座、顏色與當下狀態找出象徵線索",
    ritualTwo: "在既有精選款中選擇最貼近生活場景的配色",
    ritualThree: "以束口袋、描圖紙與 aura card 完成送禮儀式",
    editorialOne: "上課前的冷白晨光",
    editorialTwo: "通勤包裡的柔軟布料",
    editorialThree: "咖啡店窗邊的安靜休息",
    editorialFour: "送出前最後一次整理卡片",
    lifestyleAlt: "咖啡店窗邊配戴 Luma Beads 手串的生活情境",
    auraNoteLine: "給那些溫柔仍然需要結構的日子，一個安靜的象徵。",
    finderEyebrow: "AURA GUIDE",
    finderTitle: "選擇今天想帶著的狀態",
    finderBody: "從個人線索開始，找到適合通勤、考試、送禮或新階段的情緒象徵。",
    finderLoading: "載入推薦中...",
    tabZodiac: "星座",
    tabAura: "色調",
    tabBirthday: "生日",
    chooseZodiac: "選擇星座",
    chooseBirthMonthOptional: "或選擇出生月份",
    birthMonth: "出生月份",
    finderHint: "這是一段 aura guide：用個人線索找到最貼近當下生活狀態的精選款式。",
    recommendedPieces: "推薦款式",
    finderResultBody: "以下依照你的線索推薦最接近的情緒配色與佩戴狀態。",
    finderFallback: "目前沒有完全對應的款式，以下是相近風格推薦。",
    backToShop: "返回精選商品",
    limitedPieces: "限量 {count} 件",
    color: "顏色",
    lifestyleCues: "生活線索",
    meaning: "象徵意義",
    limitedProductNote: "此款為限量製作，售完不一定補貨，適合作為送禮祝福或重要時刻的紀念。",
    viewCart: "查看購物車",
    productAuraNote: "顏色與象徵意義作為風格、情緒與送禮線索，不代表任何實際效果保證。",
    relatedPieces: "同系列推薦",
    aboutEyebrow: "BRAND STORY",
    aboutTitle: "Quiet symbols for everyday wear",
    aboutIntro: "不是迷信，也不是大量複製的飾品，而是把每天的心情、顏色與祝福整理成可佩戴的存在感。",
    aboutBodyA: "Luma Beads 是一個以情緒象徵與日常穿搭為核心的年輕飾品品牌。我們希望手串不只是搭配衣服的小物，也能成為生日禮物、生活轉換期的紀念，或某一天出門前給自己的提醒。",
    aboutBodyB: "每一款手串都從顏色、珠材比例、佩戴情境與送禮儀式出發。你可以透過星座、幸運色或生日月份找到推薦款式，讓選擇從個人線索開始，回到真實生活。",
    aboutBlockOneTitle: "Emotional comfort",
    aboutBlockOneText: "手串小、輕、好搭配，卻能在每天出門時給自己一個清楚的狀態提醒。它不需要很盛大，也能有一點儀式感。",
    aboutBlockTwoTitle: "Personal aura symbolism",
    aboutBlockTwoText: "星座、顏色與生日是可被理解的個人線索，也很適合作為送禮起點。它們提供的是情緒方向，不是效果承諾。",
    aboutBlockThreeTitle: "Handcrafted curation",
    aboutBlockThreeText: "精選款式讓每一款能保持完整配色、比例與佩戴氣質。客製化會作為品牌下一階段的高觸感服務延伸。",
    aboutCtaTitle: "讓選擇變安靜，讓禮物更有感",
    aboutCtaBody: "我們不承諾任何實際功效，但相信一件有意義的小物，可以陪你記得今天想成為什麼樣子。",
    findYourPiece: "找你的手串",
    limitedTitle: "限量祈福系列",
    limitedBody: "祈福系列以祝福、紀念與陪伴為設計概念。每一款皆為限量製作，適合送給自己，也適合作為重要時刻的禮物。",
    limitedCardTitle: "限量製作，售完不一定補貨",
    limitedCardBody: "我們不承諾任何實際功效，但相信一件有意義的小物，可以成為每天的提醒與陪伴。這個系列更重視情感價值、收藏感與送禮時的心意。",
    limitedPillOne: "象徵祝福",
    limitedPillTwo: "作為提醒",
    limitedPillThree: "重要時刻禮物",
    limitedInfoOneTitle: "送禮建議",
    limitedInfoOneText: "適合畢業、考試、旅行、轉職、搬家或生日後的新階段。",
    limitedInfoTwoTitle: "商品故事",
    limitedInfoTwoText: "每款以一個祝福概念出發，搭配耐看的日常配色。",
    limitedInfoThreeTitle: "購買提醒",
    limitedInfoThreeText: "限量數量會顯示於商品頁，售完後不一定安排補貨。",
    preorder: "預購",
    checkoutThanks: "感謝你的喜歡",
    checkoutBody: "正式金流開放前，請透過以下方式完成預購。目前為預購測試階段，請透過 Instagram / LINE / Google Form 完成下單。",
    instagramOrder: "Instagram 私訊下單",
    lineOrder: "LINE 下單",
    googleFormOrder: "Google Form 預購",
    continueShopping: "繼續逛商品"
  },
  en: {
    language: "Language",
    brandSub: "AURA JEWELRY",
    navHome: "Home",
    navShop: "Shop",
    navGuide: "Aura Guide",
    navLimited: "Limited",
    navStory: "Story",
    cart: "Cart",
    menu: "Menu",
    add: "Add",
    added: "Added",
    soldOut: "Sold out",
    view: "View",
    limited: "Limited",
    productImage: "editorial product image",
    handcraftedPiece: "Handcrafted aura piece",
    allCollections: "All collections",
    allTones: "All tones",
    collection: "Collection",
    auraTone: "Aura tone",
    curation: "Curation",
    editorialFirst: "Editorial first",
    everydayEntry: "Everyday entry",
    giftPieces: "Gift pieces",
    noProducts: "No matching pieces yet.",
    homeEyebrow: "Handcrafted Aura Jewelry",
    homeTitle: "Luma Beads",
    homeIntro: "Invisible feelings, made wearable. Handcrafted aura jewelry for Gen Z and young professionals.",
    startGuide: "Begin Aura Guide",
    curatedShop: "Curated Shop",
    philosophy: "Philosophy",
    philosophyTitle: "Not luck as a promise, but a state you can keep close",
    philosophyBody: "Luma Beads turns color, birthday and zodiac cues into wearable pieces for pressure, transitions and thoughtful gifting.",
    states: "States",
    statesTitle: "Curated by emotional state, not by sales categories",
    statesBody: "Four entry points shape a shoppable emotional lookbook for different moments of wear.",
    enterMood: "Enter mood",
    calm: "Calm",
    calmText: "A small sense of steadiness for days that need to slow down.",
    boundary: "Boundary",
    boundaryText: "A quiet way to keep distance, rhythm and personal weight.",
    tenderness: "Tenderness",
    tendernessText: "Softness as presence, not performance.",
    newLight: "New Light",
    newLightText: "A marker for transitions, birthdays and beginning again.",
    signatures: "Signatures",
    signaturesTitle: "Signature pieces",
    signaturesBody: "Material, emotion and lifestyle come first. Purchase actions stay quiet until the user moves closer.",
    viewAll: "View all",
    unboxing: "Unboxing ritual",
    unboxingTitle: "Not just jewelry, but a feeling carefully prepared.",
    unboxingBody: "Tracing paper, pouch, symbol card and a short keepsake line turn opening the package into a slower ritual.",
    lifestyle: "Lifestyle",
    lifestyleTitle: "Pieces should live in daily scenes, not just on a shelf",
    lifestyleBody: "Skin, fabric, morning light, bags and unboxing details make the jewelry feel like a carried state.",
    auraNote: "Aura note",
    guideTitle: "What state do you want to carry today?",
    guideBody: "Start with birthday, zodiac and color, then return to real life: exams, commuting, confession, career shifts, gifting or self-care.",
    productPageTitle: "Pieces for the state you want to carry",
    productPageBody: "Choose a wearable emotional symbol through birthday, zodiac, color and current mood.",
    cartEmptyTitle: "Your cart is empty",
    cartEmptyBody: "Browse the curated shop and find the piece you want to carry today.",
    cartTitle: "Cart",
    cartBody: "Review pieces, quantities and subtotal. Before official payment opens, preorder through social or form links.",
    quantity: "Qty",
    remove: "Remove",
    orderSummary: "Order summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingLater: "Confirmed at order",
    total: "Total",
    checkout: "Preorder",
    preorderNote: "This MVP uses placeholder Instagram, LINE and Google Form preorder links.",
    footerBody: "Handcrafted aura jewelry for quiet confidence, emotional comfort and everyday gifting rituals.",
    explore: "Explore",
    note: "Note",
    footerNoteA: "Zodiac, lucky colors and birthday cues are emotional style references, not effect guarantees.",
    footerNoteB: "Some pieces are curated ready-to-wear; custom requests can become a later brand extension.",
    heroAlt: "Morning lifestyle scene wearing a Luma Beads bracelet",
    philosophyBodyA: "We do not turn bracelets into exaggerated lucky objects or mass-produced accessories. Each piece starts from wearability, gifting and a scene worth remembering.",
    philosophyBodyB: "You are not choosing a strand of beads, but the state you want to carry today: calm, boundary, tenderness, new beginnings, or a blessing meant for someone else.",
    unboxingAlt: "Luma Beads bracelet unboxing with pouch and aura card",
    ritualOne: "Find symbolic cues through birthday, zodiac, color and current state",
    ritualTwo: "Choose a curated palette that fits a real lifestyle scene",
    ritualThree: "Finish the gifting ritual with pouch, tracing paper and aura card",
    editorialOne: "Cool morning light before class",
    editorialTwo: "Soft fabric inside a commuter bag",
    editorialThree: "A quiet pause beside a cafe window",
    editorialFour: "One last card arrangement before gifting",
    lifestyleAlt: "Lifestyle scene wearing a Luma Beads bracelet beside a cafe window",
    auraNoteLine: "A quiet symbol for days when softness still needs structure.",
    finderEyebrow: "AURA GUIDE",
    finderTitle: "Choose the state you want to carry",
    finderBody: "Start with personal cues, then find an emotional symbol for commuting, exams, gifting or a new chapter.",
    finderLoading: "Loading recommendations...",
    tabZodiac: "Zodiac",
    tabAura: "Aura",
    tabBirthday: "Birthday",
    chooseZodiac: "Choose zodiac",
    chooseBirthMonthOptional: "Or choose birth month",
    birthMonth: "Birth month",
    finderHint: "This aura guide uses personal cues to find curated pieces closest to your current life state.",
    recommendedPieces: "Recommended pieces",
    finderResultBody: "Recommendations are matched to your cues, emotional palette and wearable state.",
    finderFallback: "No exact match yet. Here are similar pieces in a close mood.",
    backToShop: "Back to curated shop",
    limitedPieces: "Limited to {count} pieces",
    color: "Color",
    lifestyleCues: "Lifestyle cues",
    meaning: "Meaning",
    limitedProductNote: "This limited piece may not restock after selling out, suited for gifting or marking an important moment.",
    viewCart: "View cart",
    productAuraNote: "Colors and symbolism are style, emotion and gifting cues, not effect guarantees.",
    relatedPieces: "Related pieces",
    aboutEyebrow: "BRAND STORY",
    aboutTitle: "Quiet symbols for everyday wear",
    aboutIntro: "Not superstition, not mass-produced decoration, but daily moods, colors and blessings made wearable.",
    aboutBodyA: "Luma Beads is a young jewelry brand centered on emotional symbolism and daily styling. A bracelet can be more than an accessory: a birthday gift, a marker for transition, or a reminder before leaving home.",
    aboutBodyB: "Every piece begins with color, bead proportion, wearing scenes and gifting ritual. Zodiac, lucky colors and birthday months help the choice begin from personal cues and return to real life.",
    aboutBlockOneTitle: "Emotional comfort",
    aboutBlockOneText: "Bracelets are small, light and easy to style, yet they can give a clear state reminder each time you leave home. They do not need to feel grand to carry ritual.",
    aboutBlockTwoTitle: "Personal aura symbolism",
    aboutBlockTwoText: "Zodiac, color and birthday are understandable personal cues and useful gifting starts. They offer emotional direction, not promised effects.",
    aboutBlockThreeTitle: "Handcrafted curation",
    aboutBlockThreeText: "Curated ready-to-wear pieces keep every palette, proportion and wearing mood complete. Customization can become a higher-touch extension later.",
    aboutCtaTitle: "Make choosing quieter, and gifting more felt",
    aboutCtaBody: "We do not promise effects, but believe a meaningful small object can help you remember who you want to be today.",
    findYourPiece: "Find your piece",
    limitedTitle: "Limited Blessing Collection",
    limitedBody: "The blessing collection is designed around care, memory and companionship. Each piece is made in limited quantities for yourself or meaningful gifting.",
    limitedCardTitle: "Limited quantity, restock not guaranteed",
    limitedCardBody: "We do not promise effects, but believe a meaningful small object can become a daily reminder and companion. This collection focuses on sentiment, collectability and gifting intention.",
    limitedPillOne: "Symbolic blessing",
    limitedPillTwo: "Daily reminder",
    limitedPillThree: "Important moment gift",
    limitedInfoOneTitle: "Gifting guide",
    limitedInfoOneText: "Suited for graduation, exams, travel, career shifts, moving, birthdays and new chapters.",
    limitedInfoTwoTitle: "Product story",
    limitedInfoTwoText: "Each piece starts from a blessing concept and a wearable daily palette.",
    limitedInfoThreeTitle: "Purchase note",
    limitedInfoThreeText: "Limited quantities appear on product pages. Sold-out pieces may not be restocked.",
    preorder: "Preorder",
    checkoutThanks: "Thank you for liking Luma Beads",
    checkoutBody: "Before official payment opens, please complete preorder through one of the channels below. This MVP uses Instagram, LINE and Google Form order placeholders.",
    instagramOrder: "Order via Instagram DM",
    lineOrder: "Order via LINE",
    googleFormOrder: "Google Form preorder",
    continueShopping: "Continue shopping"
  },
  th: {
    language: "ภาษา",
    brandSub: "เครื่องประดับออร่า",
    navHome: "หน้าแรก",
    navShop: "สินค้า",
    navGuide: "Aura Guide",
    navLimited: "ลิมิเต็ด",
    navStory: "เรื่องราว",
    cart: "ตะกร้า",
    menu: "เมนู",
    add: "เพิ่ม",
    added: "เพิ่มแล้ว",
    soldOut: "หมด",
    view: "ดู",
    limited: "ลิมิเต็ด",
    productImage: "ภาพสินค้าเชิงไลฟ์สไตล์",
    handcraftedPiece: "ชิ้นงานออร่าแฮนด์เมด",
    allCollections: "ทุกคอลเลกชัน",
    allTones: "ทุกโทน",
    collection: "คอลเลกชัน",
    auraTone: "โทนออร่า",
    curation: "การจัดเรียง",
    editorialFirst: "แนะนำก่อน",
    everydayEntry: "ใส่ง่าย",
    giftPieces: "เหมาะเป็นของขวัญ",
    noProducts: "ยังไม่มีสินค้าที่ตรงเงื่อนไข",
    homeEyebrow: "เครื่องประดับออร่าแฮนด์เมด",
    homeTitle: "Luma Beads",
    homeIntro: "เปลี่ยนความรู้สึกที่มองไม่เห็นให้กลายเป็นสิ่งที่สวมใส่ได้ สำหรับ Gen Z และคนทำงานรุ่นใหม่",
    startGuide: "เริ่ม Aura Guide",
    curatedShop: "สินค้าคัดสรร",
    philosophy: "แนวคิดแบรนด์",
    philosophyTitle: "ไม่ใช่คำสัญญาเรื่องโชค แต่คือสภาวะที่พกติดตัวได้",
    philosophyBody: "Luma Beads ใช้สี วันเกิด และราศีเป็นเบาะแสทางอารมณ์ เพื่อสร้างเครื่องประดับสำหรับความกดดัน ช่วงเปลี่ยนผ่าน และการให้ของขวัญ",
    states: "สภาวะ",
    statesTitle: "จัดตามอารมณ์ ไม่ใช่หมวดขายของทั่วไป",
    statesBody: "สี่ทางเลือกสำหรับช่วงเวลาการสวมใส่ที่ต่างกัน เหมือน lookbook ที่ซื้อได้",
    enterMood: "เข้าสู่อารมณ์",
    calm: "สงบ",
    calmText: "ความนิ่งเล็กๆ สำหรับวันที่อยากช้าลง",
    boundary: "ขอบเขต",
    boundaryText: "รักษาระยะ จังหวะ และตัวตนอย่างเงียบๆ",
    tenderness: "อ่อนโยน",
    tendernessText: "ความนุ่มนวลที่เป็นการมีอยู่ ไม่ใช่การเอาใจ",
    newLight: "แสงใหม่",
    newLightText: "เครื่องหมายของการเริ่มใหม่ วันเกิด และช่วงเปลี่ยนผ่าน",
    signatures: "ชิ้นเด่น",
    signaturesTitle: "ชิ้นงานซิกเนเจอร์",
    signaturesBody: "ให้วัสดุ อารมณ์ และภาพชีวิตมาก่อน ปุ่มซื้อจึงไม่แย่งความสนใจ",
    viewAll: "ดูทั้งหมด",
    unboxing: "พิธีเปิดกล่อง",
    unboxingTitle: "ไม่ใช่แค่เครื่องประดับ แต่คือความตั้งใจที่ถูกจัดวาง",
    unboxingBody: "กระดาษโปร่ง ถุงผ้า การ์ดสัญลักษณ์ และข้อความสั้นๆ ทำให้การเปิดกล่องช้าลงและน่าจดจำ",
    lifestyle: "ไลฟ์สไตล์",
    lifestyleTitle: "สินค้าอยู่ในชีวิตจริง ไม่ใช่แค่บนชั้นวาง",
    lifestyleBody: "ผิว ผ้า แสงเช้า กระเป๋า และรายละเอียดการเปิดกล่อง ทำให้เครื่องประดับเป็นสภาวะที่พกพาได้",
    auraNote: "บันทึกออร่า",
    guideTitle: "วันนี้อยากพกสภาวะแบบไหนออกไป?",
    guideBody: "เริ่มจากวันเกิด ราศี และสี แล้วกลับมาที่ชีวิตจริง: สอบ เดินทาง ทำงาน ให้ของขวัญ หรือดูแลตัวเอง",
    productPageTitle: "ชิ้นงานสำหรับสภาวะที่คุณอยากพกไป",
    productPageBody: "เลือกสัญลักษณ์ทางอารมณ์ผ่านวันเกิด ราศี สี และความรู้สึกตอนนี้",
    cartEmptyTitle: "ตะกร้าว่างอยู่",
    cartEmptyBody: "เลือกชมสินค้าคัดสรร แล้วหาเส้นที่อยากพกติดตัววันนี้",
    cartTitle: "ตะกร้า",
    cartBody: "ตรวจสอบสินค้า จำนวน และยอดรวม ก่อนเปิดชำระเงินจริง สามารถพรีออเดอร์ผ่านโซเชียลหรือฟอร์มได้",
    quantity: "จำนวน",
    remove: "ลบ",
    orderSummary: "สรุปคำสั่งซื้อ",
    subtotal: "ยอดสินค้า",
    shipping: "ค่าส่ง",
    shippingLater: "ยืนยันตอนสั่งซื้อ",
    total: "รวม",
    checkout: "พรีออเดอร์",
    preorderNote: "ช่วง MVP นี้ใช้ลิงก์ Instagram, LINE และ Google Form เป็นตัวอย่างสำหรับพรีออเดอร์",
    footerBody: "เครื่องประดับออร่าแฮนด์เมดสำหรับความมั่นใจที่เงียบ ความสบายใจ และพิธีการให้ของขวัญในชีวิตประจำวัน",
    explore: "สำรวจ",
    note: "หมายเหตุ",
    footerNoteA: "ราศี สีมงคล และวันเกิดเป็นเบาะแสด้านอารมณ์และสไตล์ ไม่ใช่การรับประกันผลลัพธ์",
    footerNoteB: "บางชิ้นเป็นสินค้าคัดสรรพร้อมส่ง ส่วนการสั่งทำเฉพาะอาจเป็นบริการในอนาคต",
    heroAlt: "ภาพไลฟ์สไตล์ยามเช้าขณะสวมสร้อยข้อมือ Luma Beads",
    philosophyBodyA: "เราไม่ได้ทำสร้อยข้อมือให้เป็นวัตถุนำโชคที่เกินจริง หรือเครื่องประดับผลิตจำนวนมาก แต่เริ่มจากการใส่ได้จริง การให้ของขวัญ และฉากชีวิตที่น่าจดจำ",
    philosophyBodyB: "คุณไม่ได้เลือกแค่ลูกปัดหนึ่งเส้น แต่เลือกสภาวะที่อยากพกไปวันนี้: สงบ ขอบเขต อ่อนโยน แสงใหม่ หรือคำอวยพรสำหรับใครบางคน",
    unboxingAlt: "การเปิดกล่องสร้อยข้อมือ Luma Beads พร้อมถุงผ้าและการ์ดออร่า",
    ritualOne: "หาเบาะแสสัญลักษณ์จากวันเกิด ราศี สี และสภาวะตอนนี้",
    ritualTwo: "เลือกโทนสีคัดสรรที่ใกล้กับฉากชีวิตจริง",
    ritualThree: "จบพิธีการให้ของขวัญด้วยถุงผ้า กระดาษโปร่ง และการ์ดออร่า",
    editorialOne: "แสงเช้าเย็นๆ ก่อนเข้าเรียน",
    editorialTwo: "ผ้านุ่มในกระเป๋าเดินทางประจำวัน",
    editorialThree: "ช่วงพักเงียบๆ ริมหน้าต่างคาเฟ่",
    editorialFour: "จัดการ์ดครั้งสุดท้ายก่อนส่งต่อ",
    lifestyleAlt: "ภาพไลฟ์สไตล์ริมหน้าต่างคาเฟ่ขณะสวม Luma Beads",
    auraNoteLine: "สัญลักษณ์เงียบๆ สำหรับวันที่ความอ่อนโยนยังต้องมีโครงสร้าง",
    finderEyebrow: "AURA GUIDE",
    finderTitle: "เลือกสภาวะที่อยากพกไปวันนี้",
    finderBody: "เริ่มจากเบาะแสส่วนตัว แล้วหาเครื่องหมายทางอารมณ์สำหรับการเดินทาง สอบ ให้ของขวัญ หรือบทใหม่",
    finderLoading: "กำลังโหลดคำแนะนำ...",
    tabZodiac: "ราศี",
    tabAura: "ออร่า",
    tabBirthday: "วันเกิด",
    chooseZodiac: "เลือกราศี",
    chooseBirthMonthOptional: "หรือเลือกเดือนเกิด",
    birthMonth: "เดือนเกิด",
    finderHint: "Aura guide นี้ใช้เบาะแสส่วนตัวเพื่อค้นหาชิ้นงานที่ใกล้กับสภาวะชีวิตตอนนี้มากที่สุด",
    recommendedPieces: "ชิ้นงานแนะนำ",
    finderResultBody: "คำแนะนำอ้างอิงจากเบาะแส โทนอารมณ์ และสภาวะที่สวมใส่ได้",
    finderFallback: "ยังไม่มีชิ้นที่ตรงทั้งหมด นี่คือชิ้นที่ใกล้อารมณ์เดียวกัน",
    backToShop: "กลับไปสินค้าคัดสรร",
    limitedPieces: "ลิมิเต็ด {count} ชิ้น",
    color: "สี",
    lifestyleCues: "เบาะแสไลฟ์สไตล์",
    meaning: "ความหมาย",
    limitedProductNote: "ชิ้นลิมิเต็ดนี้อาจไม่เติมสต็อกหลังขายหมด เหมาะสำหรับการให้ของขวัญหรือจดจำช่วงเวลาสำคัญ",
    viewCart: "ดูตะกร้า",
    productAuraNote: "สีและสัญลักษณ์เป็นเบาะแสด้านสไตล์ อารมณ์ และการให้ของขวัญ ไม่ใช่การรับประกันผลลัพธ์",
    relatedPieces: "ชิ้นงานที่เกี่ยวข้อง",
    aboutEyebrow: "เรื่องราวแบรนด์",
    aboutTitle: "สัญลักษณ์เงียบๆ สำหรับทุกวัน",
    aboutIntro: "ไม่ใช่ความงมงาย ไม่ใช่เครื่องประดับผลิตจำนวนมาก แต่คืออารมณ์ สี และคำอวยพรประจำวันในรูปแบบที่สวมใส่ได้",
    aboutBodyA: "Luma Beads คือแบรนด์เครื่องประดับรุ่นใหม่ที่เน้นสัญลักษณ์ทางอารมณ์และการแต่งตัวในชีวิตประจำวัน สร้อยข้อมือจึงเป็นได้ทั้งของขวัญวันเกิด เครื่องหมายของช่วงเปลี่ยนผ่าน หรือคำเตือนใจเล็กๆ ก่อนออกจากบ้าน",
    aboutBodyB: "ทุกชิ้นเริ่มจากสี สัดส่วนลูกปัด ฉากการสวมใส่ และพิธีการให้ของขวัญ ราศี สีมงคล และเดือนเกิดช่วยให้การเลือกเริ่มจากเบาะแสส่วนตัวและกลับสู่ชีวิตจริง",
    aboutBlockOneTitle: "ความสบายใจ",
    aboutBlockOneText: "สร้อยข้อมือเล็ก เบา และเข้ากับชุดง่าย แต่ให้สภาวะที่ชัดเจนทุกครั้งก่อนออกจากบ้าน ไม่ต้องยิ่งใหญ่ก็มีพิธีกรรมเล็กๆ ได้",
    aboutBlockTwoTitle: "สัญลักษณ์ออร่าส่วนตัว",
    aboutBlockTwoText: "ราศี สี และวันเกิดเป็นเบาะแสส่วนตัวที่เข้าใจง่าย และเหมาะเป็นจุดเริ่มของของขวัญ สิ่งเหล่านี้ให้ทิศทางทางอารมณ์ ไม่ใช่คำสัญญาเรื่องผลลัพธ์",
    aboutBlockThreeTitle: "การคัดสรรแบบแฮนด์เมด",
    aboutBlockThreeText: "ชิ้นงานคัดสรรช่วยให้สี สัดส่วน และอารมณ์การสวมใส่สมบูรณ์ ส่วนงานสั่งทำอาจพัฒนาเป็นบริการในอนาคต",
    aboutCtaTitle: "ทำให้การเลือกเงียบลง และของขวัญรู้สึกมากขึ้น",
    aboutCtaBody: "เราไม่สัญญาผลลัพธ์ แต่เชื่อว่าสิ่งเล็กๆ ที่มีความหมายช่วยให้คุณจำได้ว่าวันนี้อยากเป็นใคร",
    findYourPiece: "หาชิ้นของคุณ",
    limitedTitle: "คอลเลกชันพรลิมิเต็ด",
    limitedBody: "คอลเลกชันพรออกแบบจากการดูแล ความทรงจำ และการอยู่เคียงข้าง ทุกชิ้นผลิตจำนวนจำกัด เหมาะให้ตัวเองหรือเป็นของขวัญสำคัญ",
    limitedCardTitle: "จำนวนจำกัด อาจไม่เติมสต็อก",
    limitedCardBody: "เราไม่สัญญาผลลัพธ์ แต่เชื่อว่าสิ่งเล็กๆ ที่มีความหมายสามารถเป็นเครื่องเตือนใจและเพื่อนร่วมวัน คอลเลกชันนี้เน้นคุณค่าทางอารมณ์ การสะสม และความตั้งใจในการให้",
    limitedPillOne: "พรเชิงสัญลักษณ์",
    limitedPillTwo: "เครื่องเตือนใจ",
    limitedPillThree: "ของขวัญช่วงสำคัญ",
    limitedInfoOneTitle: "คำแนะนำของขวัญ",
    limitedInfoOneText: "เหมาะกับเรียนจบ สอบ เดินทาง เปลี่ยนงาน ย้ายบ้าน วันเกิด และบทใหม่",
    limitedInfoTwoTitle: "เรื่องราวสินค้า",
    limitedInfoTwoText: "แต่ละชิ้นเริ่มจากแนวคิดคำอวยพรและโทนสีประจำวันที่ใส่ง่าย",
    limitedInfoThreeTitle: "หมายเหตุการซื้อ",
    limitedInfoThreeText: "จำนวนลิมิเต็ดจะแสดงในหน้าสินค้า สินค้าขายหมดอาจไม่เติมสต็อก",
    preorder: "พรีออเดอร์",
    checkoutThanks: "ขอบคุณที่ชอบ Luma Beads",
    checkoutBody: "ก่อนเปิดระบบชำระเงินจริง กรุณาพรีออเดอร์ผ่านช่องทางด้านล่าง ช่วง MVP นี้ใช้ Instagram, LINE และ Google Form เป็นช่องทางตัวอย่าง",
    instagramOrder: "สั่งผ่าน Instagram DM",
    lineOrder: "สั่งผ่าน LINE",
    googleFormOrder: "พรีออเดอร์ผ่าน Google Form",
    continueShopping: "เลือกชมสินค้าต่อ"
  },
  id: {
    language: "Bahasa",
    brandSub: "AURA JEWELRY",
    navHome: "Beranda",
    navShop: "Katalog",
    navGuide: "Aura Guide",
    navLimited: "Terbatas",
    navStory: "Cerita",
    cart: "Keranjang",
    menu: "Menu",
    add: "Tambah",
    added: "Ditambahkan",
    soldOut: "Habis",
    view: "Lihat",
    limited: "Terbatas",
    productImage: "foto produk editorial",
    handcraftedPiece: "Perhiasan aura handmade",
    allCollections: "Semua koleksi",
    allTones: "Semua tone",
    collection: "Koleksi",
    auraTone: "Tone aura",
    curation: "Kurasi",
    editorialFirst: "Editorial dulu",
    everydayEntry: "Untuk harian",
    giftPieces: "Untuk hadiah",
    noProducts: "Belum ada produk yang sesuai.",
    homeEyebrow: "Handcrafted Aura Jewelry",
    homeTitle: "Luma Beads",
    homeIntro: "Perasaan yang tak terlihat, dibuat bisa dikenakan. Perhiasan aura handmade untuk Gen Z dan profesional muda.",
    startGuide: "Mulai Aura Guide",
    curatedShop: "Katalog Kurasi",
    philosophy: "Filosofi",
    philosophyTitle: "Bukan janji keberuntungan, tetapi keadaan yang bisa dibawa dekat",
    philosophyBody: "Luma Beads mengubah warna, ulang tahun, dan zodiak menjadi perhiasan untuk tekanan harian, fase baru, dan hadiah penuh makna.",
    states: "Keadaan",
    statesTitle: "Dikurasi berdasarkan emosi, bukan kategori toko biasa",
    statesBody: "Empat pintu masuk untuk momen pemakaian berbeda, seperti lookbook emosional yang bisa dibeli.",
    enterMood: "Masuk mood",
    calm: "Tenang",
    calmText: "Rasa stabil kecil untuk hari yang perlu diperlambat.",
    boundary: "Batas",
    boundaryText: "Menjaga jarak, ritme, dan bobot diri secara tenang.",
    tenderness: "Lembut",
    tendernessText: "Kelembutan sebagai kehadiran, bukan usaha menyenangkan orang.",
    newLight: "Cahaya Baru",
    newLightText: "Penanda untuk transisi, ulang tahun, dan mulai lagi.",
    signatures: "Pilihan utama",
    signaturesTitle: "Signature pieces",
    signaturesBody: "Material, emosi, dan gaya hidup tampil lebih dulu. Aksi membeli tetap tenang.",
    viewAll: "Lihat semua",
    unboxing: "Ritual unboxing",
    unboxingTitle: "Bukan hanya perhiasan, tetapi rasa yang disiapkan dengan rapi.",
    unboxingBody: "Kertas tracing, pouch kain, kartu simbol, dan satu kalimat pendek membuat proses membuka paket terasa lebih pelan.",
    lifestyle: "Gaya hidup",
    lifestyleTitle: "Produk harus hidup dalam keseharian, bukan hanya di rak",
    lifestyleBody: "Kulit, kain, cahaya pagi, tas, dan detail unboxing membuat perhiasan terasa seperti keadaan yang dibawa.",
    auraNote: "Aura note",
    guideTitle: "Keadaan apa yang ingin kamu bawa hari ini?",
    guideBody: "Mulai dari ulang tahun, zodiak, dan warna, lalu kembali ke hidup nyata: ujian, komuter, hadiah, fase karier, atau merawat diri.",
    productPageTitle: "Piece untuk keadaan yang ingin kamu bawa",
    productPageBody: "Pilih simbol emosional yang bisa dikenakan melalui ulang tahun, zodiak, warna, dan mood saat ini.",
    cartEmptyTitle: "Keranjang masih kosong",
    cartEmptyBody: "Lihat katalog kurasi dan temukan piece yang ingin kamu bawa hari ini.",
    cartTitle: "Keranjang",
    cartBody: "Periksa produk, jumlah, dan subtotal. Sebelum pembayaran resmi tersedia, preorder lewat sosial atau formulir.",
    quantity: "Jumlah",
    remove: "Hapus",
    orderSummary: "Ringkasan pesanan",
    subtotal: "Subtotal",
    shipping: "Ongkir",
    shippingLater: "Dikonfirmasi saat pesan",
    total: "Total",
    checkout: "Preorder",
    preorderNote: "MVP ini memakai tautan placeholder Instagram, LINE, dan Google Form untuk preorder.",
    footerBody: "Perhiasan aura handmade untuk rasa percaya diri yang tenang, kenyamanan emosional, dan ritual hadiah sehari-hari.",
    explore: "Jelajahi",
    note: "Catatan",
    footerNoteA: "Zodiak, warna keberuntungan, dan ulang tahun adalah referensi emosi dan gaya, bukan jaminan efek.",
    footerNoteB: "Beberapa produk adalah ready-to-wear kurasi; custom request dapat menjadi fitur brand berikutnya.",
    heroAlt: "Adegan pagi memakai gelang Luma Beads",
    philosophyBodyA: "Kami tidak menjadikan gelang sebagai benda keberuntungan berlebihan atau aksesori produksi massal. Setiap piece dimulai dari mudah dikenakan, pantas dihadiahkan, dan punya adegan hidup yang ingin diingat.",
    philosophyBodyB: "Kamu tidak memilih seuntai manik, tetapi keadaan yang ingin dibawa hari ini: tenang, batas diri, kelembutan, awal baru, atau doa untuk seseorang.",
    unboxingAlt: "Unboxing gelang Luma Beads dengan pouch dan aura card",
    ritualOne: "Temukan isyarat simbolik lewat ulang tahun, zodiak, warna, dan keadaan saat ini",
    ritualTwo: "Pilih palet kurasi yang dekat dengan adegan hidup nyata",
    ritualThree: "Lengkapi ritual hadiah dengan pouch, kertas tracing, dan aura card",
    editorialOne: "Cahaya pagi dingin sebelum kelas",
    editorialTwo: "Kain lembut di dalam tas komuter",
    editorialThree: "Jeda tenang di sisi jendela kafe",
    editorialFour: "Merapikan kartu terakhir sebelum diberikan",
    lifestyleAlt: "Adegan memakai Luma Beads di dekat jendela kafe",
    auraNoteLine: "Simbol tenang untuk hari ketika kelembutan tetap membutuhkan struktur.",
    finderEyebrow: "AURA GUIDE",
    finderTitle: "Pilih keadaan yang ingin kamu bawa",
    finderBody: "Mulai dari isyarat personal, lalu temukan simbol emosional untuk komuter, ujian, hadiah, atau bab baru.",
    finderLoading: "Memuat rekomendasi...",
    tabZodiac: "Zodiak",
    tabAura: "Aura",
    tabBirthday: "Ulang tahun",
    chooseZodiac: "Pilih zodiak",
    chooseBirthMonthOptional: "Atau pilih bulan lahir",
    birthMonth: "Bulan lahir",
    finderHint: "Aura guide ini memakai isyarat personal untuk menemukan piece kurasi yang paling dekat dengan keadaan hidupmu saat ini.",
    recommendedPieces: "Piece rekomendasi",
    finderResultBody: "Rekomendasi dicocokkan dengan isyarat, palet emosi, dan keadaan yang bisa dikenakan.",
    finderFallback: "Belum ada yang benar-benar cocok. Ini piece dengan mood yang dekat.",
    backToShop: "Kembali ke katalog kurasi",
    limitedPieces: "Terbatas {count} pcs",
    color: "Warna",
    lifestyleCues: "Isyarat gaya hidup",
    meaning: "Makna",
    limitedProductNote: "Piece terbatas ini mungkin tidak restock setelah habis, cocok untuk hadiah atau penanda momen penting.",
    viewCart: "Lihat keranjang",
    productAuraNote: "Warna dan simbol adalah isyarat gaya, emosi, dan hadiah, bukan jaminan efek.",
    relatedPieces: "Piece terkait",
    aboutEyebrow: "CERITA BRAND",
    aboutTitle: "Simbol tenang untuk dipakai setiap hari",
    aboutIntro: "Bukan takhayul, bukan dekorasi produksi massal, tetapi mood harian, warna, dan doa yang dibuat bisa dikenakan.",
    aboutBodyA: "Luma Beads adalah brand perhiasan muda yang berpusat pada simbol emosi dan gaya harian. Gelang bisa menjadi lebih dari aksesori: hadiah ulang tahun, penanda fase baru, atau pengingat kecil sebelum keluar rumah.",
    aboutBodyB: "Setiap piece dimulai dari warna, proporsi manik, adegan pemakaian, dan ritual hadiah. Zodiak, warna keberuntungan, dan bulan lahir membantu pilihan berawal dari isyarat personal dan kembali ke hidup nyata.",
    aboutBlockOneTitle: "Kenyamanan emosional",
    aboutBlockOneText: "Gelang kecil, ringan, dan mudah dipadukan, tetapi dapat memberi pengingat keadaan yang jelas setiap kali keluar rumah. Tidak perlu besar untuk terasa ritual.",
    aboutBlockTwoTitle: "Simbol aura personal",
    aboutBlockTwoText: "Zodiak, warna, dan ulang tahun adalah isyarat personal yang mudah dipahami dan berguna sebagai awal hadiah. Semuanya memberi arah emosi, bukan janji efek.",
    aboutBlockThreeTitle: "Kurasi handmade",
    aboutBlockThreeText: "Piece ready-to-wear kurasi menjaga palet, proporsi, dan mood pemakaian tetap utuh. Customization dapat menjadi layanan lebih personal di tahap berikutnya.",
    aboutCtaTitle: "Buat pilihan lebih tenang, dan hadiah lebih terasa",
    aboutCtaBody: "Kami tidak menjanjikan efek, tetapi percaya benda kecil bermakna dapat membantu kamu mengingat ingin menjadi siapa hari ini.",
    findYourPiece: "Temukan piecemu",
    limitedTitle: "Koleksi Blessing Terbatas",
    limitedBody: "Koleksi blessing dirancang dari kepedulian, kenangan, dan rasa menemani. Setiap piece dibuat terbatas untuk diri sendiri atau hadiah bermakna.",
    limitedCardTitle: "Jumlah terbatas, restock tidak dijamin",
    limitedCardBody: "Kami tidak menjanjikan efek, tetapi percaya benda kecil bermakna dapat menjadi pengingat dan teman harian. Koleksi ini menekankan nilai emosi, rasa kolektibel, dan niat memberi.",
    limitedPillOne: "Doa simbolik",
    limitedPillTwo: "Pengingat harian",
    limitedPillThree: "Hadiah momen penting",
    limitedInfoOneTitle: "Panduan hadiah",
    limitedInfoOneText: "Cocok untuk kelulusan, ujian, perjalanan, perubahan karier, pindah rumah, ulang tahun, dan bab baru.",
    limitedInfoTwoTitle: "Cerita produk",
    limitedInfoTwoText: "Setiap piece dimulai dari konsep doa dan palet harian yang mudah dikenakan.",
    limitedInfoThreeTitle: "Catatan pembelian",
    limitedInfoThreeText: "Jumlah terbatas terlihat di halaman produk. Piece yang habis mungkin tidak restock.",
    preorder: "Preorder",
    checkoutThanks: "Terima kasih sudah menyukai Luma Beads",
    checkoutBody: "Sebelum pembayaran resmi tersedia, lakukan preorder melalui salah satu kanal di bawah. MVP ini memakai Instagram, LINE, dan Google Form sebagai placeholder pemesanan.",
    instagramOrder: "Pesan via Instagram DM",
    lineOrder: "Pesan via LINE",
    googleFormOrder: "Preorder Google Form",
    continueShopping: "Lanjut belanja"
  }
} as const;

const productCopies: Record<Locale, Record<string, ProductCopy>> = {
  zh: {},
  en: {
    "aries-fire-red-bracelet": {
      name: "Aries | Fire Red Bracelet",
      meaning: "Courage, momentum, warmth",
      description: "Red stones and warm gold details for days when you want action to feel close.",
      tags: ["Zodiac", "Aries", "Red", "Gift"]
    },
    "taurus-forest-green-bracelet": {
      name: "Taurus | Forest Green Bracelet",
      meaning: "Stability, ease, groundedness",
      description: "Forest green and soft ivory tones for a slower, grounded daily rhythm.",
      tags: ["Zodiac", "Taurus", "Green", "Everyday"]
    },
    "cancer-moon-pearl-bracelet": {
      name: "Cancer | Moon Pearl Bracelet",
      meaning: "Tenderness, care, safety",
      description: "Moon-white pearly details for a quiet piece that feels comforting on the wrist.",
      tags: ["Zodiac", "Cancer", "White", "Soft"]
    },
    "scorpio-deep-purple-bracelet": {
      name: "Scorpio | Deep Purple Bracelet",
      meaning: "Intuition, calm, mystery",
      description: "Deep muted purple with matte texture for a mature, slightly distant mood.",
      tags: ["Zodiac", "Scorpio", "Purple", "Style"]
    },
    "blue-focus-bracelet": {
      name: "Blue Focus Bracelet",
      meaning: "Calm, focus, clarity",
      description: "Clear blue tones for study, work, and days that need organized thoughts.",
      tags: ["Color", "Blue", "Focus", "Study"]
    },
    "pink-kindness-bracelet": {
      name: "Pink Kindness Bracelet",
      meaning: "Tenderness, connection, affection",
      description: "Soft pink beads for a clean approachable mood, suited for dates, gatherings and understated gifting.",
      tags: ["Color", "Pink", "Gift", "Tender"]
    },
    "black-boundary-bracelet": {
      name: "Black Boundary Bracelet",
      meaning: "Protection, steadiness, boundaries",
      description: "Black stones with metal details for a low-key piece with presence.",
      tags: ["Color", "Black", "Grounded", "Neutral"]
    },
    "january-garnet-red-bracelet": {
      name: "January | Garnet Red Bracelet",
      meaning: "New beginning, birthday wish, action",
      description: "A red January piece for friends entering a new stage, or as a small reward for yourself.",
      tags: ["Birthday", "January", "Red", "New start"]
    },
    "june-moonlight-birthday-bracelet": {
      name: "June | Moonlight Birthday Bracelet",
      meaning: "Birthday blessing, softness, new stage",
      description: "Moon-white and pearl-like details for a June birthday and a gentle new year.",
      tags: ["Birthday", "June", "White", "Gift"]
    },
    "november-warm-yellow-bracelet": {
      name: "November | Warm Yellow Bracelet",
      meaning: "Confidence, energy, birthday wish",
      description: "Warm yellow beads that feel bright without being loud.",
      tags: ["Birthday", "November", "Yellow", "Confidence"]
    },
    "peace-blessing-limited-bracelet": {
      name: "Peace Blessing Limited Bracelet",
      meaning: "Peace, care, stability",
      description: "Dark beads and subtle gold details for travel, exams, transitions and quiet blessing.",
      tags: ["Limited", "Blessing", "Gift", "Peace"]
    },
    "new-start-limited-bracelet": {
      name: "New Start Limited Bracelet",
      meaning: "Beginning again, clarity, blessing",
      description: "White and translucent beads for graduation, moving, career shifts, birthdays and fresh starts.",
      tags: ["Limited", "New start", "White", "Keepsake"]
    }
  },
  th: {},
  id: {}
};

productCopies.th = {
  "aries-fire-red-bracelet": {
    name: "ราศีเมษ | สร้อยข้อมือแดงไฟ",
    meaning: "ความกล้า แรงขับเคลื่อน ความอบอุ่น",
    description: "หินสีแดงและรายละเอียดทองอุ่น สำหรับวันที่อยากพกพลังการลงมือทำไว้ใกล้ตัว",
    tags: ["ราศี", "เมษ", "แดง", "ของขวัญ"]
  },
  "taurus-forest-green-bracelet": {
    name: "ราศีพฤษภ | สร้อยข้อมือเขียวป่า",
    meaning: "ความมั่นคง ความผ่อนคลาย การหยั่งราก",
    description: "โทนเขียวป่าและงาช้างนุ่มๆ สำหรับจังหวะประจำวันที่ช้าลงและมั่นคงขึ้น",
    tags: ["ราศี", "พฤษภ", "เขียว", "ใส่ทุกวัน"]
  },
  "cancer-moon-pearl-bracelet": {
    name: "ราศีกรกฎ | สร้อยข้อมือมุกแสงจันทร์",
    meaning: "ความอ่อนโยน การดูแล ความปลอดภัย",
    description: "รายละเอียดสีขาวมุกเหมือนแสงจันทร์ ให้ความรู้สึกปลอบประโลมบนข้อมือ",
    tags: ["ราศี", "กรกฎ", "ขาว", "นุ่มนวล"]
  },
  "scorpio-deep-purple-bracelet": {
    name: "ราศีพิจิก | สร้อยข้อมือม่วงลึก",
    meaning: "สัญชาตญาณ ความนิ่ง ความลึกลับ",
    description: "ม่วงหม่นเนื้อแมตต์ สำหรับอารมณ์ที่สุขุมและมีระยะ",
    tags: ["ราศี", "พิจิก", "ม่วง", "สไตล์"]
  },
  "blue-focus-bracelet": {
    name: "สร้อยข้อมือฟ้าโฟกัส",
    meaning: "ความสงบ สมาธิ ความชัดเจน",
    description: "โทนฟ้าใสสำหรับการเรียน งาน และวันที่ต้องจัดระเบียบความคิด",
    tags: ["สี", "ฟ้า", "โฟกัส", "เรียน"]
  },
  "pink-kindness-bracelet": {
    name: "สร้อยข้อมือชมพูอ่อนโยน",
    meaning: "ความอ่อนโยน ความสัมพันธ์ ความรัก",
    description: "ลูกปัดชมพูนุ่มสำหรับลุคที่เข้าถึงง่าย เหมาะกับเดต การพบปะ และของขวัญเรียบหรู",
    tags: ["สี", "ชมพู", "ของขวัญ", "อ่อนโยน"]
  },
  "black-boundary-bracelet": {
    name: "สร้อยข้อมือดำขอบเขต",
    meaning: "การปกป้อง ความมั่นคง ขอบเขต",
    description: "หินสีดำกับรายละเอียดโลหะ สำหรับชิ้นงานเรียบแต่มีตัวตน",
    tags: ["สี", "ดำ", "มั่นคง", "นิวทรัล"]
  },
  "january-garnet-red-bracelet": {
    name: "มกราคม | สร้อยข้อมือแดงการ์เนต",
    meaning: "เริ่มต้นใหม่ คำอวยพรวันเกิด การลงมือทำ",
    description: "ชิ้นสีแดงสำหรับเดือนมกราคม เหมาะให้คนที่กำลังเข้าสู่ช่วงใหม่",
    tags: ["วันเกิด", "มกราคม", "แดง", "เริ่มใหม่"]
  },
  "june-moonlight-birthday-bracelet": {
    name: "มิถุนายน | สร้อยข้อมือแสงจันทร์",
    meaning: "พรวันเกิด ความนุ่มนวล ช่วงใหม่",
    description: "สีขาวแสงจันทร์และรายละเอียดคล้ายมุก สำหรับวันเกิดเดือนมิถุนายน",
    tags: ["วันเกิด", "มิถุนายน", "ขาว", "ของขวัญ"]
  },
  "november-warm-yellow-bracelet": {
    name: "พฤศจิกายน | สร้อยข้อมือเหลืองมั่นใจ",
    meaning: "ความมั่นใจ พลังงาน พรวันเกิด",
    description: "ลูกปัดเหลืองอุ่นที่สดใสโดยไม่ดังเกินไป",
    tags: ["วันเกิด", "พฤศจิกายน", "เหลือง", "มั่นใจ"]
  },
  "peace-blessing-limited-bracelet": {
    name: "สร้อยข้อมือพรแห่งความสงบ ลิมิเต็ด",
    meaning: "ความสงบ การดูแล ความมั่นคง",
    description: "ลูกปัดเข้มและรายละเอียดทองเบาๆ สำหรับการเดินทาง การสอบ และช่วงเปลี่ยนผ่าน",
    tags: ["ลิมิเต็ด", "คำอวยพร", "ของขวัญ", "สงบ"]
  },
  "new-start-limited-bracelet": {
    name: "สร้อยข้อมือเริ่มใหม่ ลิมิเต็ด",
    meaning: "เริ่มอีกครั้ง ความชัดเจน คำอวยพร",
    description: "ลูกปัดขาวและใส สำหรับเรียนจบ ย้ายบ้าน เปลี่ยนงาน วันเกิด และการเริ่มใหม่",
    tags: ["ลิมิเต็ด", "เริ่มใหม่", "ขาว", "ของที่ระลึก"]
  }
};

productCopies.id = {
  "aries-fire-red-bracelet": {
    name: "Aries | Gelang Merah Api",
    meaning: "Keberanian, gerak, kehangatan",
    description: "Batu merah dan detail emas hangat untuk hari yang butuh dorongan bertindak.",
    tags: ["Zodiak", "Aries", "Merah", "Hadiah"]
  },
  "taurus-forest-green-bracelet": {
    name: "Taurus | Gelang Hijau Hutan",
    meaning: "Stabil, rileks, membumi",
    description: "Hijau hutan dan ivory lembut untuk ritme harian yang lebih pelan dan membumi.",
    tags: ["Zodiak", "Taurus", "Hijau", "Harian"]
  },
  "cancer-moon-pearl-bracelet": {
    name: "Cancer | Gelang Mutiara Bulan",
    meaning: "Lembut, peduli, aman",
    description: "Detail putih mutiara seperti cahaya bulan, terasa menenangkan di pergelangan.",
    tags: ["Zodiak", "Cancer", "Putih", "Lembut"]
  },
  "scorpio-deep-purple-bracelet": {
    name: "Scorpio | Gelang Ungu Dalam",
    meaning: "Intuisi, tenang, misterius",
    description: "Ungu redup dengan tekstur matte untuk kesan dewasa dan sedikit berjarak.",
    tags: ["Zodiak", "Scorpio", "Ungu", "Gaya"]
  },
  "blue-focus-bracelet": {
    name: "Gelang Biru Fokus",
    meaning: "Tenang, fokus, jernih",
    description: "Tone biru jernih untuk belajar, bekerja, dan hari yang perlu pikiran tertata.",
    tags: ["Warna", "Biru", "Fokus", "Belajar"]
  },
  "pink-kindness-bracelet": {
    name: "Gelang Pink Kindness",
    meaning: "Lembut, terhubung, kasih",
    description: "Manik pink lembut untuk suasana bersih dan mudah didekati, cocok untuk hadiah halus.",
    tags: ["Warna", "Pink", "Hadiah", "Lembut"]
  },
  "black-boundary-bracelet": {
    name: "Gelang Hitam Boundary",
    meaning: "Perlindungan, stabil, batas diri",
    description: "Batu hitam dengan detail metal untuk gaya rendah hati yang tetap punya kehadiran.",
    tags: ["Warna", "Hitam", "Stabil", "Netral"]
  },
  "january-garnet-red-bracelet": {
    name: "Januari | Gelang Merah Garnet",
    meaning: "Awal baru, doa ulang tahun, aksi",
    description: "Piece merah untuk Januari, cocok bagi teman yang memasuki fase baru.",
    tags: ["Ulang tahun", "Januari", "Merah", "Awal baru"]
  },
  "june-moonlight-birthday-bracelet": {
    name: "Juni | Gelang Moonlight",
    meaning: "Doa ulang tahun, lembut, fase baru",
    description: "Putih cahaya bulan dan detail mirip mutiara untuk ulang tahun bulan Juni.",
    tags: ["Ulang tahun", "Juni", "Putih", "Hadiah"]
  },
  "november-warm-yellow-bracelet": {
    name: "November | Gelang Kuning Percaya Diri",
    meaning: "Percaya diri, energi, doa ulang tahun",
    description: "Manik kuning hangat yang cerah tanpa terasa terlalu keras.",
    tags: ["Ulang tahun", "November", "Kuning", "Percaya diri"]
  },
  "peace-blessing-limited-bracelet": {
    name: "Gelang Peace Blessing Terbatas",
    meaning: "Damai, peduli, stabil",
    description: "Manik gelap dan detail emas halus untuk perjalanan, ujian, transisi, dan doa kecil.",
    tags: ["Terbatas", "Doa", "Hadiah", "Damai"]
  },
  "new-start-limited-bracelet": {
    name: "Gelang New Start Terbatas",
    meaning: "Mulai lagi, jernih, doa",
    description: "Manik putih dan transparan untuk kelulusan, pindah, perubahan kerja, ulang tahun, dan awal baru.",
    tags: ["Terbatas", "Awal baru", "Putih", "Kenangan"]
  }
};

const storageKey = "luma-beads-locale";
const I18nContext = createContext<I18nContextValue | null>(null);

const seriesCopies: Record<Locale, Record<ProductSeries, string>> = {
  zh: {
    zodiac: "星座月份系列",
    color: "幸運色系列",
    birthday: "生日推薦系列",
    limited: "限量祈福系列"
  },
  en: {
    zodiac: "Zodiac Collection",
    color: "Aura Color Collection",
    birthday: "Birthday Collection",
    limited: "Limited Blessing Collection"
  },
  th: {
    zodiac: "คอลเลกชันราศี",
    color: "คอลเลกชันสีออร่า",
    birthday: "คอลเลกชันวันเกิด",
    limited: "คอลเลกชันลิมิเต็ด"
  },
  id: {
    zodiac: "Koleksi Zodiak",
    color: "Koleksi Warna Aura",
    birthday: "Koleksi Ulang Tahun",
    limited: "Koleksi Terbatas"
  }
};

const colorCopies: Record<Locale, Record<string, string>> = {
  zh: {
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
  },
  en: {
    red: "Red",
    pink: "Pink",
    yellow: "Yellow",
    green: "Green",
    blue: "Blue",
    purple: "Purple",
    black: "Black",
    white: "White",
    gray: "Gray",
    gold: "Gold"
  },
  th: {
    red: "แดง",
    pink: "ชมพู",
    yellow: "เหลือง",
    green: "เขียว",
    blue: "น้ำเงิน",
    purple: "ม่วง",
    black: "ดำ",
    white: "ขาว",
    gray: "เทา",
    gold: "ทอง"
  },
  id: {
    red: "Merah",
    pink: "Pink",
    yellow: "Kuning",
    green: "Hijau",
    blue: "Biru",
    purple: "Ungu",
    black: "Hitam",
    white: "Putih",
    gray: "Abu-abu",
    gold: "Emas"
  }
};

const stockCopies: Record<Locale, Record<StockStatus, string>> = {
  zh: {
    "in-stock": "現貨",
    "low-stock": "少量",
    "sold-out": "售完"
  },
  en: {
    "in-stock": "In stock",
    "low-stock": "Low stock",
    "sold-out": "Sold out"
  },
  th: {
    "in-stock": "พร้อมส่ง",
    "low-stock": "เหลือน้อย",
    "sold-out": "หมด"
  },
  id: {
    "in-stock": "Tersedia",
    "low-stock": "Stok sedikit",
    "sold-out": "Habis"
  }
};

const zodiacCopies: Record<Locale, Record<string, string>> = {
  zh: {
    Aries: "白羊座",
    Taurus: "金牛座",
    Gemini: "雙子座",
    Cancer: "巨蟹座",
    Leo: "獅子座",
    Virgo: "處女座",
    Libra: "天秤座",
    Scorpio: "天蠍座",
    Sagittarius: "射手座",
    Capricorn: "摩羯座",
    Aquarius: "水瓶座",
    Pisces: "雙魚座"
  },
  en: {
    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Cancer: "Cancer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagittarius",
    Capricorn: "Capricorn",
    Aquarius: "Aquarius",
    Pisces: "Pisces"
  },
  th: {
    Aries: "ราศีเมษ",
    Taurus: "ราศีพฤษภ",
    Gemini: "ราศีเมถุน",
    Cancer: "ราศีกรกฎ",
    Leo: "ราศีสิงห์",
    Virgo: "ราศีกันย์",
    Libra: "ราศีตุลย์",
    Scorpio: "ราศีพิจิก",
    Sagittarius: "ราศีธนู",
    Capricorn: "ราศีมังกร",
    Aquarius: "ราศีกุมภ์",
    Pisces: "ราศีมีน"
  },
  id: {
    Aries: "Aries",
    Taurus: "Taurus",
    Gemini: "Gemini",
    Cancer: "Cancer",
    Leo: "Leo",
    Virgo: "Virgo",
    Libra: "Libra",
    Scorpio: "Scorpio",
    Sagittarius: "Sagitarius",
    Capricorn: "Capricorn",
    Aquarius: "Aquarius",
    Pisces: "Pisces"
  }
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Locale | null;
    if (stored && localeOptions.some((option) => option.value === stored)) {
      setLocaleState(stored);
    }
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      window.localStorage.setItem(storageKey, nextLocale);
      document.documentElement.lang =
        nextLocale === "zh" ? "zh-Hant-TW" : nextLocale;
    };

    const t = (key: keyof typeof dictionaries.zh) =>
      dictionaries[locale][key] ?? dictionaries.zh[key];

    const productText = (product: Product) =>
      productCopies[locale][product.slug] ?? {
        name: product.name,
        meaning: product.meaning,
        description: product.description,
        tags: product.tags
      };

    const seriesLabel = (series: ProductSeries) =>
      seriesCopies[locale][series] ?? seriesCopies.zh[series];

    const stockLabel = (status: StockStatus) =>
      stockCopies[locale][status] ?? stockCopies.zh[status];

    const colorLabel = (color: string) =>
      colorCopies[locale][color] ?? colorCopies.zh[color] ?? color;

    const zodiacLabel = (zodiac: string) =>
      zodiacCopies[locale][zodiac] ?? zodiacCopies.zh[zodiac] ?? zodiac;

    const monthLabel = (month: number) =>
      locale === "zh"
        ? `${month} 月`
        : locale === "th"
          ? `เดือน ${month}`
          : locale === "id"
            ? `Bulan ${month}`
            : `Month ${month}`;

    return {
      locale,
      setLocale,
      t,
      productText,
      seriesLabel,
      stockLabel,
      colorLabel,
      zodiacLabel,
      monthLabel
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
