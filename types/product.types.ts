export interface IProduct {
  id: number;
  title: string;
  price: number;
  brand: string;
  shell_material: string;
  battery_capacity: number;
  charging_connector_type: string;
  description: string;
  gpu: string;
  display_diagonal: string;
  cpu_title: string;
  cpu_cores_quantity: string;
  display_resolution: string;
  display_matrix_type: string;
  cpu_frequency: string;
  color: string;
  main_image: string;
}

export type IProductCard = Pick<IProduct, "id" | "title" | "price" | "main_image">;

export interface IProductRes {
  data: Product[];
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductAttributes {
  title: string;
  price: number;
  brand: string;
  shell_material: string;
  battery_capacity: number;
  charging_connector_type: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  gpu: string;
  display_diagonal: string;
  cpu_title: string;
  cpu_cores_quantity: string;
  display_resolution: string;
  display_matrix_type: string;
  cpu_frequency: string;
  color: string;
  main_image: MainImage;
}

export interface MainImage {
  data: Image;
}

export interface Image {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
}
