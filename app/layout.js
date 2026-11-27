import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Bazaar Tailor — Order Book",
  description: "Digital tailoring order book for Bazaar Tailor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <div className="header-inner">
              <Link href="/orders" className="brand-link">
                <span className="brand-mark">BT</span>
                <span className="brand-title">Bazaar Tailor</span>
              </Link>
              <nav className="header-nav">
                <Link href="/" className="nav-pill">
                  Home
                </Link>
                <Link href="/orders" className="nav-pill">
                  Orders
                </Link>
              </nav>
            </div>
          </header>

          <main className="main-content">{children}</main>

          <footer className="site-footer">
            <div className="footer-inner">
              <span>Bazaar Tailor Workshop</span>
              <span className="footer-roll">247274</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
