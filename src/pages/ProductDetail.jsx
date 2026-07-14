import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug } from "../api/api";
import { formatPrice, discountPercent } from "../utils/format";
import { deviceImage, hexFor } from "../utils/images";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductBySlug(slug).then((data) => {
      setProduct(data);
      setSelectedColor(data?.colors?.[0] ?? null);
      setSelectedStorage(data?.storageOptions?.[0] ?? null);
      setQuantity(1);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="mx-auto max-w-page px-5 py-20 text-center">
        <h1 className="text-2xl font-semibold text-ink">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-brand hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const price = product.price + (selectedStorage?.add ?? 0);
  const oldPrice = product.oldPrice
    ? product.oldPrice + (selectedStorage?.add ?? 0)
    : undefined;
  const discount = discountPercent(price, oldPrice);

  function handleAdd() {
    addItem(product, {
      quantity,
      color: selectedColor,
      storage: selectedStorage?.label ?? null,
      price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="mx-auto max-w-page px-5 py-10">
      <nav className="mb-6 text-sm text-subtle">
        <Link to="/" className="hover:text-ink">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${product.category}`} className="hover:text-ink">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#f5f5f7]">
          {discount > 0 && (
            <span className="absolute left-5 top-5 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
              -{discount}%
            </span>
          )}
          <img
            src={deviceImage(product, selectedColor, 640)}
            alt={`${product.name} in ${selectedColor}`}
            className="absolute inset-0 h-full w-full object-contain p-2"
          />
        </div>

        <div>
          {product.badge && (
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              {product.badge}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-semibold text-ink">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-subtle">{product.tagline}</p>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-ink">
              {formatPrice(price * quantity)}
            </span>
            {oldPrice && (
              <span className="text-lg text-subtle line-through">
                {formatPrice(oldPrice * quantity)}
              </span>
            )}
            {discount > 0 && (
              <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-sm font-semibold text-red-500">
                Save {discount}%
              </span>
            )}
          </div>

          <p className="mt-5 text-ink/80">{product.description}</p>

          {product.colors?.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-ink">
                Color: <span className="text-subtle">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                    aria-label={color}
                    className={`h-8 w-8 rounded-full border-2 transition ${
                      selectedColor === color
                        ? "border-brand ring-2 ring-brand/30"
                        : "border-black/15 hover:border-black/40"
                    }`}
                    style={{ backgroundColor: hexFor(color) }}
                  />
                ))}
              </div>
            </div>
          )}

          {product.storageOptions?.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-ink">
                Storage:{" "}
                <span className="text-subtle">{selectedStorage?.label}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.storageOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setSelectedStorage(option)}
                    className={`rounded-xl border px-4 py-2 text-sm transition ${
                      selectedStorage?.label === option.label
                        ? "border-brand bg-brand/5 text-brand"
                        : "border-black/15 text-ink hover:border-black/40"
                    }`}
                  >
                    <span className="block font-medium">{option.label}</span>
                    <span className="block text-xs text-subtle">
                      {formatPrice(product.price + option.add)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-black/15">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 text-lg text-subtle hover:text-ink"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1.5 text-lg text-subtle hover:text-ink"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              {added ? "Added to basket ✓" : "Add to basket"}
            </button>
          </div>

          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold text-ink">
              Specifications
            </h2>
            <dl className="divide-y divide-black/5 rounded-2xl border border-black/5">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between px-4 py-3 text-sm">
                  <dt className="text-subtle">{key}</dt>
                  <dd className="font-medium text-ink">
                    {key === "Storage" && selectedStorage
                      ? selectedStorage.label
                      : value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
