import { getProductImage } from '@/lib/product-images';

export interface ComparisonProductRecord {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  overallScore: number;
  price: string;
  weight: string;
  costPerLb: string;
  costPerDay: string;
  type: string;
  summary: string;
  tags: string[];
  pros: string[];
  badge?: string;
  reviewUrl: string;
  buyUrl: string;
  scores: {
    dust: number;
    dustMeasurement: string;
    clumping: number;
    clumpingStatus: string;
    odor: number;
    odorStatus: string;
    tracking: number;
    trackingStatus: string;
    value: number;
  };
  features: {
    scented: boolean;
    flushable: boolean;
    biodegradable: boolean;
    lightweight: boolean;
    multiCat: boolean;
  };
  longevity: {
    single: string;
    multi: string;
  };
  verdict: {
    bestFor: string;
    worthIf?: string;
    skipIf?: string;
  };
  lastReviewedAt: string;
  latestTrending?: boolean;
  featuredCard?: {
    badge: string;
    icon: 'crown' | 'sparkles' | 'award' | 'star';
    gradient: string;
    size: 'large' | 'medium';
    specs: string[];
    worthIf: string;
    skipIf: string;
  };
  featuredOnReviewsPage?: boolean;
}

export interface ComparisonInsight {
  winner: ComparisonProductRecord;
  title: string;
  summary: string;
  reasons: string[];
  tradeoff: string;
  alternatives: Array<{
    product: ComparisonProductRecord;
    label: string;
    reason: string;
  }>;
}

export interface CompareBarProduct {
  id: string;
  name: string;
  image: string;
  price: string;
}

export interface ComparisonMatchupRecord {
  slug: string;
  products: [ComparisonProductRecord, ComparisonProductRecord];
  insight: ComparisonInsight;
  updatedAt: string;
}

