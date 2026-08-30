import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "../api/api";
import { categories } from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts().then((data) => {
      setFeatured(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-b from-[#f5f5f7] to-white ">
        <div className="mx-auto max-w-page px-5 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            iPhone 17 Pro
          </h1>
          <p className="mt-3 text-lg text-subtle md:text-2xl">
            The ultimate iPhone. Now with Trade-in from 180 ₼/month.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/product/iphone-17-pro"
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-600"
            >
              Buy now
            </Link>
            <Link
              to="/category/iphone"
              className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium text-ink hover:bg-black/5"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-14">
        <h2 className="mb-6 text-2xl font-semibold text-ink">
          Shop by category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white p-5 text-center transition hover:shadow-md"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <span className="text-sm font-medium text-ink">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 pb-6">
        <h2 className="mb-6 text-2xl font-semibold text-ink">See what's new</h2>
        {loading ? <Loader /> : <ProductGrid products={featured} />}
      </section>
    </div>
  );
}
