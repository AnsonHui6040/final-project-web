"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type { Product } from "@/types/product";
import type { ProductSeries } from "@/types/product";

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
  colorLabel: (color: string) => string;
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
    footerNoteB: "部分款式為精選現貨，客製需求可作為下一階段品牌功能延伸。"
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
    footerNoteB: "Some pieces are curated ready-to-wear; custom requests can become a later brand extension."
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
    footerNoteB: "บางชิ้นเป็นสินค้าคัดสรรพร้อมส่ง ส่วนการสั่งทำเฉพาะอาจเป็นบริการในอนาคต"
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
    productPageTitle: "Pieces for the state you want to carry",
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
    footerNoteB: "Beberapa produk adalah ready-to-wear kurasi; custom request dapat menjadi fitur brand berikutnya."
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

    const colorLabel = (color: string) =>
      colorCopies[locale][color] ?? colorCopies.zh[color] ?? color;

    return { locale, setLocale, t, productText, seriesLabel, colorLabel };
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
