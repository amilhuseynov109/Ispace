import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { deviceImage } from "../utils/images";

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [confirmed, setConfirmed] = useState(false);

  function handleCheckout() {
    setConfirmed(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-xl px-5 py-20 text-center">
        <div className="rounded-3xl border border-green-200 bg-green-50 p-10">
          <p className="text-5xl">✅</p>
          <h1 className="mt-4 text-2xl font-semibold text-ink">
            Your order is confirmed!
          </h1>
          <p className="mt-3 text-subtle">
            Thank you for your purchase. A confirmation has been sent to your
            e-mail, and our team will contact you shortly to arrange delivery.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium text-white hover:bg-blue-600"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <p className="text-5xl">🛒</p>
        <h1 className="mt-4 text-2xl font-semibold text-ink">
          Your basket is empty
        </h1>
        <p className="mt-2 text-subtle">
          Browse our products and add something you love.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-600"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="mb-8 text-3xl font-semibold text-ink">Your basket</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Список товаров */}
        <div className="lg:col-span-2">
          <ul className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
            {items.map((item) => (
              <li
                key={item.key}
                className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Левая часть: Картинка и описание */}
                <div className="flex items-center gap-4">
                  <img
                    src={deviceImage(item, item.color, 120)}
                    alt={item.name}
                    className="h-16 w-16 rounded-xl bg-[#f5f5f7] object-contain sm:h-20 sm:w-20"
                  />
                  <div>
                    <Link
                      to={`/product/${item.slug}`}
                      className="font-medium text-ink hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-subtle">
                      {[item.color, item.storage].filter(Boolean).join(" · ")}
                    </p>
                    <p className="text-sm text-subtle sm:hidden mt-0.5 font-medium">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                </div>

                {/* Правая часть: Кнопки количество, итоговая цена и кнопка удаления */}
                <div className="flex items-center justify-between gap-3 border-t border-black/5 pt-3 sm:border-t-0 sm:pt-0 sm:justify-end">
                  {/* Кнопки переключения количества */}
                  <div className="flex items-center rounded-full border border-black/15">
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      className="px-2.5 py-1 text-base text-subtle hover:text-ink"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm font-medium text-ink">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      className="px-2.5 py-1 text-base text-subtle hover:text-ink"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Итоговая цена элемента и удаление */}
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-ink sm:w-24 sm:text-right">
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-subtle hover:text-red-500"
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={clearCart}
            className="mt-4 text-sm text-subtle hover:text-red-500"
          >
            Clear basket
          </button>
        </div>

        {/* Чек / Блок заказа */}
        <div className="h-fit rounded-2xl border border-black/5 bg-[#f5f5f7] p-6">
          <h2 className="mb-4 text-lg font-semibold text-ink">
            Order summary
          </h2>
          <div className="flex justify-between py-1 text-sm text-subtle">
            <span>Subtotal</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between py-1 text-sm text-subtle">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-black/10 pt-4 text-lg font-semibold text-ink">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-blue-600"
          >
            Checkout
          </button>
          <Link
            to="/"
            className="mt-3 block text-center text-sm text-brand hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}