export const productCatalog: ComparisonProductRecord[] = [
  {
    id: 'purrify',
    slug: 'purrify',
    name: 'Purrify Activated Carbon Additive',
    brand: 'Purrify',
    category: 'Litter Additive',
    image: getProductImage('purrify'),
    overallScore: 9.6,
    price: '$4.76 trial',
    weight: '12 g trial',
    costPerLb: '$18.99 est.',
    costPerDay: '$0.19 est.',
    type: 'Activated Carbon Additive',
    summary: 'Top-rated activated carbon additive with fragrance-free ammonia control, low-dust granules, and a free-trial entry point.',
    tags: ['additive', 'activated-carbon', 'odor-control', 'fragrance-free', 'trial', 'multi-cat'],
    pros: ['Fragrance-free ammonia control', 'Works with most litters', 'Free trial pack available'],
    badge: "Editor's Choice",
    reviewUrl: '/reviews/purrify',
    buyUrl: 'https://www.purrify.ca/products/trial-size/',
    scores: {
      dust: 9.3,
      dustMeasurement: 'Low-dust 8x30 mesh granules',
      clumping: 8.3,
      clumpingStatus: 'Additive only; does not fix weak clumps',
      odor: 9.9,
      odorStatus: 'Activated carbon targets ammonia',
      tracking: 9.4,
      trackingStatus: 'Dense granules stay in the box well',
      value: 9.6,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: true,
      lightweight: true,
      multiCat: true,
    },
    longevity: {
      single: '7+ days per application',
      multi: 'Reapply more often in high-output boxes',
    },
    verdict: {
      bestFor: 'Adding ammonia control to a litter your cat already likes',
      worthIf: 'You want a fragrance-free odor upgrade without changing base litter.',
      skipIf: 'You want a litter replacement or stronger clumping from the litter itself.',
    },
    lastReviewedAt: '2026-03-07',
    latestTrending: true,
    featuredOnReviewsPage: true,
  },
  {
    id: 'dr-elseys-cat-attract',
    slug: 'dr-elseys-cat-attract',
    name: "Dr. Elsey's Cat Attract",
    brand: "Dr. Elsey's",
    category: 'Clumping Clay / Behavioral',
    image: getProductImage('dr-elseys-cat-attract'),
    overallScore: 9.5,
    price: '$26.99',
    weight: '40 lbs',
    costPerLb: '$0.67',
    costPerDay: '$0.56',
    type: 'Clumping Clay',
    summary: 'Herbal attractant actually works for litter-box-avoidant cats, with the same low-dust multi-cat clay performance as Ultra.',
    tags: ['clay', 'clumping', 'behavioral', 'low-dust', 'multi-cat', 'attractant'],
    pros: ['Herbal attractant works', 'Low dust clay', 'Excellent for multi-cat homes'],
    badge: 'Best Multi-Cat',
    reviewUrl: '/reviews/dr-elseys-cat-attract',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 9.2,
      dustMeasurement: '0.04mg per pour',
      clumping: 9.8,
      clumpingStatus: 'Rock-solid',
      odor: 8.8,
      odorStatus: 'Strong unscented control',
      tracking: 7.3,
      trackingStatus: 'Moderate',
      value: 8.6,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '7 weeks',
      multi: '4.5 weeks',
    },
    verdict: {
      bestFor: 'Cats avoiding the litter box',
    },
    lastReviewedAt: '2026-03-05',
    latestTrending: true,
  },
  {
    id: 'dr-elseys-ultra',
    slug: 'dr-elseys-ultra',
    name: "Dr. Elsey's Ultra",
    brand: "Dr. Elsey's",
    category: 'Clumping Clay',
    image: getProductImage('dr-elseys-ultra'),
    overallScore: 9.4,
    price: '$24.99',
    weight: '40 lbs',
    costPerLb: '$0.62',
    costPerDay: '$0.51',
    type: 'Clumping Clay',
    summary: 'The gold standard for dust-free clay litter. Rock-solid clumps, very low dust, and excellent day-to-day usability.',
    tags: ['clay', 'clumping', 'low-dust', 'unscented', 'multi-cat', 'hypoallergenic'],
    pros: ['0.03mg dust per pour', 'Concrete-hard clumps', 'Lasts longer than budget clay'],
    badge: 'Best Clay Litter',
    reviewUrl: '/reviews/dr-elseys-ultra',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 9.4,
      dustMeasurement: '0.03mg per pour',
      clumping: 9.8,
      clumpingStatus: 'Rock-solid',
      odor: 8.5,
      odorStatus: 'Strong unscented control',
      tracking: 7.2,
      trackingStatus: 'Moderate',
      value: 8.8,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '7 weeks',
      multi: '4.5 weeks',
    },
    verdict: {
      bestFor: 'Dust-sensitive homes',
      worthIf: 'You want the cleanest clay experience with hard clumps and low dust.',
      skipIf: 'You need flushable or lightweight litter.',
    },
    lastReviewedAt: '2026-03-07',
    latestTrending: true,
    featuredCard: {
      badge: "Editor's Choice",
      icon: 'crown',
      gradient: 'from-[#D9B373] to-[#B38B4D]',
      size: 'large',
      specs: ['99% Dust Free', 'Hard Clumps', 'Low Tracking'],
      worthIf: 'You want zero dust and rock-hard clumps',
      skipIf: 'You need lightweight or flushable',
    },
  },
  {
    id: 'sustainably-yours',
    slug: 'sustainably-yours',
    name: 'Sustainably Yours',
    brand: 'Sustainably Yours',
    category: 'Natural (Corn + Cassava)',
    image: getProductImage('sustainably-yours'),
    overallScore: 9.3,
    price: '$29.99',
    weight: '26 lbs',
    costPerLb: '$1.15',
    costPerDay: '$0.63',
    type: 'Natural Corn + Cassava',
    summary: 'A premium natural litter with harder clumping than most plant-based options and bright white granules for easy health monitoring.',
    tags: ['natural', 'corn', 'cassava', 'flushable', 'biodegradable', 'low-tracking'],
    pros: ['Harder clumping than corn-only litters', 'White color helps monitoring', 'No fermented corn smell'],
    badge: 'Best Natural',
    reviewUrl: '/reviews/sustainably-yours',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 8.8,
      dustMeasurement: '0.11mg per pour',
      clumping: 9.3,
      clumpingStatus: 'Excellent for natural litter',
      odor: 8.6,
      odorStatus: 'Better than standard corn',
      tracking: 8.4,
      trackingStatus: 'Low',
      value: 7.8,
    },
    features: {
      scented: false,
      flushable: true,
      biodegradable: true,
      lightweight: true,
      multiCat: true,
    },
    longevity: {
      single: '6 weeks',
      multi: '4 weeks',
    },
    verdict: {
      bestFor: 'Best-performing natural litter shoppers',
    },
    lastReviewedAt: '2026-03-06',
  },
  {
    id: 'boxiecat-premium',
    slug: 'boxiecat-premium',
    name: 'Boxiecat Premium',
    brand: 'Boxiecat',
    category: 'Clumping Clay',
    image: getProductImage('boxiecat-premium'),
    overallScore: 9.2,
    price: '$27.99',
    weight: '40 lbs',
    costPerLb: '$0.70',
    costPerDay: '$0.55',
    type: 'Premium Clumping Clay',
    summary: 'Flat Top clumping tech keeps litter on the surface, making scooping cleaner and easier than typical premium clay formulas.',
    tags: ['clay', 'clumping', 'premium', 'low-dust', 'multi-cat', 'low-tracking'],
    pros: ['Flat Top clumping', 'Low dust premium clay', 'Excellent convenience'],
    badge: 'Best Convenience',
    reviewUrl: '/reviews/boxiecat-premium',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 9,
      dustMeasurement: '0.04mg per pour',
      clumping: 9.4,
      clumpingStatus: 'Flat-top easy scoop',
      odor: 8.7,
      odorStatus: 'Strong everyday control',
      tracking: 8.2,
      trackingStatus: 'Low',
      value: 8,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '7 weeks',
      multi: '4 weeks',
    },
    verdict: {
      bestFor: 'Lowest-maintenance scooping',
      worthIf: 'You want premium convenience and cleaner scooping in a multi-cat box.',
      skipIf: 'You are strictly optimizing for low upfront cost.',
    },
    lastReviewedAt: '2026-03-01',
    featuredCard: {
      badge: 'Best Value',
      icon: 'star',
      gradient: 'from-[#8B5E3C] to-[#6F4E37]',
      size: 'medium',
      specs: ['Flat Top Clumps', 'Low Dust', 'Unscented'],
      worthIf: 'You want premium quality with easier cleanup',
      skipIf: 'You need a cheaper bag price',
    },
  },
  {
    id: 'worlds-best',
    slug: 'worlds-best',
    name: "World's Best Cat Litter",
    brand: "World's Best",
    category: 'Natural Corn',
    image: getProductImage('worlds-best'),
    overallScore: 9.1,
    price: '$29.99',
    weight: '28 lbs',
    costPerLb: '$1.07',
    costPerDay: '$0.58',
    type: 'Corn Litter',
    summary: 'Flushable, lightweight, and eco-friendly corn litter with surprisingly strong clumping for a natural option.',
    tags: ['natural', 'corn', 'flushable', 'eco-friendly', 'biodegradable', 'lightweight'],
    pros: ['Flushable', 'Eco-friendly', 'Lightweight'],
    reviewUrl: '/reviews/worlds-best',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 7.8,
      dustMeasurement: '0.15mg per pour',
      clumping: 9,
      clumpingStatus: 'Excellent for corn',
      odor: 8.2,
      odorStatus: 'Good with daily scooping',
      tracking: 9,
      trackingStatus: 'Minimal',
      value: 7.2,
    },
    features: {
      scented: false,
      flushable: true,
      biodegradable: true,
      lightweight: true,
      multiCat: true,
    },
    longevity: {
      single: '6 weeks',
      multi: '4 weeks',
    },
    verdict: {
      bestFor: 'Eco-conscious owners who want flushable litter',
      worthIf: 'You want eco-friendly and flushable litter with very good daily usability.',
      skipIf: "You're on a tight budget or want the absolute lowest dust numbers.",
    },
    lastReviewedAt: '2026-03-06',
    featuredCard: {
      badge: 'Best Natural',
      icon: 'sparkles',
      gradient: 'from-[#15664C] to-[#0D4030]',
      size: 'medium',
      specs: ['Flushable', 'Lightweight', 'Eco-Friendly'],
      worthIf: 'You want eco-friendly and flushable',
      skipIf: "You're on a tight budget",
    },
  },
  {
    id: 'naturally-fresh',
    slug: 'naturally-fresh',
    name: 'Naturally Fresh Walnut',
    brand: 'Naturally Fresh',
    category: 'Walnut Shell (Natural)',
    image: getProductImage('naturally-fresh'),
    overallScore: 8.8,
    price: '$24.99',
    weight: '26 lbs',
    costPerLb: '$0.96',
    costPerDay: '$0.54',
    type: 'Walnut Shell',
    summary: 'A walnut-shell litter that clumps harder than many natural competitors and absorbs odor naturally without added fragrance.',
    tags: ['natural', 'walnut', 'biodegradable', 'clumping', 'odor-control', 'sustainable'],
    pros: ['Harder clumps than most natural litters', 'Sustainable byproduct', 'Natural odor control'],
    badge: 'Best Natural Clumping',
    reviewUrl: '/reviews/naturally-fresh',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 8.1,
      dustMeasurement: '0.13mg per pour',
      clumping: 8.9,
      clumpingStatus: 'Hard for natural litter',
      odor: 8.4,
      odorStatus: 'Strong natural absorption',
      tracking: 7.4,
      trackingStatus: 'Moderate',
      value: 8.1,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: true,
      lightweight: true,
      multiCat: true,
    },
    longevity: {
      single: '6 weeks',
      multi: '4 weeks',
    },
    verdict: {
      bestFor: 'Natural clumping without corn',
    },
    lastReviewedAt: '2025-11-18',
  },
  {
    id: 'catalyst',
    slug: 'catalyst',
    name: 'Catalyst Soft Wood',
    brand: 'Catalyst',
    category: 'Pine (Soft Granules)',
    image: getProductImage('catalyst'),
    overallScore: 8.7,
    price: '$27.99',
    weight: '18 lbs',
    costPerLb: '$1.56',
    costPerDay: '$0.72',
    type: 'Soft Wood / Pine',
    summary: 'A soft, sand-like pine litter that avoids the pellet feel many cats reject while keeping dust and smell manageable.',
    tags: ['natural', 'pine', 'soft-texture', 'flushable', 'biodegradable', 'lightweight'],
    pros: ['Cats accept the soft texture', 'Low dust', 'Sustainable upcycled pine'],
    badge: 'Best Soft Natural',
    reviewUrl: '/reviews/catalyst',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 8.3,
      dustMeasurement: '0.15mg per pour',
      clumping: 7.7,
      clumpingStatus: 'Good for wood litter',
      odor: 8.1,
      odorStatus: 'Fresh wood scent helps',
      tracking: 8.3,
      trackingStatus: 'Low',
      value: 7,
    },
    features: {
      scented: false,
      flushable: true,
      biodegradable: true,
      lightweight: true,
      multiCat: false,
    },
    longevity: {
      single: '5 weeks',
      multi: '3.5 weeks',
    },
    verdict: {
      bestFor: 'Cats that reject pellets',
    },
    lastReviewedAt: '2025-11-20',
  },
  {
    id: 'prettylitter',
    slug: 'prettylitter',
    name: 'PrettyLitter',
    brand: 'PrettyLitter',
    category: 'Silica Crystal',
    image: getProductImage('prettylitter'),
    overallScore: 8.8,
    price: '$24.00',
    weight: '8 lbs',
    costPerLb: '$3.00',
    costPerDay: '$0.80',
    type: 'Silica Crystal',
    summary: 'A crystal litter built around health monitoring and light weight, with a strong subscription convenience angle and weaker clumping value.',
    tags: ['crystal', 'silica', 'health-monitoring', 'lightweight', 'subscription', 'low-tracking'],
    pros: ['Health monitoring works', 'Lightweight bags', 'Strong urine odor control'],
    badge: 'Best Health Tech',
    reviewUrl: '/reviews/prettylitter',
    buyUrl: 'https://prettylitter.com',
    scores: {
      dust: 8.6,
      dustMeasurement: 'Very low crystal dust',
      clumping: 4.2,
      clumpingStatus: 'Non-clumping',
      odor: 8.9,
      odorStatus: 'Very good urine odor control',
      tracking: 9.1,
      trackingStatus: 'Minimal',
      value: 6.8,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: false,
      lightweight: true,
      multiCat: false,
    },
    longevity: {
      single: '4 weeks',
      multi: '2.5 weeks',
    },
    verdict: {
      bestFor: 'Health monitoring and lightweight convenience',
      worthIf: 'You care more about health signals and easy lifting than classic clumping performance.',
      skipIf: 'You want traditional scoopable clumps or the best value per pound.',
    },
    lastReviewedAt: '2026-03-04',
    featuredCard: {
      badge: 'Best Tech',
      icon: 'award',
      gradient: 'from-slate-500 to-slate-700',
      size: 'medium',
      specs: ['Health Monitor', 'Lightweight', 'Low Tracking'],
      worthIf: 'You want health monitoring features',
      skipIf: 'You prefer traditional clumping',
    },
  },
  {
    id: 'arm-hammer-clump-seal',
    slug: 'arm-hammer-clump-seal',
    name: 'Arm & Hammer Clump & Seal',
    brand: 'Arm & Hammer',
    category: 'Scented Clay',
    image: getProductImage('arm-hammer-clump-seal'),
    overallScore: 8.7,
    price: '$16.99',
    weight: '38 lbs',
    costPerLb: '$0.45',
    costPerDay: '$0.43',
    type: 'Scented Clumping Clay',
    summary: 'A budget-friendly clay litter with aggressive odor control and easy store availability, offset by strong fragrance and more tracking.',
    tags: ['clay', 'clumping', 'odor-control', 'scented', 'budget', 'multi-cat'],
    pros: ['Excellent odor masking', 'Very affordable', 'Easy to find'],
    badge: 'Best Odor Control',
    reviewUrl: '/reviews/arm-hammer-clump-seal',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 6,
      dustMeasurement: '0.45mg per pour',
      clumping: 8.1,
      clumpingStatus: 'Good',
      odor: 9.1,
      odorStatus: '7-day heavy fragrance',
      tracking: 6,
      trackingStatus: 'Tracks heavily',
      value: 9,
    },
    features: {
      scented: true,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '5 weeks',
      multi: '3.5 weeks',
    },
    verdict: {
      bestFor: 'Budget shoppers prioritizing odor control',
    },
    lastReviewedAt: '2026-03-07',
    latestTrending: true,
  },
  {
    id: 'hardball',
    slug: 'hardball',
    name: 'Arm & Hammer HardBall',
    brand: 'Arm & Hammer',
    category: 'Clumping Clay',
    image: getProductImage('hardball'),
    overallScore: 8.5,
    price: '$19.99',
    weight: '38 lbs',
    costPerLb: '$0.53',
    costPerDay: '$0.47',
    type: 'Fast-Clumping Clay',
    summary: 'Fast-forming hard clumps with baking soda odor help, making it a strong mid-range clay pick if you can tolerate moderate dust.',
    tags: ['clay', 'clumping', 'baking-soda', 'mid-range', 'odor-control', 'scented'],
    pros: ['Fast clumping', 'Hard clumps', 'Good mid-range value'],
    reviewUrl: '/reviews/hardball',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 6,
      dustMeasurement: '0.48mg per pour',
      clumping: 9,
      clumpingStatus: 'Hard and fast',
      odor: 8,
      odorStatus: 'Baking soda support',
      tracking: 6,
      trackingStatus: 'Moderate',
      value: 8,
    },
    features: {
      scented: true,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '5 weeks',
      multi: '3.5 weeks',
    },
    verdict: {
      bestFor: 'Fast hard clumping on a mid-range budget',
    },
    lastReviewedAt: '2025-11-28',
  },
  {
    id: 'arm-hammer-super-scoop',
    slug: 'arm-hammer-super-scoop',
    name: 'Arm & Hammer Super Scoop',
    brand: 'Arm & Hammer',
    category: 'Clumping Clay (Budget)',
    image: getProductImage('arm-hammer-super-scoop'),
    overallScore: 8.4,
    price: '$13.99',
    weight: '40 lbs',
    costPerLb: '$0.35',
    costPerDay: '$0.35',
    type: 'Budget Clumping Clay',
    summary: 'The best litter under $15 if you need simple clumping performance and broad availability more than premium dust control.',
    tags: ['clay', 'clumping', 'budget', 'odor-control', 'widely-available', 'multi-cat'],
    pros: ['Under $15', 'Widely available', 'Strong budget value'],
    badge: 'Best Budget',
    reviewUrl: '/reviews/arm-hammer-super-scoop',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 5.7,
      dustMeasurement: '0.52mg per pour',
      clumping: 7.8,
      clumpingStatus: 'Solid budget clumps',
      odor: 7.8,
      odorStatus: 'Baking soda helps',
      tracking: 5.9,
      trackingStatus: 'Moderate-high',
      value: 9.3,
    },
    features: {
      scented: true,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '4.5 weeks',
      multi: '3 weeks',
    },
    verdict: {
      bestFor: 'Lowest-cost clumping litter',
    },
    lastReviewedAt: '2025-11-24',
  },
  {
    id: 'feline-pine',
    slug: 'feline-pine',
    name: 'Feline Pine',
    brand: 'Feline Pine',
    category: 'Pine Pellet',
    image: getProductImage('feline-pine'),
    overallScore: 8,
    price: '$19.99',
    weight: '40 lbs',
    costPerLb: '$0.50',
    costPerDay: '$0.31',
    type: 'Pine Pellet',
    summary: 'Zero-silica, zero-clay pine pellets with naturally low dust, but they require a sifting setup and a cat that accepts pellets.',
    tags: ['pine', 'pellet', 'natural', 'low-dust', 'sifting-box', 'biodegradable'],
    pros: ['Very low dust', '100% natural', 'Affordable long-term cost'],
    badge: 'Best Pine Pellet',
    reviewUrl: '/reviews/feline-pine',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 9.3,
      dustMeasurement: 'Near-zero airborne dust',
      clumping: 2.5,
      clumpingStatus: 'Non-clumping pellets',
      odor: 7.9,
      odorStatus: 'Natural pine masking',
      tracking: 8.8,
      trackingStatus: 'Pellets stay put',
      value: 8.5,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: true,
      lightweight: false,
      multiCat: false,
    },
    longevity: {
      single: '6 weeks',
      multi: '3.5 weeks',
    },
    verdict: {
      bestFor: 'Pellet users and sifting boxes',
    },
    lastReviewedAt: '2025-10-20',
  },
  {
    id: 'fresh-step',
    slug: 'fresh-step',
    name: 'Fresh Step Scented',
    brand: 'Fresh Step',
    category: 'Scented Clay',
    image: getProductImage('fresh-step'),
    overallScore: 8.1,
    price: '$18.99',
    weight: '42 lbs',
    costPerLb: '$0.45',
    costPerDay: '$0.40',
    type: 'Scented Clumping Clay',
    summary: 'A dependable grocery-store clay option with decent clumping, a noticeable fragrance profile, and fair everyday value.',
    tags: ['clay', 'clumping', 'scented', 'grocery-store', 'budget', 'multi-cat'],
    pros: ['Widely available', 'Fair value', 'Pleasant scent for some owners'],
    reviewUrl: '/reviews/fresh-step',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 6.2,
      dustMeasurement: '0.42mg per pour',
      clumping: 7.9,
      clumpingStatus: 'Decent',
      odor: 8,
      odorStatus: 'Strong fragrance masking',
      tracking: 6.2,
      trackingStatus: 'Moderate',
      value: 7.9,
    },
    features: {
      scented: true,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '4.5 weeks',
      multi: '3 weeks',
    },
    verdict: {
      bestFor: 'Convenient store-bought clay',
    },
    lastReviewedAt: '2026-03-03',
    latestTrending: true,
  },
  {
    id: 'frisco',
    slug: 'frisco',
    name: 'Frisco by Chewy',
    brand: 'Frisco',
    category: 'Clumping Clay (Budget)',
    image: getProductImage('frisco'),
    overallScore: 8,
    price: '$13.00',
    weight: '40 lbs',
    costPerLb: '$0.33',
    costPerDay: '$0.30',
    type: 'Budget Clumping Clay',
    summary: 'Strong raw value with easy Chewy availability and decent automatic-box compatibility if you can live with more dust.',
    tags: ['clay', 'clumping', 'budget', 'chewy', 'auto-box', 'value'],
    pros: ['$13 for 40 lb', 'Good value', 'Auto-box compatible'],
    badge: 'Best Value',
    reviewUrl: '/reviews/frisco',
    buyUrl: 'https://chewy.com',
    scores: {
      dust: 5.5,
      dustMeasurement: '0.58mg per pour',
      clumping: 7.4,
      clumpingStatus: 'Acceptable',
      odor: 7.3,
      odorStatus: 'Fine with daily scooping',
      tracking: 5.8,
      trackingStatus: 'Moderate-high',
      value: 9.4,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '4 weeks',
      multi: '2.8 weeks',
    },
    verdict: {
      bestFor: 'Cheapest everyday clay',
    },
    lastReviewedAt: '2025-10-28',
  },
  {
    id: 'tidy-cats',
    slug: 'tidy-cats',
    name: 'Purina Tidy Cats',
    brand: 'Purina',
    category: 'Clumping Clay (Budget)',
    image: getProductImage('tidy-cats'),
    overallScore: 7.9,
    price: '$15.49',
    weight: '35 lbs',
    costPerLb: '$0.44',
    costPerDay: '$0.39',
    type: 'Budget Clumping Clay',
    summary: 'A grocery-store staple with broad availability, lots of variants, and okay overall performance without excelling anywhere specific.',
    tags: ['clay', 'clumping', 'budget', 'grocery-store', 'scented', 'multi-cat'],
    pros: ['Easy to find', 'Many formulas', 'Good enough odor control'],
    reviewUrl: '/reviews/tidy-cats',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 5.8,
      dustMeasurement: '0.50mg per pour',
      clumping: 7.2,
      clumpingStatus: 'Average',
      odor: 7.5,
      odorStatus: 'Solid for budget clay',
      tracking: 5.9,
      trackingStatus: 'Moderate-high',
      value: 8.2,
    },
    features: {
      scented: true,
      flushable: false,
      biodegradable: false,
      lightweight: false,
      multiCat: true,
    },
    longevity: {
      single: '4 weeks',
      multi: '2.8 weeks',
    },
    verdict: {
      bestFor: 'Easy grocery-store replenishment',
    },
    lastReviewedAt: '2026-02-28',
  },
  {
    id: 'tuft-paw',
    slug: 'tuft-paw',
    name: 'Tuft + Paw',
    brand: 'Tuft + Paw',
    category: 'Soy/Tofu (Designer)',
    image: getProductImage('tuft-paw'),
    overallScore: 8.3,
    price: '$29.00',
    weight: '9 lbs',
    costPerLb: '$3.22',
    costPerDay: '$0.97',
    type: 'Soy / Tofu',
    summary: 'A designer tofu litter with nearly zero dust and very low tracking, but it is expensive and mostly for people who value aesthetics and convenience.',
    tags: ['natural', 'tofu', 'soy', 'flushable', 'designer', 'low-dust'],
    pros: ['Near-zero dust', 'Minimal tracking', 'Flushable and biodegradable'],
    badge: 'Best Designer',
    reviewUrl: '/reviews/tuft-paw',
    buyUrl: 'https://tuftandpaw.com',
    scores: {
      dust: 9.3,
      dustMeasurement: 'Trace dust only',
      clumping: 7.8,
      clumpingStatus: 'Good',
      odor: 8,
      odorStatus: 'Good everyday control',
      tracking: 9.2,
      trackingStatus: 'Very low',
      value: 6.1,
    },
    features: {
      scented: false,
      flushable: true,
      biodegradable: true,
      lightweight: true,
      multiCat: false,
    },
    longevity: {
      single: '4 weeks',
      multi: '2.5 weeks',
    },
    verdict: {
      bestFor: 'Style-conscious, low-tracking setups',
    },
    lastReviewedAt: '2025-11-10',
  },
  {
    id: 'okocat-paper-pellet',
    slug: 'okocat-paper-pellet',
    name: 'Ökocat Paper Pellet',
    brand: 'Ökocat',
    category: 'Paper Pellet',
    image: getProductImage('okocat-paper-pellet'),
    overallScore: 8.2,
    price: '$19.99',
    weight: '20 lbs',
    costPerLb: '$1.00',
    costPerDay: '$0.52',
    type: 'Paper Pellet',
    summary: 'Extremely low-dust paper pellets that work best for surgery recovery, declawed cats, or severe dust sensitivity rather than everyday clumping use.',
    tags: ['paper', 'pellet', 'low-dust', 'special-needs', 'post-surgery', 'allergy-friendly'],
    pros: ['0.00mg dust in testing', 'Soft on paws', 'Great for special needs'],
    badge: 'Best for Special Needs',
    reviewUrl: '/reviews/okocat-paper-pellet',
    buyUrl: 'https://amazon.com',
    scores: {
      dust: 10,
      dustMeasurement: '0.00mg per pour',
      clumping: 2.1,
      clumpingStatus: 'Non-clumping pellets',
      odor: 7.2,
      odorStatus: 'Fine with frequent changes',
      tracking: 8.9,
      trackingStatus: 'Low',
      value: 7.4,
    },
    features: {
      scented: false,
      flushable: false,
      biodegradable: true,
      lightweight: true,
      multiCat: false,
    },
    longevity: {
      single: '3.5 weeks',
      multi: '2 weeks',
    },
    verdict: {
      bestFor: 'Post-surgery or severe dust sensitivity',
    },
    lastReviewedAt: '2025-11-06',
  },
];

