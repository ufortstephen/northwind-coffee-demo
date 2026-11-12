export type Product = {
  id: string;
  name: string;
  notes: string;
  price: number;
  weight: string;
};

export const products: Product[] = [
  { id: "house", name: "House Blend", notes: "Chocolate, toasted almond, brown sugar", price: 16, weight: "340 g" },
  { id: "ethiopia", name: "Ethiopia Guji", notes: "Blueberry, jasmine, lemon zest", price: 21, weight: "250 g" },
  { id: "decaf", name: "Night Owl Decaf", notes: "Cocoa, cherry, maple", price: 18, weight: "340 g" },
];
