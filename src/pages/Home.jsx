import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider";
import ProductGrid from "../components/ProductGrid";
import ToolsResources from "../components/ToolsResources";

export default function Home() {
  return (
    // <div className="p-5 pb-28">
       <div className="max-w-7xl mx-auto px-6 py-8">
      <Header />

      <BannerSlider />

      <div className="
      bg-blue-100
      rounded-3xl
      p-5
      mb-8
      ">
        <h3 className="font-bold text-xl">
          Update your Profile
        </h3>

        <p>
          Share details for a better
          experience
        </p>
      </div>

      <ProductGrid />
      <ToolsResources />
    </div>
  );
}