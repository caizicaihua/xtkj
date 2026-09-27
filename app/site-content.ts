export const company = {
  name: "HengQingKeJi",
  legalName: "长沙清恒科技有限公司",
  website: "https://www.kbmpy.xyz",
  websiteLabel: "www.kbmpy.xyz",
  domain: "kbmpy.xyz",
  email: "tiktok@kbmpy.xyz",
  mailto: "mailto:tiktok@kbmpy.xyz",
  primaryMarkets: ["Brazil", "Bangladesh", "Pakistan"],
};

export const siteMetadata = {
  title: `${company.name} | TikTok Advertising Services`,
  description: `${company.legalName}, operating under the ${company.name} brand, provides TikTok advertising services, campaign management, creative testing, optimization, and performance reporting. Contact ${company.email}.`,
};

export const games = [
  {
    slug: "petal-panic-drift",
    title: "Petal Panic Drift",
    category: "Match-3 puzzle",
    description: "Collect colorful blooms, clear tricky obstacles, and make every move count in a playful floral adventure.",
    href: "https://play.google.com/store/apps/details?id=com.HK7377Game.PetalPanicDrift",
    icon: "/petal-panic-drift.png",
    screenshot: "/petal-panic-drift-promo.png",
    color: "peach",
  },
  {
    slug: "abyss-drift",
    title: "Abyss Drift",
    category: "Underwater puzzle",
    description: "Dive into an underwater matching adventure. Build powerful combos and uncover treasures beneath the surface.",
    href: "https://play.google.com/store/apps/details?id=com.HK7377Game.AbyssDrift",
    icon: "/abyss-drift.webp",
    screenshot: "/abyss-drift-promo.webp",
    color: "sky",
  },
  {
    slug: "floral-secret-garden",
    title: "Floral Secret Garden",
    category: "Relaxing tile matching",
    description: "Follow winding wooden paths, match delicate flower tiles, and find a little calm in a hidden garden.",
    href: "https://play.google.com/store/apps/details?id=com.HK7377Game.FloralSecretGarden",
    icon: "/floral-secret-garden.webp",
    screenshot: "/floral-secret-garden-promo.webp",
    color: "lavender",
  },
  {
    slug: "shift-logic-dual-cube",
    title: "Shift Logic: Dual Cube",
    category: "Logic puzzle",
    description: "Two cubes, one swipe. Think a move ahead, navigate the obstacles, and find your way to the star.",
    href: "https://play.google.com/store/apps/details?id=com.sldc.shiftlogicdualcube.gp",
    icon: "/shift-logic-dual-cube.webp",
    screenshot: "/shift-logic-dual-cube-promo.webp",
    color: "periwinkle",
  },
] as const;
