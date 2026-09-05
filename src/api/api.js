import { products } from "../data/products.js";

export function getProducts({
  category,
  search,
  minPrice,
  maxPrice,
  series,
  storage,
  color,
} = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...products];

      if (category) {
        filtered = filtered.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (search) {
        const query = search.toLowerCase().trim();
        filtered = filtered.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.tagline?.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
      }

      const highestPrice =
        filtered.length > 0
          ? Math.max(...filtered.map((item) => item.price))
          : 0;

      const availableColors = [
        ...new Set(filtered.flatMap((item) => item.colors || [])),
      ];
      const availableStorage = [
        ...new Set(
          filtered.flatMap((item) =>
            item.storageOptions ? item.storageOptions.map((s) => s.label) : []
          )
        ),
      ];

      if (minPrice !== undefined && minPrice !== "") {
        filtered = filtered.filter((item) => item.price >= Number(minPrice));
      }
      if (maxPrice !== undefined && maxPrice !== "") {
        filtered = filtered.filter((item) => item.price <= Number(maxPrice));
      }

      if (series) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(series.toLowerCase())
        );
      }

      if (storage) {
        filtered = filtered.filter((item) =>
          item.storageOptions?.some((s) => s.label === storage)
        );
      }

      if (color) {
        filtered = filtered.filter((item) =>
          item.colors?.some((c) => c.toLowerCase() === color.toLowerCase())
        );
      }

      resolve({
        products: filtered,
        totalCount: filtered.length,
        highestPrice: highestPrice,
        availableColors,
        availableStorage,
      });
    }, 300);
  });
}

export function getProductBySlug(slug) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.slug === slug);
      resolve(product);
    }, 300);
  });
}

export function getFeaturedProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const featured = products.slice(0, 8);
      resolve(featured);
    }, 300);
  });
}