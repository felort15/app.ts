type Sizes = 'S' | 'M' | 'L';
type UserID = string | number;
type ProductID = string | number;


interface Product{
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    sizes: Sizes[];
}

const products: Product[] =[];

products.push({
    id: '1',
    title: 'p1',
    createdAt: new Date(),
    stock: 12,
    sizes: ['M'],
});

const addProduct = (data: Product) => {
    products.push(data);
}



