import type { Product } from "./types";

const now = new Date().toISOString();

export const MOCK_PRODUCTS: Product[] = [
  // ── DRIVERS ──────────────────────────────────────────────────────────────
  {
    id: 101,
    name: "TaylorMade Stealth 2 Driver",
    category: "clubs",
    price: 599.99,
    description:
      "The Stealth 2 Driver features a 60X Carbon Twist Face that delivers maximum ball speed across a massive sweet spot. Nanotexture Technology controls spin in all conditions for longer, straighter drives.",
    image_url:
      "https://images.unsplash.com/photo-1691608788396-43e0e6ed9535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 12,
    is_featured: true,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["9°", "10.5°", "12°"],
      flex: ["Regular", "Stiff", "X-Stiff"],
      shaft_material: ["Graphite"],
      shaft_model: ["Fujikura Ventus Red", "KBS TD Cat 2"],
    },
    created_at: now,
  },
  {
    id: 107,
    name: "Callaway Paradym Driver",
    category: "clubs",
    price: 629.99,
    description:
      "The Paradym Driver is built on a completely new platform, featuring a full carbon chassis that saves 46g of weight and redirects it exactly where it needs to be for speed and forgiveness.",
    image_url:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 10,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["9°", "10.5°"],
      flex: ["Regular", "Stiff", "X-Stiff"],
      shaft_material: ["Graphite"],
      shaft_model: ["Project X HZRDUS Smoke", "Aldila Ascent"],
    },
    created_at: now,
  },
  {
    id: 108,
    name: "Titleist TSR3 Driver",
    category: "clubs",
    price: 649.99,
    description:
      "TSR3 delivers precision ball flight and workability for better players. An adjustable SureFit CG track enables face-to-face center of gravity positioning for exact shot shaping and spin control.",
    image_url:
      "https://images.unsplash.com/photo-1624456844739-f4949b946645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 7,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["8°", "9°", "10°"],
      flex: ["Stiff", "X-Stiff", "Tour"],
      shaft_material: ["Graphite"],
      shaft_model: ["HZRDUS Red CB", "Tensei AV Raw White"],
    },
    created_at: now,
  },

  // ── FAIRWAYS ──────────────────────────────────────────────────────────────
  {
    id: 102,
    name: "Callaway Paradym Fairway Wood",
    category: "clubs",
    price: 349.99,
    description:
      "The Paradym Fairway Wood uses a revolutionary Triaxial Carbon crown and sole to save weight and redirect it for high launch and low spin. A.I.-designed Face Cup provides exceptional ball speed.",
    image_url:
      "https://images.unsplash.com/photo-1691608787603-ba908a78e280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 8,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["3W", "5W", "7W"],
      flex: ["Regular", "Stiff"],
      shaft_material: ["Graphite"],
      shaft_model: ["Project X HZRDUS Smoke", "True Temper Elevate"],
    },
    created_at: now,
  },
  {
    id: 109,
    name: "TaylorMade Stealth 2 Fairway Wood",
    category: "clubs",
    price: 329.99,
    description:
      "The Stealth 2 Fairway Wood features a V Steel sole design for improved turf interaction and a carbon crown that lowers the CG for high-launching, low-spinning performance from any lie.",
    image_url:
      "https://images.unsplash.com/photo-1689323473750-75520243edcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 9,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["3W", "3HL", "5W", "7W"],
      flex: ["Regular", "Stiff", "X-Stiff"],
      shaft_material: ["Graphite"],
      shaft_model: ["Fujikura Ventus Red", "KBS TD Cat 2"],
    },
    created_at: now,
  },
  {
    id: 110,
    name: "Titleist TSR2 Fairway Wood",
    category: "clubs",
    price: 369.99,
    description:
      "TSR2 Fairway Wood is engineered for exceptional speed with a variable face thickness design and a refined sole geometry for confident turf interaction on both tee shots and approach shots.",
    image_url:
      "https://images.unsplash.com/photo-1693163630525-526459aaa2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 11,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["3W", "5W", "7W", "9W"],
      flex: ["Regular", "Stiff"],
      shaft_material: ["Graphite"],
      shaft_model: ["HZRDUS Red CB", "Tensei AV Blue"],
    },
    created_at: now,
  },

  // ── HYBRIDS ──────────────────────────────────────────────────────────────
  {
    id: 103,
    name: "Titleist TSR2 Hybrid",
    category: "clubs",
    price: 299.99,
    description:
      "TSR2 Hybrid delivers max distance with a variable face thickness design and a low, deep CG for high launch and long carry. SureFit hosel provides precise loft and lie adjustments.",
    image_url:
      "https://images.unsplash.com/photo-1704863619342-9cf73eca5fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 15,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["17°", "19°", "21°", "23°"],
      flex: ["Regular", "Stiff", "Senior"],
      shaft_material: ["Graphite"],
      shaft_model: ["HZRDUS Red CB", "Tensei AV Blue"],
    },
    created_at: now,
  },
  {
    id: 111,
    name: "Callaway Apex UW Hybrid",
    category: "clubs",
    price: 279.99,
    description:
      "The Apex UW Hybrid bridges the gap between fairway woods and long irons with a hollow construction and Jailbreak technology that stiffens the body and transfers more energy into the face at impact.",
    image_url:
      "https://images.unsplash.com/photo-1591546324939-bc2638640783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 12,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["18°", "20°", "23°", "25°"],
      flex: ["Regular", "Stiff"],
      shaft_material: ["Graphite"],
      shaft_model: ["Aldila Ascent", "Project X Cypher"],
    },
    created_at: now,
  },
  {
    id: 112,
    name: "TaylorMade Stealth 2 Rescue Hybrid",
    category: "clubs",
    price: 289.99,
    description:
      "Stealth 2 Rescue combines a 40-layer carbon fiber crown with a V Steel sole for easy launch and consistent distance from any lie. Twist Face technology corrects off-center hits for straighter results.",
    image_url:
      "https://images.unsplash.com/photo-1662692990252-c578c3a430b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 14,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["16°", "19°", "22°", "25°", "28°"],
      flex: ["Regular", "Stiff", "Senior", "Ladies"],
      shaft_material: ["Graphite"],
      shaft_model: ["Fujikura Ventus Red", "KBS Hybrid"],
    },
    created_at: now,
  },

  // ── IRONS ──────────────────────────────────────────────────────────────
  {
    id: 104,
    name: "TaylorMade P770 Iron Set (4–PW)",
    category: "clubs",
    price: 1199.99,
    description:
      "The P770 Iron Set blends forged feel with distance technology. Each head features a hollow body construction with a forged face and SpeedFoam Air to deliver exceptional ball speed and a pure, forged feel.",
    image_url:
      "https://images.unsplash.com/photo-1691608788396-43e0e6ed9535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 6,
    is_featured: true,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["4–PW", "5–PW", "5–GW"],
      flex: ["Regular", "Stiff", "X-Stiff"],
      shaft_material: ["Steel", "Graphite"],
      shaft_model: ["True Temper Dynamic Gold", "KBS Tour"],
    },
    created_at: now,
  },
  {
    id: 113,
    name: "Callaway Apex Pro Iron Set (4–PW)",
    category: "clubs",
    price: 1399.99,
    description:
      "The Apex Pro Iron Set is forged from 1025 mild carbon steel for a pure, buttery feel. Urethane Microspheres fill the cavity to absorb unwanted vibration while maintaining the soft feel tour players demand.",
    image_url:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 5,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["3–PW", "4–PW", "5–PW"],
      flex: ["Stiff", "X-Stiff", "Tour"],
      shaft_material: ["Steel"],
      shaft_model: ["True Temper Dynamic Gold", "Project X 6.0"],
    },
    created_at: now,
  },
  {
    id: 114,
    name: "Titleist T200 Iron Set (4–PW)",
    category: "clubs",
    price: 1249.99,
    description:
      "T200 Irons are engineered for distance and forgiveness with a Max Impact technology core that delivers explosive ball speed. A high-density tungsten weighting provides optimal launch and spin.",
    image_url:
      "https://images.unsplash.com/photo-1624456844739-f4949b946645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 8,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["4–PW", "5–PW"],
      flex: ["Regular", "Stiff", "X-Stiff"],
      shaft_material: ["Steel", "Graphite"],
      shaft_model: ["True Temper AMT Tour", "Nippon NS Pro Modus3"],
    },
    created_at: now,
  },

  // ── WEDGES ──────────────────────────────────────────────────────────────
  {
    id: 105,
    name: "Titleist Vokey SM10 Wedge",
    category: "clubs",
    price: 179.99,
    description:
      "The Vokey SM10 Wedge features a new Spin Milled 10 groove for optimized spin on every shot. Progressive CG provides consistent feel through impact, and tour-proven shapes inspire confidence at address.",
    image_url:
      "https://images.unsplash.com/photo-1689323473750-75520243edcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 20,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["46°", "50°", "52°", "54°", "56°", "58°", "60°"],
      flex: ["Wedge"],
      shaft_material: ["Steel"],
      shaft_model: ["True Temper Dynamic Gold", "Nippon NS Pro"],
    },
    created_at: now,
  },
  {
    id: 115,
    name: "Callaway Jaws Raw Wedge",
    category: "clubs",
    price: 169.99,
    description:
      "JAWS Raw Wedge features the sharpest grooves in Callaway history, machined from raw carbon steel that rusts over time for even more spin. A tour-inspired shape delivers consistent gapping and control.",
    image_url:
      "https://images.unsplash.com/photo-1693163630525-526459aaa2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 18,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["48°", "50°", "52°", "54°", "56°", "58°", "60°", "64°"],
      flex: ["Wedge"],
      shaft_material: ["Steel"],
      shaft_model: ["True Temper Dynamic Gold", "KBS Hi-Rev 2.0"],
    },
    created_at: now,
  },
  {
    id: 116,
    name: "Cleveland RTX 6 ZipCore Wedge",
    category: "clubs",
    price: 159.99,
    description:
      "RTX 6 ZipCore features a lower and more centered core material that reduces mass near the face, boosting face flex for higher spin at every loft. UltiZip grooves deliver maximum spin from any lie.",
    image_url:
      "https://images.unsplash.com/photo-1691608787603-ba908a78e280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 22,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ["46°", "48°", "50°", "52°", "54°", "56°", "58°", "60°"],
      flex: ["Wedge"],
      shaft_material: ["Steel"],
      shaft_model: ["Dynamic Gold Spinner", "KBS Hi-Rev 2.0"],
    },
    created_at: now,
  },

  // ── PUTTERS ──────────────────────────────────────────────────────────────
  {
    id: 106,
    name: "Scotty Cameron Special Select Putter",
    category: "clubs",
    price: 449.99,
    description:
      "Crafted from 303 stainless steel, the Scotty Cameron Special Select Putter delivers a pure, solid feel at impact. A precision milled face and classic Newport 2 shape make it a staple on tour worldwide.",
    image_url:
      "https://images.unsplash.com/photo-1704863619342-9cf73eca5fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 9,
    is_featured: true,
    attributes: {
      hand: ["Right", "Left"],
      loft: ['33"', '34"', '35"'],
      flex: ["N/A"],
      shaft_material: ["Steel"],
      shaft_model: ["Cameron Matador", "Cameron Custom"],
    },
    created_at: now,
  },
  {
    id: 117,
    name: "Odyssey Ai-ONE Milled Putter",
    category: "clubs",
    price: 399.99,
    description:
      "The Ai-ONE Milled Putter uses artificial intelligence to design a unique milled face pattern that delivers consistent ball speed across the entire face for more accurate distance control on every putt.",
    image_url:
      "https://images.unsplash.com/photo-1591546324939-bc2638640783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 11,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ['33"', '34"', '35"'],
      flex: ["N/A"],
      shaft_material: ["Steel"],
      shaft_model: ["Stroke Lab", "White Hot OG"],
    },
    created_at: now,
  },
  {
    id: 118,
    name: "TaylorMade Spider GTX Putter",
    category: "clubs",
    price: 429.99,
    description:
      "The Spider GTX Putter features a true face insert made from high-friction surlyn that promotes forward roll immediately at impact. A high-MOI mallet shape provides maximum stability for consistent putting.",
    image_url:
      "https://images.unsplash.com/photo-1662692990252-c578c3a430b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 8,
    is_featured: false,
    attributes: {
      hand: ["Right", "Left"],
      loft: ['33"', '34"', '35"'],
      flex: ["N/A"],
      shaft_material: ["Steel"],
      shaft_model: ["Pure Roll Insert", "True Path Alignment"],
    },
    created_at: now,
  },

  // ── BALLS ──────────────────────────────────────────────────────────────
  {
    id: 201,
    name: "Titleist Pro V1 Golf Balls",
    category: "balls",
    price: 54.99,
    description:
      "The #1 ball in golf. Pro V1 delivers exceptional distance, consistent flight, very soft feel, and Drop-and-Stop greenside control. Featuring a 388 tetrahedral dimple design for penetrating trajectory.",
    image_url:
      "https://images.unsplash.com/photo-1562589461-cd172cbacbeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 50,
    is_featured: true,
    attributes: {
      color: ["White", "Yellow"],
      quantity: ["Dozen (12)", "Half Dozen (6)"],
    },
    created_at: now,
  },
  {
    id: 202,
    name: "Callaway Chrome Soft Golf Balls",
    category: "balls",
    price: 47.99,
    description:
      "Chrome Soft provides the perfect combination of distance, feel, and control. The Graphene Dual SoftFast Core reduces spin off the driver while a thin mantle and urethane cover deliver incredible greenside spin.",
    image_url:
      "https://images.unsplash.com/photo-1621005570352-6418df03796b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 40,
    is_featured: false,
    attributes: {
      color: ["White", "Yellow", "Triple Track"],
      quantity: ["Dozen (12)", "Half Dozen (6)"],
    },
    created_at: now,
  },
  {
    id: 203,
    name: "Bridgestone Tour B XS Golf Balls",
    category: "balls",
    price: 44.99,
    description:
      "Tiger Woods' ball of choice. The Tour B XS features Bridgestone's REACTIV urethane cover technology that intelligently reacts to the force of impact for greater distance off the tee and more spin around the green.",
    image_url:
      "https://images.unsplash.com/photo-1566491277990-3100bfc1e923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 35,
    is_featured: false,
    attributes: { color: ["White", "Yellow"], quantity: ["Dozen (12)"] },
    created_at: now,
  },
  {
    id: 204,
    name: "Srixon Z-Star Golf Balls",
    category: "balls",
    price: 39.99,
    description:
      "The Z-Star is built for players who demand explosive driver distance and soft greenside feel. FastLayer Core technology transitions from soft center to firm outer edge for the best of both worlds.",
    image_url:
      "https://images.unsplash.com/photo-1562204320-31975a5e09ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 45,
    is_featured: false,
    attributes: {
      color: ["White", "Yellow", "Tour Yellow"],
      quantity: ["Dozen (12)", "Half Dozen (6)"],
    },
    created_at: now,
  },

  // ── APPAREL ────────────────────────────────────────────────────────────
  {
    id: 301,
    name: "Nike Dri-FIT Victory Golf Polo",
    category: "apparel",
    price: 65.0,
    description:
      "Nike's Dri-FIT Victory Polo wicks sweat away to keep you cool and comfortable on the course. A slim fit with stretch fabric provides a full range of motion through every swing.",
    image_url:
      "https://images.unsplash.com/photo-1622622016645-7b7065e7c129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 30,
    is_featured: true,
    attributes: {
      color: ["White", "Black", "Navy", "Green"],
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      quantity: ["1"],
    },
    created_at: now,
  },
  {
    id: 302,
    name: "TravisMathew Coto Performance Polo",
    category: "apparel",
    price: 85.0,
    description:
      "The Coto Polo from TravisMathew is crafted from a moisture-wicking, 4-way stretch fabric for ultimate comfort. A modern fit with subtle texture keeps you looking sharp from the first tee to the 19th hole.",
    image_url:
      "https://images.unsplash.com/photo-1521330784804-5f69f8a17b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 25,
    is_featured: false,
    attributes: {
      color: ["Heather Gray", "White", "Heather Blue", "Black"],
      size: ["S", "M", "L", "XL", "XXL"],
      quantity: ["1"],
    },
    created_at: now,
  },
  {
    id: 303,
    name: "Adidas Ultimate365 Golf Pants",
    category: "apparel",
    price: 90.0,
    description:
      "Built for comfort and performance, the Ultimate365 Pants feature a stretch fabric with UV protection. A tailored fit and clean aesthetic make these pants versatile for the course and beyond.",
    image_url:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 20,
    is_featured: false,
    attributes: {
      color: ["Khaki", "Navy", "Black", "Gray"],
      size: ["30x30", "32x30", "32x32", "34x30", "34x32", "36x32"],
      quantity: ["1"],
    },
    created_at: now,
  },
  {
    id: 304,
    name: "Callaway Chev Performance Cap",
    category: "apparel",
    price: 32.0,
    description:
      "The Callaway Chev Performance Cap features moisture-wicking Opti-Dry technology and a UV-resistant fabric to keep you cool and protected in the sun. An adjustable back strap ensures a perfect fit.",
    image_url:
      "https://images.unsplash.com/photo-1693163630525-526459aaa2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 60,
    is_featured: false,
    attributes: {
      color: ["White", "Black", "Navy", "Gray"],
      size: ["One Size"],
      quantity: ["1"],
    },
    created_at: now,
  },

  // ── ACCESSORIES ────────────────────────────────────────────────────────
  {
    id: 401,
    name: "FootJoy StaSof Golf Glove",
    category: "accessories",
    price: 28.0,
    description:
      "FootJoy's best-selling glove. The StaSof features a premium Cabretta leather palm for soft feel and superior grip in all conditions. Strategically placed perforations provide ventilation and comfort.",
    image_url:
      "https://images.unsplash.com/photo-1689323473750-75520243edcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 75,
    is_featured: false,
    attributes: {
      color: ["White", "Black", "White/Black"],
      glove_size: ["Small", "Medium", "Medium/Large", "Large", "XL"],
      quantity: ["1", "2 Pack"],
    },
    created_at: now,
  },
  {
    id: 402,
    name: "Titleist Players 4 StaDry Stand Bag",
    category: "accessories",
    price: 249.99,
    description:
      "The Players 4 StaDry Stand Bag features 100% waterproof construction with sealed zippers and a waterproof base. A 4-way top with full-length dividers keeps your clubs organized throughout the round.",
    image_url:
      "https://images.unsplash.com/photo-1693163532134-5ea6c80b58a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 10,
    is_featured: true,
    attributes: {
      color: ["Black", "Navy/White", "Red/Black", "Forest/White"],
      glove_size: ["N/A"],
      quantity: ["1"],
    },
    created_at: now,
  },
  {
    id: 403,
    name: "Bushnell Tour V6 Shift Rangefinder",
    category: "accessories",
    price: 299.99,
    description:
      "The Tour V6 Shift is the #1 rangefinder in golf. Slope-Switch Technology lets you toggle slope measurement on/off with one click, while PinSeeker with JOLT confirms you locked onto the flag with a vibrating burst.",
    image_url:
      "https://images.unsplash.com/photo-1591546324939-bc2638640783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 14,
    is_featured: true,
    attributes: {
      color: ["Black", "Black/Red"],
      glove_size: ["N/A"],
      quantity: ["1"],
    },
    created_at: now,
  },
  {
    id: 404,
    name: "Pride Professional Tee System",
    category: "accessories",
    price: 12.99,
    description:
      "The PTS Evolution Tee System features a flexible, biodegradable cup design that reduces friction at impact for longer, more accurate drives. Available in multiple heights to suit every club and tee box.",
    image_url:
      "https://images.unsplash.com/photo-1662692990252-c578c3a430b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stock: 200,
    is_featured: false,
    attributes: {
      color: ["White", "Natural Wood", "Assorted"],
      glove_size: ["N/A"],
      quantity: ["30 Pack", "50 Pack", "100 Pack"],
    },
    created_at: now,
  },
];

export function getMockByCategory(category: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}

export function getMockFeatured(): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.is_featured);
}

export function getMockById(id: number): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.id === id);
}