const productCatalogById = new Map(productCatalog.map((product) => [product.id, product]));
const productCatalogBySlug = new Map(productCatalog.map((product) => [product.slug, product]));
const productCatalogByName = new Map(
  productCatalog.map((product) => [product.name.toLowerCase(), product]),
);

export function getCatalogProductById(id: string) {
  return productCatalogById.get(id);
}

export function getCatalogProductBySlug(slug: string) {
  return productCatalogBySlug.get(slug);
}

export function getCatalogProductByName(name: string) {
  return productCatalogByName.get(name.toLowerCase());
}

export function toCompareBarProduct(product: ComparisonProductRecord): CompareBarProduct {
  return {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
  };
}

export function getComparisonProductsByIds(ids: string[]) {
  return ids
    .map((id) => getCatalogProductById(id))
    .filter((product): product is ComparisonProductRecord => Boolean(product));
}

export function getFeaturedWinnerProducts() {
  return productCatalog.filter((product) => product.featuredCard);
}

export function getLatestReviewedProducts(limit = 6) {
  return [...productCatalog]
    .sort(
      (left, right) =>
        new Date(right.lastReviewedAt).getTime() - new Date(left.lastReviewedAt).getTime(),
    )
    .slice(0, limit);
}

export function getReviewDirectoryProducts() {
  return productCatalog.filter((product) => !product.featuredOnReviewsPage);
}

