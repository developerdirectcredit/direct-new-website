import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {

    const navigate = useNavigate();

    return (
        <div
            onClick={() =>
                navigate(`/product/${product.id}`)
            }
            className="
              bg-white
              rounded-2xl
              p-4
              text-center
              shadow-sm

             cursor-pointer
             hover:shadow-lg
            transition
            "
        >
            <div className="text-4xl">
                {product.icon}
            </div>

            <h3 className="mt-3 font-medium">
                {product.name}
            </h3>
        </div>
    );
}