import type { Product } from "../products";

type Props = { items: Product[]; onRemove: (index: number) => void; onCheckout: () => void };

export function Cart({ items, onRemove, onCheckout }: Props) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const count = items.length;

  return (
    <aside className="cart" aria-label="Shopping cart">
      <h2>Your cart</h2>
      <p className="count">{count === 1 ? "1 item" : `${count} items`}</p>
      {count === 0 ? (
        <p className="empty">Your cart is empty. Pick a coffee to get started.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button className="link" onClick={() => onRemove(index)} aria-label={`Remove ${item.name}`}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
      <p className="hint">Free shipping on orders over $40</p>
      <button className="primary" disabled={count === 0} onClick={onCheckout}>
        Go to checkout
      </button>
    </aside>
  );
}