export function formatCatalogDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function getNumericPrice(price: string) {
  return Number.parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
}

function getNumericCost(cost: string) {
  return Number.parseFloat(cost.replace(/[^0-9.]/g, '')) || 0;
}

export function buildComparisonInsight(
  products: ComparisonProductRecord[],
): ComparisonInsight | null {
  if (products.length === 0) {
    return null;
  }

  const ranked = [...products].sort((left, right) => {
    const leftScore =
      left.overallScore * 4 +
      left.scores.dust +
      left.scores.clumping +
      left.scores.odor +
      left.scores.value;
    const rightScore =
      right.overallScore * 4 +
      right.scores.dust +
      right.scores.clumping +
      right.scores.odor +
      right.scores.value;

    return rightScore - leftScore;
  });

  const winner = ranked[0];
  const cheapest = [...products].sort(
    (left, right) => getNumericCost(left.costPerDay) - getNumericCost(right.costPerDay),
  )[0];
  const bestDust = [...products].sort((left, right) => right.scores.dust - left.scores.dust)[0];
  const bestOdor = [...products].sort((left, right) => right.scores.odor - left.scores.odor)[0];
  const bestNatural = products.find((product) => product.features.flushable || product.features.biodegradable);

  const reasons: string[] = [];

  if (winner.id === bestDust.id) {
    reasons.push(`Best dust control here at ${winner.scores.dustMeasurement}.`);
  }

  if (winner.id === bestOdor.id) {
    reasons.push(`Strongest odor control in this set with ${winner.scores.odorStatus.toLowerCase()}.`);
  }

  if (winner.scores.clumping >= 9) {
    reasons.push(`Clumping is a real edge: ${winner.scores.clumpingStatus.toLowerCase()}.`);
  }

  if (winner.id === cheapest.id) {
    reasons.push(`It is also the cheapest daily option at ${winner.costPerDay} per day.`);
  } else {
    reasons.push(`It still lands a stronger overall score than cheaper options because it is more balanced.`);
  }

  const weakestMetric = [
    { label: 'dust control', score: winner.scores.dust },
    { label: 'clumping', score: winner.scores.clumping },
    { label: 'odor control', score: winner.scores.odor },
    { label: 'tracking', score: winner.scores.tracking },
    { label: 'value', score: winner.scores.value },
  ].sort((left, right) => left.score - right.score)[0];

  const alternatives = [
    cheapest.id !== winner.id
      ? {
        product: cheapest,
        label: 'Best Budget Alternative',
        reason: `${cheapest.name} has the lowest daily cost at ${cheapest.costPerDay}.`,
      }
      : null,
    bestDust.id !== winner.id
      ? {
        product: bestDust,
        label: 'Best Low-Dust Alternative',
        reason: `${bestDust.name} leads on dust control with ${bestDust.scores.dustMeasurement}.`,
      }
      : null,
    bestNatural && bestNatural.id !== winner.id
      ? {
        product: bestNatural,
        label: 'Best Natural Alternative',
        reason: `${bestNatural.name} is the standout if flushable or biodegradable matters most.`,
      }
      : null,
  ].filter((alternative): alternative is NonNullable<typeof alternative> => Boolean(alternative));

  return {
    winner,
    title: `Why ${winner.name} wins this matchup`,
    summary: `${winner.name} is the strongest all-around pick in this comparison for ${winner.verdict.bestFor.toLowerCase()}.`,
    reasons: reasons.slice(0, 3),
    tradeoff: `Primary tradeoff: ${winner.name}'s weakest area here is ${weakestMetric.label}.`,
    alternatives: alternatives.slice(0, 3),
  };
}

