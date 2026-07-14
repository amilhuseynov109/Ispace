# iSpace Clone — Apple Store (Frontend Demo)

A simple **frontend-only** e-commerce store inspired by [ispace.az](https://ispace.az/en),
built with **React + Vite + Tailwind CSS**. Data comes from a small mock API
(local JSON), so no backend is required.

> Demo project. Not affiliated with Apple or iSpace.

## Features

- Product listing (home + by category) — ~12 products per category
- **Search with live dropdown** (suggestions + product results + "Search for …")
- **Product detail** page (colors, quantity, specs)
- **Basket / cart** with quantity controls and totals (saved in `localStorage`)
- **Contacts page**: all store branches + a feedback form with validation and an
  English "request received" confirmation message
- Mock API layer that simulates async requests

## Tech stack

- React 19 + React Router
- Vite (dev server & build)
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Project structure

```
src/
  api/         mock API (reads from data/products.js)
  components/  Header, Footer, ProductCard, ProductGrid, Loader
  context/     CartContext (basket state + localStorage)
  data/        products.js (catalogue) + stores.js (branches)
  pages/       Home, CategoryPage, ProductDetail, SearchPage, CartPage, ContactPage
  utils/       price formatting + SVG placeholder images
```

## Where to edit things

- **Add / change products:** `src/data/products.js`
- **Change categories:** `categories` array in `src/data/products.js`
- **Styling:** Tailwind classes in components + `tailwind.config.js`
