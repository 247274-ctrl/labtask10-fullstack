import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero-card">
      <span className="eyebrow">Digital Order Book</span>
      <h1 className="hero-title">Welcome to Bazaar Tailor</h1>
      <p className="hero-subtitle">
        Track active stitching slips, check delivery days, and update garment
        completion status from one organized register.
      </p>
      <Link href="/orders" className="primary-btn">
        View All Orders &rarr;
      </Link>
    </section>
  );
}
