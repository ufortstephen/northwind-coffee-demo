type Props = { cartCount: number; onOpenCart: () => void };

export function Header({ cartCount, onOpenCart }: Props) {
  return (
    <header className="header">
      <a className="logo" href="/" aria-label="Northwind Coffee home">
        Northwind Coffee
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#shop">Shop</a>
        <a href="#subscriptions">Subscriptions</a>
        <a href="#brew-guides">Brew guides</a>
        <a href="#about">About us</a>
      </nav>
      <button className="cart-button" onClick={onOpenCart} aria-label="Open cart">
        Cart ({cartCount})
      </button>
    </header>
  );
}
