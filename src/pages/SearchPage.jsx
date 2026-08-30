import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../api/api";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get("q") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts({ search: query }).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [query]);

  const statusText = loading
    ? "Searching…"
    : `${products.length} result(s) for "${query}"`;

  return (
    <div className="mx-auto max-w-page px-5 py-10">
      <h1 className="mb-2 text-3xl font-semibold text-ink">
        Search results
      </h1>

      <p className="mb-8 text-subtle">
        {statusText}
      </p>

      {loading ? <Loader /> : <ProductGrid products={products} />}
    </div>
  );
}