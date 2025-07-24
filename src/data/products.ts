export interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  variants: ProductVariant[];
  featured: boolean;
  image: string;
}

export interface ProductVariant {
  id: number;
  size: string;
  price: number;
  discountPrice?: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 4,
    name: "Happydent-S Toothpaste",
    description: "Our all-natural formula with organic ingredients provides effective cleaning without harsh chemicals. Enriched with essential oils and natural mint for exceptional freshness and gentle protection for the whole family.",
    benefits: [
      
      "Free from artificial colors and flavors",
      "Prevents cavities and strengthens teeth naturally",
      "Eco-friendly packaging",
      "Safe for the entire family"
    ],
    ingredients: [
      "Aqua",
      "Sorbitol",
      "PEG",
      "Precipitated Silica",
      "Clove Oil",
      "Neem Oil"
    ],
    variants: [
      {
        id: 305,
        size: "70 gm",
        price: 210,
        inStock: true
      }
      // ,
      // {
      //   id: 302,
      //   size: "125ml",
      //   price: 8.99,
      //   discountPrice: 7.49,
      //   inStock: true
      // },
      // {
      //   id: 303,
      //   size: "200ml",
      //   price: 12.99,
      //   inStock: true
      // }
    ],
    featured: true,
    image: "https://raw.githubusercontent.com/nyoupaneroshan/happy/refs/heads/main/public/happydents.png"
  },
  {
    id: 1,
    name: "White Happydent (S)",
    description: "Our premium whitening toothpaste that removes stubborn stains and provides long-lasting protection against cavities and plaque. Fortified with fluoride and natural mint for a powerful clean and fresh breath.",
    benefits: [
      "Removes surface stains for visibly whiter teeth",
      "Strengthens enamel and prevents cavities",
      "Fights plaque and tartar build-up",
      "Provides long-lasting fresh breath"
    ],
    ingredients: [
      "Hydrated Silica",
      "Sorbitol",
      "Sodium Fluoride",
      "Natural Mint Extract",
      "Glycerin",
      "Sodium Lauryl Sulfate"
    ],
    variants: [
      {
        id: 101,
        size: "40 gm",
        price: 50,
        inStock: true
      }
      // ,
      // {
      //   id: 102,
      //   size: "125ml",
      //   price: 7.99,
      //   discountPrice: 6.99,
      //   inStock: true
      // },
      // {
      //   id: 103,
      //   size: "200ml",
      //   price: 10.99,
      //   inStock: true
      // }
    ],
    featured: true,
    // image: "https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    image: "https://raw.githubusercontent.com/nyoupaneroshan/happy/refs/heads/main/public/1.png"
  },
  {
    id: 2,
    name: "White Happydent (M)",
    description: "Specially formulated for sensitive teeth, this gentle toothpaste provides relief from pain while strengthening tooth enamel. Contains potassium nitrate to soothe nerve endings and provide immediate and long-lasting relief.",
    benefits: [
      "Reduces sensitivity and provides pain relief",
      "Builds protection against sensitivity triggers",
      "Gentle cleaning without irritation",
      "Strengthens enamel to prevent future sensitivity"
    ],
    ingredients: [
      "Potassium Nitrate",
      "Stannous Fluoride",
      "Zinc Citrate",
      "Glycerin",
      "Gentle Cleaning Silica",
      "Sodium Bicarbonate"
    ],
    variants: [
      {
        id: 201,
        size: "100 gm",
        price: 120,
        inStock: true
      }
      // ,
      // {
      //   id: 202,
      //   size: "125ml",
      //   price: 8.49,
      //   inStock: true
      // },
      // {
      //   id: 203,
      //   size: "200ml",
      //   price: 11.99,
      //   discountPrice: 9.99,
      //   inStock: false
      // }
    ],
    featured: true,
    image: "https://raw.githubusercontent.com/nyoupaneroshan/happy/refs/heads/main/public/2.png"
  },
  {
    id: 3,
    name: "White Happydent (L)",
    description: "Our all-natural formula with organic ingredients provides effective cleaning without harsh chemicals. Enriched with essential oils and natural mint for exceptional freshness and gentle protection for the whole family.",
    benefits: [
      "100% natural ingredients",
      "Free from artificial colors and flavors",
      "Prevents cavities and strengthens teeth naturally",
      "Eco-friendly packaging",
      "Safe for the entire family"
    ],
    ingredients: [
      "Calcium Carbonate",
      "Organic Aloe Vera",
      "Xylitol",
      "Organic Mint Oil",
      "Tea Tree Oil",
      "Coconut Oil"
    ],
    variants: [
      {
        id: 301,
        size: "150 gm",
        price: 165,
        inStock: true
      }
      // ,
      // {
      //   id: 302,
      //   size: "125ml",
      //   price: 8.99,
      //   discountPrice: 7.49,
      //   inStock: true
      // },
      // {
      //   id: 303,
      //   size: "200ml",
      //   price: 12.99,
      //   inStock: true
      // }
    ],
    featured: false,
    image: "https://raw.githubusercontent.com/nyoupaneroshan/happy/refs/heads/main/public/3.png"
  }
];