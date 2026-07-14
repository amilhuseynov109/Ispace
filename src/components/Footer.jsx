import { Link } from "react-router-dom";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Mac", to: "/category/mac" },
      { label: "iPhone", to: "/category/iphone" },
      { label: "iPad", to: "/category/ipad" },
      { label: "Watch", to: "/category/watch" },
      { label: "AirPods", to: "/category/airpods" },
      { label: "Accessories", to: "/category/accessories" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Trade In", to: "/contact" },
      { label: "Financing", to: "/contact" },
      { label: "Delivery & Payment", to: "/contact" },
      { label: "Warranty", to: "/contact" },
    ],
  },
  {
    title: "For Clients",
    links: [
      { label: "Blog", to: "/contact" },
      { label: "Loyalty Program", to: "/contact" },
      { label: "For Business", to: "/contact" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "About us", to: "/contact" },
      { label: "Find a Store", to: "/contact" },
      { label: "Contacts", to: "/contact" },
      { label: "Privacy policy", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-[#f5f5f7]">
      <div className="mx-auto grid max-w-page grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-semibold text-ink">{col.title}</h3>
            <ul className="space-y-2 text-sm text-subtle">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/10">
        <p className="mx-auto max-w-page px-5 py-4 text-xs text-subtle">
          Demo store — an iSpace-inspired frontend built with React & Tailwind.
          Not affiliated with Apple or iSpace.
        </p>
      </div>
    </footer>
  );
}