export function searchCatalog(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return [...productCatalog]
    .map((product) => {
      let score = 0;

      if (product.name.toLowerCase().includes(normalizedQuery)) {
        score += 5;
      }

      if (product.brand.toLowerCase().includes(normalizedQuery)) {
        score += 3;
      }

      if (product.category.toLowerCase().includes(normalizedQuery)) {
        score += 2;
      }

      if (product.summary.toLowerCase().includes(normalizedQuery)) {
        score += 2;
      }

      if (product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))) {
        score += 3;
      }

      return { product, score };
    })
    .filter(({ score }) => score > 0)
    .sort((left, right) => {
      if (right.score === left.score) {
        return right.product.overallScore - left.product.overallScore;
      }

      return right.score - left.score;
    })
    .map(({ product }) => product);
}

export function getCompetitorsForProduct(productId: string, limit = 5) {
  const currentProduct = getCatalogProductById(productId);

  if (!currentProduct) {
    return [];
  }

  return [...productCatalog]
    .filter((product) => product.id !== productId)
    .sort((left, right) => {
      const leftDistance =
        Math.abs(left.overallScore - currentProduct.overallScore) +
        Math.abs(getNumericPrice(left.price) - getNumericPrice(currentProduct.price)) / 10;
      const rightDistance =
        Math.abs(right.overallScore - currentProduct.overallScore) +
        Math.abs(getNumericPrice(right.price) - getNumericPrice(currentProduct.price)) / 10;

      return leftDistance - rightDistance;
    })
    .slice(0, limit);
}

