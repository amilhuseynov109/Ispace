import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import { formatPrice } from "../utils/format";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [maxCategoryPrice, setMaxCategoryPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  const [colorsList, setColorsList] = useState([]);
  const [storageList, setStorageList] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts({
      category: categoryId,
      minPrice,
      maxPrice,
      series: selectedSeries,
      storage: selectedStorage,
      color: selectedColor,
    }).then((res) => {
      setProducts(res.products);
      setTotalCount(res.totalCount);
      if (res.highestPrice) setMaxCategoryPrice(res.highestPrice);
      if (res.availableColors) setColorsList(res.availableColors);
      if (res.availableStorage) setStorageList(res.availableStorage);
      setLoading(false);
    });
  }, [categoryId, minPrice, maxPrice, selectedSeries, selectedStorage, selectedColor]);

  const resetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedSeries("");
    setSelectedStorage("");
    setSelectedColor("");
  };

  return (
    <div className="mx-auto max-w-page px-5 py-8">
      <h1 className="text-3xl font-bold text-ink capitalize mb-6">
        {categoryId || "Products"}
      </h1>

      <div className="block lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-500 font-medium py-2.5 rounded-xl hover:bg-blue-50 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className={`${isMobileOpen ? "block" : "hidden"} lg:block lg:col-span-1 space-y-6 text-sm text-ink`}>
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-semibold text-gray-700">Available to order</span>
            <span className="text-subtle">{totalCount} Products</span>
          </div>

          <div className="border-b pb-6">
            <h3 className="font-semibold text-gray-900 mb-1">Price, ₼</h3>
            <p className="text-xs text-subtle mb-3">
              Highest price {formatPrice(maxCategoryPrice)}
            </p>
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="From"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="number"
                placeholder="To"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="border-b pb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Series</h3>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            >
              <option value="">All Series</option>
              <option value="Pro">Pro Series</option>
              <option value="Air">Air Series</option>
              <option value="Mini">Mini Series</option>
              <option value="Ultra">Ultra Series</option>
            </select>
          </div>

          {storageList.length > 0 && (
            <div className="border-b pb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Storage</h3>
              <div className="flex flex-wrap gap-2">
                {storageList.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStorage(selectedStorage === st ? "" : st)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                      selectedStorage === st
                        ? "bg-black text-white border-black"
                        : "border-gray-300 text-gray-700 hover:border-black"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          )}

          {colorsList.length > 0 && (
            <div className="border-b pb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              >
                <option value="">All Colors</option>
                {colorsList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            onClick={resetFilters}
            className="w-full py-2 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
          >
            Reset Filters
          </button>
        </aside>

        <main className="lg:col-span-3">
          {loading ? <Loader /> : <ProductGrid products={products} />}
        </main>
      </div>
    </div>
  );
}