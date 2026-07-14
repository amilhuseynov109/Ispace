export function formatPrice(value) {
  return `${new Intl.NumberFormat("fr-FR").format(value)} ₼`;
}

export function discountPercent(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round((1 - price / oldPrice) * 100);
}
