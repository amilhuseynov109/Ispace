import { Link, NavLink } from "react-router-dom";
import { categories } from "../data/products";
import { useCart } from "../context/CartContext";
import SearchBox from "./SearchBox";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function PhoneIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-1 py-3">
        
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-ink"
          >
            iSpace
          </Link>
          <span className="rounded-md border border-black/15 px-1.5 py-0.5 text-left text-[10px] font-medium leading-tight text-ink">
            Premium
            <br />
            Partner
          </span>
        </div>

        <div className="w-full max-w-sm">
          <SearchBox />
        </div>

        <div className="flex items-center gap-3 text-sm text-subtle sm:gap-4">
          <button
            type="button"
            className="hidden items-center gap-1.5 text-ink/80 hover:text-ink lg:flex"
          >
            <PinIcon />
            <span className="whitespace-nowrap">Pickup department</span>
          </button>

          <button
            type="button"
            className="hidden items-center gap-1 text-ink/80 hover:text-ink sm:flex"
          >
            <span>English</span>
            <span className="text-xs">▾</span>
          </button>

          <button
            type="button"
            aria-label="Call us"
            className="hidden text-subtle hover:text-ink sm:block"
          >
            <PhoneIcon />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="hidden text-subtle hover:text-ink sm:block"
          >
            <UserIcon />
          </button>

          <Link
            to="/cart"
            className="relative flex items-center text-subtle hover:text-ink"
            aria-label="Cart"
          >
            <BagIcon />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className="border-t border-black/5">
        <ul className="mx-auto flex max-w-6xl items-center justify-start gap-1 overflow-x-auto px-1 py-2 text-sm">
          {categories.map((cat) => (
            <li key={cat.id}>
              <NavLink
                to={`/category/${cat.id}`}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-3 py-1.5 transition ${
                    isActive
                      ? "bg-ink text-white"
                      : "text-subtle hover:bg-black/5 hover:text-ink"
                  }`
                }
              >
                {cat.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1.5 transition ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-subtle hover:bg-black/5 hover:text-ink"
                }`
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}