function isStaticMatchupEligible(product: ComparisonProductRecord) {
  return product.category !== 'Litter Additive';
}

function sortProductsForMatchup(
  left: ComparisonProductRecord,
  right: ComparisonProductRecord,
): [ComparisonProductRecord, ComparisonProductRecord] {
  return [left, right].sort((first, second) => first.slug.localeCompare(second.slug)) as [
    ComparisonProductRecord,
    ComparisonProductRecord,
  ];
}

export function getComparisonMatchupSlug(
  left: ComparisonProductRecord,
  right: ComparisonProductRecord,
) {
  const [first, second] = sortProductsForMatchup(left, right);
  return `${first.slug}-vs-${second.slug}`;
}

export function getComparisonMatchupHref(slug: string) {
  return `/compare/${slug}`;
}

function getCuratedCompetitorsForStaticMatchups(productId: string, limit = 3) {
  return getCompetitorsForProduct(productId, productCatalog.length)
    .filter((product) => isStaticMatchupEligible(product))
    .slice(0, limit);
}

const comparisonMatchups: ComparisonMatchupRecord[] = (() => {
  const slugs = new Set<string>();
  const matchups: ComparisonMatchupRecord[] = [];

  for (const product of productCatalog) {
    if (!isStaticMatchupEligible(product)) {
      continue;
    }

    const competitors = getCuratedCompetitorsForStaticMatchups(product.id);

    for (const competitor of competitors) {
      const slug = getComparisonMatchupSlug(product, competitor);

      if (slugs.has(slug)) {
        continue;
      }

      const products = sortProductsForMatchup(product, competitor);
      const insight = buildComparisonInsight(products);

      if (!insight) {
        continue;
      }

      slugs.add(slug);
      matchups.push({
        slug,
        products,
        insight,
        updatedAt: [...products]
          .map((item) => item.lastReviewedAt)
          .sort((left, right) => right.localeCompare(left))[0],
      });
    }
  }

  return matchups.sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
})();

