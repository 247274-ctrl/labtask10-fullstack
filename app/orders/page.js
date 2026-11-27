import Link from "next/link";
import { orders } from "../orders";

export default function OrdersPage() {
  const dueMondayCount = orders.filter((order) => order.due === "Monday").length;

  return (
    <section>
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Order Register</h1>
          <p className="page-desc">
            Select an order slip to view garment details and update stitching status.
          </p>
        </div>
      </div>

      <div className="orders-grid">
        {orders.map((order) => (
          <Link
            key={order.id}
            href={`/orders/${order.id}`}
            className="order-card"
          >
            <div>
              <div className="order-card-top">
                <span className="order-id-badge">Order #{order.id}</span>
                <span
                  className={
                    order.due === "Monday"
                      ? "day-badge day-badge-monday"
                      : "day-badge"
                  }
                >
                  {order.due}
                </span>
              </div>
              <h2 className="order-customer">{order.customer}</h2>
              <p className="order-dress">{order.dress}</p>
            </div>

            <div className="order-card-bottom">
              <span className="order-price">Rs. {order.price}</span>
              <span className="order-cta">Open slip &rarr;</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="summary-bar">
        <span className="summary-text">Due Monday: {dueMondayCount}</span>
        <span className="summary-hint">Total active slips: {orders.length}</span>
      </div>
    </section>
  );
}
