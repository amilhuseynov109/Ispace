import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { formatPrice } from "../utils/format";
import { deviceImage } from "../utils/images";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const boxRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const cleanQuery = query.trim().toLowerCase();

  let matches = [];
  
  if (cleanQuery.length > 0) {
    matches = products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(cleanQuery);
      const matchCategory = p.category.toLowerCase().includes(cleanQuery);
      
      return matchName || matchCategory;
    });
  }

  const suggestions = matches.slice(0, 5);
  const productResults = matches.slice(0, 4);
  const showDropdown = open && cleanQuery.length > 0;

  function goToSearch() {
    if (!cleanQuery) return;
    setOpen(false);
    navigate(`/search?q=${encodeURIComponent(cleanQuery)}`);
  }

  function goToProduct(slug) {
    setOpen(false);
    setQuery("");
    navigate(`/product/${slug}`);
  }

  function onSubmit(e) {
    e.preventDefault();
    goToSearch();
  }

  return (
    <div ref={boxRef} className="relative w-full">
      <form onSubmit={onSubmit}>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="MacBook Neo from 1 499 ₼"
          className="w-full rounded-full border border-black/10 bg-[#f5f5f7] py-2 pl-10 pr-4 text-sm outline-none focus:border-brand focus:bg-white"
        />
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-subtle">
          🔍
        </span>
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border border-black/10 bg-white text-left shadow-xl">
          
          {matches.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-subtle">
              No products found for “{query}”.
            </p>
          )}

          {matches.length > 0 && (
            <>
              <div className="px-4 pt-3 text-xs font-semibold uppercase tracking-wide text-subtle">
                Suggestions
              </div>
              <ul className="pb-2">
                {suggestions.map((p) => (
                  <li key={`s-${p.id}`}>
                    <button
                      onClick={() => goToProduct(p.slug)}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-ink hover:bg-black/5"
                    >
                      <span>{p.name}</span>
                      {p.badge && (
                        <span className="text-[10px] font-semibold uppercase text-brand">
                          {p.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="border-t border-black/5 px-4 pt-3 text-xs font-semibold uppercase tracking-wide text-subtle">
                Products
              </div>
              <ul className="pb-2">
                {productResults.map((p) => {
                  const firstColor = p.colors && p.colors.length > 0 ? p.colors[0] : null;

                  return (
                    <li key={`p-${p.id}`}>
                      <button
                        onClick={() => goToProduct(p.slug)}
                        className="flex w-full items-center gap-3 px-4 py-2 text-left hover:bg-black/5"
                      >
                        <img
                          src={deviceImage(p, firstColor, 96)}
                          alt={p.name}
                          className="h-10 w-10 rounded-lg bg-[#f5f5f7] object-contain"
                        />
                        <span className="flex-1">
                          <span className="block text-sm font-medium text-ink">
                            {p.name}
                          </span>
                          <span className="block text-sm font-semibold text-green-600">
                            {formatPrice(p.price)}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={goToSearch}
                className="w-full border-t border-black/5 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-subtle hover:bg-black/5"
              >
                Search for “{query}”
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}