const comparisonMatchupBySlug = new Map(
  comparisonMatchups.map((matchup) => [matchup.slug, matchup]),
);

export function getAllComparisonMatchups() {
  return comparisonMatchups;
}

export function getComparisonMatchupBySlug(slug: string) {
  return comparisonMatchupBySlug.get(slug);
}

export function getComparisonMatchupForProducts(leftId: string, rightId: string) {
  const left = getCatalogProductById(leftId);
  const right = getCatalogProductById(rightId);

  if (!left || !right) {
    return null;
  }

  return getComparisonMatchupBySlug(getComparisonMatchupSlug(left, right)) || null;
}

export function getComparisonMatchupsForProduct(productId: string, limit = 3) {
  const product = getCatalogProductById(productId);

  if (!product || !isStaticMatchupEligible(product)) {
    return [];
  }

  return getCuratedCompetitorsForStaticMatchups(productId, limit)
    .map((competitor) => getComparisonMatchupForProducts(productId, competitor.id))
    .filter(
      (matchup): matchup is ComparisonMatchupRecord => Boolean(matchup),
    )
    .slice(0, limit);
}

export function getRelatedComparisonMatchups(slug: string, limit = 6) {
  const currentMatchup = getComparisonMatchupBySlug(slug);

  if (!currentMatchup) {
    return [];
  }

  const currentProductIds = new Set(currentMatchup.products.map((product) => product.id));

  return comparisonMatchups
    .filter((matchup) => matchup.slug !== slug)
    .map((matchup) => ({
      matchup,
      sharedProductCount: matchup.products.filter((product) => currentProductIds.has(product.id)).length,
    }))
    .filter((entry) => entry.sharedProductCount > 0)
    .sort((left, right) => {
      if (right.sharedProductCount !== left.sharedProductCount) {
        return right.sharedProductCount - left.sharedProductCount;
      }

      return right.matchup.updatedAt.localeCompare(left.matchup.updatedAt);
    })
    .slice(0, limit)
    .map((entry) => entry.matchup);
}
