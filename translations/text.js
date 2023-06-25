/**
 * @typedef {"en"} DefaultLocale
 * @typedef {DefaultLocale | "bn" | "hn" } Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en": "English",
  "bn": "বাংলা",
  "hn": "हिंदी",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en": "Guide",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  // "en": {
  //   lightweight: "Lightweight",
  //   realtime: "Realtime",
  //   suspense: "Suspense",
  //   pagination: "Pagination",
  //   backendAgnostic: "Backend Agnostic",
  //   renderingStrategies: "SSR / SSG Ready",
  //   typescript: "TypeScript Ready",
  //   remoteLocal: "Remote + Local",
  // },
  // "fr": {
  //   lightweight: "Léger",
  //   realtime: "Temps réel",
  //   backendAgnostic: "Indépendant du Backend",
  // },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en": "Complementory guide to learning maths by yourself.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en": "Question? Give us feedback →",
  "hn": "सवाल? हमें प्रतिक्रिया दें →",
  "bn": "প্রশ্ন? আমাদের মতামত দিন →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en": "Edit this page on GitHub →",
  "hn": "इस पृष्ठ को संपादित करें। GitHub पर →",
  "bn": "এই পৃষ্ঠাটি সম্পাদনা করুন। GitHub এ →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en": { utmSource: "lang_en", text: "Maintained by" },
  "bn": { utmSource: "lang_bn", text: "তত্ত্বাবধানে" },
  "bn": { utmSource: "lang_hn", text: "प्रबंधन मै" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en": "On This Page",
  "bn": "এই পৃষ্ঠায়",
  "hn": "इस पृष्ठ पर",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en": "Search documentation...",
  "hn": "दस्तावेज़ खोजें...",
  "bn": "অনুসন্ধান করুন...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en": "Last updated on",
};
