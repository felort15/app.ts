import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' |'category'> {
  categoryId: string;
};

export interface UpdateProductDto extends Partial<CreateProductDto> {
};

export type FindProductDto = Readonly<Partial<Omit<Product, 'tags'>>> & {
  readonly tags?: readonly string[];
};


type example = Pick<Product, 'color' | 'description'>;

type example2 = Required<Product>;

type example3 = Readonly<Product>;

