import { Link } from "react-router-dom";
import { formatPrice, discountPercent } from "../utils/format";
import { deviceImage } from "../utils/images";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const discount = discountPercent(product.price, product.oldPrice);

  const firstColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;

  return (
    <div className="group flex flex-col rounded-2xl border border-black/5 bg-white p-4 text-center transition hover:shadow-lg">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-[#f5f5f7]">
          {product.badge && (
            <span className="absolute left-2 top-2 z-10 rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
              {product.badge}
            </span>
          )}

          {discount > 0 && (
            <span className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
              -{discount}%
            </span>
          )}

          <img
            src={deviceImage(product, firstColor)}
            alt={product.name}
            className="mx-auto h-48 w-48 object-contain p-2 transition group-hover:scale-105"
          />
        </div>

        <h3 className="mt-2 text-base font-semibold text-ink">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-subtle">
          {product.tagline}
        </p>
      </Link>

      <div className="mt-3 flex-1" />

      <div className="mt-2">
        <p className="text-lg font-semibold text-ink">
          {formatPrice(product.price)}
        </p>
        {product.oldPrice && (
          <p className="text-sm text-subtle line-through">
            {formatPrice(product.oldPrice)}
          </p>
        )}
      </div>

      <button
        onClick={() => addItem(product)}
        className="mt-3 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
      >
        Add to basket
      </button>
    </div>
  );
}