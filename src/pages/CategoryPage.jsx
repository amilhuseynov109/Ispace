import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import { categories } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = categories.find((item) => item.id === categoryId);

  useEffect(() => {
    setLoading(true);

    getProducts({ category: categoryId }).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [categoryId]);

  const title = category ? category.name : "Products";

  return (
    <div className="mx-auto max-w-page px-5 py-10">
      <h1 className="mb-2 text-3xl font-semibold text-ink">
        {title}
      </h1>

      <p className="mb-8 text-subtle">
        {loading ? "Loading…" : `${products.length} products`}
      </p>

      {loading ? <Loader /> : <ProductGrid products={products} />}
    </div>
  );
}