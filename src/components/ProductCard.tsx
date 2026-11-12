import type { Product } from "../products";

type Props = { product: Product; onAdd: (product: Product) => void };

export function ProductCard({ product, onAdd }: Props) {
  return (
    <article className="card">
      <div className="card-art" aria-hidden="true" />
      <span className="badge">Roasted this week</span>
      <h3>{product.name}</h3>
      <p className="notes">Tasting notes: {product.notes}</p>
      <p className="meta">
        <strong>${product.price.toFixed(2)}</strong> · {product.weight}
      </p>
      <button className="primary" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>
        Add to cart
      </button>
    </article>
  );
}
