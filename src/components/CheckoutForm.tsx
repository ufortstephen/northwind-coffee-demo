import { useState, type FormEvent } from "react";

type Props = { onPlaced: () => void };

export function CheckoutForm({ onPlaced }: Props) {
  const [errors, setErrors] = useState<string[]>([]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: string[] = [];
    if (!String(data.get("name") || "").trim()) next.push("Please enter your full name.");
    if (!String(data.get("email") || "").includes("@")) next.push("Enter a valid email address.");
    if (String(data.get("zip") || "").trim().length < 4) next.push("Postal code looks too short.");
    setErrors(next);
    if (next.length === 0) onPlaced();
  }

  return (
    <form className="checkout" onSubmit={submit} noValidate aria-label="Checkout">
      <h2>Checkout</h2>
      <p className="hint">We ship Monday to Friday. Orders placed before noon leave the same day.</p>
      <label>
        Full name
        <input name="name" placeholder="Jane Doe" autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" />
      </label>
      <label>
        Street address
        <input name="street" placeholder="12 Harbor Lane" autoComplete="street-address" />
      </label>
      <label>
        Postal code
        <input name="zip" placeholder="10001" autoComplete="postal-code" />
      </label>
      <label className="check">
        <input type="checkbox" name="gift" /> This order is a gift
      </label>
      {errors.length > 0 && (
        <ul className="errors" role="alert">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <button className="primary" type="submit">
        Place order
      </button>
      <p className="fine">By placing your order you agree to our terms of sale.</p>
    </form>
  );
}
