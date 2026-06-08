import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">
        All Products
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {/*  colum change gap */}
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}