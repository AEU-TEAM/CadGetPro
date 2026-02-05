export interface PaginatedProduct {
  count: number;
  limit: number;
  offset: number;
  products: Product[];
}

export interface Product {
  id: string;
  title: string;
  subtitle: string | null;
  ribbon_text: string | null;
  site_product_selection: any | null;

  description: string;
  thumbnail: string;

  product_collections: ProductCollection[];
  order: number;

  variants: Variant[];
  options: Option[];

  images: ProductImage[];
  additional_info: any[];

  type: ProductType;
  purchasable: boolean;

  seo_settings: SeoSettings;
  page_settings: PageSettings;

  custom_fields: any[];
  updated_at: string;

  related_products: Product[];
}

export interface ProductCollection {
  product_id: string;
  collection_id: string;
  order: number;
}


export interface Variant {
  id: string;
  title: string;
  image_url: string | null;
  sku: string | null;
  manage_inventory: boolean;
  prices: Price[];
  options: Option[];
}

export interface Price {
  sale_amount: number | null;
  amount: number;
  currency_code: string;
  currency: Currency;
}

export interface Currency {
  code: string;
  symbol: string;
  symbol_native: string;
  name: string;
  name_plural: string;
  decimal_digits: number;
  rounding: number;
  template: string;
  min_amount: number;
}

export interface ProductImage {
  url: string;
  order: number;
  type: 'image' | 'video';
}

export interface Option {
  id?: string;
  title?: string;
  values?: string[];
}


export interface ProductType {
  value: 'physical' | 'digital';
}

export interface SeoSettings {
  slug: string;
  description: string;
  ogImageOrigin: string;
  ogImagePath: string;
  ogImageAlt: string;
}

export interface PageSettings {
  seoSlug: string;
  seoDescription: string;
  seoOgImagePath: string;
  seoOgImageAlt: string;
  seoOgImageOrigin: string;
}
