// Utility types


type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string
}

type ProductSummary = Pick<Product, 'id'|'name' | 'price'>

type ProductWithoutStock = Omit<Product, 'stock'| 'color'>

type ProductWithColor = Required<Product>

type OptionalProduct = Partial<Product>

type ProductReadOnly = Readonly<Product>


const emptyObject: Record<string, unknown> = {}

const product1 = {
    id: 222,
    name: "mouse",
    price: "22"
}