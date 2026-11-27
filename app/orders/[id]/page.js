import Link from "next/link";
import { notFound } from "next/navigation";
import { orders } from "../../orders";
import StitchedButton from "../../StitchedButton";

export default async function OrderDetailPage({ params }) {
  const { id } = await params;
  console.log("Order page for", id);

  const order = orders.find((item) => item.id === Number(id));

  if (!order) {
    notFound();
  }

  return (
    <section>
      <Link href="/orders" className="back-link">
        &larr; Back to Orders
      </Link>

      <div className="detail-card">
        <div className="detail-header">
          <div>
            <span className="order-id-badge">Order #{order.id}</span>
            <h1 className="detail-title" style={{ marginTop: "0.5rem" }}>
              {order.customer}
            </h1>
          </div>
          <span
            className={
              order.due === "Monday"
                ? "day-badge day-badge-monday"
                : "day-badge"
            }
          >
            Due {order.due}
          </span>
        </div>

        <div className="detail-grid">
          <div className="detail-field">
            <span className="field-label">Customer</span>
            <span className="field-value">{order.customer}</span>
          </div>
          <div className="detail-field">
            <span className="field-label">Dress</span>
            <span className="field-value">{order.dress}</span>
          </div>
          <div className="detail-field">
            <span className="field-label">Price</span>
            <span className="field-value">Rs. {order.price}</span>
          </div>
          <div className="detail-field">
            <span className="field-label">Due Day</span>
            <span className="field-value">{order.due}</span>
          </div>
        </div>

        <StitchedButton />
      </div>
    </section>
  );
}
