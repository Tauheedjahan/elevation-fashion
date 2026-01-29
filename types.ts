
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  details: string[];
  sizes: string[];
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

export type Page = 'home' | 'product' | 'category';
