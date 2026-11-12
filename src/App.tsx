import { useState } from "react";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { CheckoutForm } from "./components/CheckoutForm";
import { Toast } from "./components/Toast";
import { products, type Product } from "./products";

export default function App() {
  const [items, setItems] = useState<Product[]>([products[0], products[1], products[1]]);
  const [toast, setToast] = useState<string | null>("Added Ethiopia Guji to your cart");
  const [checkingOut, setCheckingOut] = useState(true);

  function add(product: Product) {
    setItems((current) => [...current, product]);
    setToast(`Added ${product.name} to your cart`);
  }

  return (
    <div className="page">
      <Header cartCount={items.length} onOpenCart={() => setCheckingOut(false)} />
      <section className="hero" id="shop">
        <p className="eyebrow">Small-batch roasters</p>
        <h1>Fresh coffee, roasted to order</h1>
        <p>Whole beans shipped within 48 hours of roasting.</p>
      </section>
      <main className="layout">
        <section className="grid" aria-label="Coffees">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={add} />
          ))}
        </section>
        <div className="side">
          <Cart
            items={items}
            onRemove={(index) => setItems((current) => current.filter((_, i) => i !== index))}
            onCheckout={() => setCheckingOut(true)}
          />
          {checkingOut && <CheckoutForm onPlaced={() => setToast("Thanks! Your order is on its way.")} />}
        </div>
      </main>
      <footer className="footer">© 2026 Northwind Coffee · A demo storefront</footer>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
