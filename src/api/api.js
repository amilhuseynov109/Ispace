import { products, categories } from "../data/products";

const DELAY = 300;

function delay(data) {
  return new Promise((resolve) => setTimeout(() => resolve(data), DELAY));
}

export function getCategories() {
  return delay(categories);
}

export function getProducts({ category, search } = {}) {
  let result = [...products];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (search) {
    const q = search.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }

  return delay(result);
}

export function getProductBySlug(slug) {
  const product = products.find((p) => p.slug === slug);
  return delay(product || null);
}

export function getFeaturedProducts() {
  return delay(products.filter((p) => p.badge === "New").slice(0, 6));
}
