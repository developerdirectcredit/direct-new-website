import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {

  const { id } = useParams();

  const product =
    products.find(
      p => p.id === Number(id)
    );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        {product?.name}
      </h1>

      <div className="text-8xl mt-6">
        {product?.icon}
      </div>

      <p className="mt-4 text-gray-500">
        Product Information Page
      </p>

    </div>
  );
}