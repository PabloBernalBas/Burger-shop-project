// Write all the code here
import React from "react";

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                    <div>
                        <h1>Shipping</h1>
                            <p>
                                <b>Address</b>
                                {"St adsacbasld 7-b"}
                            </p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                            <p>
                                <b>Name</b>
                                {"John"}
                            </p>
                            <p>
                                <b>Phone</b>
                                {9087698766}
                            </p>
                    </div>
                    <div>
                        <h1>Status</h1>
                            <p>
                                <b>Order Status</b>
                                {"Processing"}
                            </p>
                            <p>
                                <b>Placed At</b>
                                {"11-11-2011"}
                            </p>
                            <p>
                                <b>Delivered At</b>
                                {"11-11-2011"}
                            </p>
                    </div>
                    <div>
                        <h1>Payment</h1>
                            <p>
                                <b>Payment Method</b>
                                {"cod"}
                            </p>
                            <p>
                                <b>Payment Reference</b>#{"asgfdgasdgadfg"}
                            </p>
                            <p>
                                <b>Paid At</b>
                                {"11-11-2011"}
                            </p>
                    </div>
                    <div>
                        <h1>Amount</h1>
                            <p>
                                <b>Items Total</b>₹{1234}
                            </p>
                            <p>
                                <b>Shipping Charges</b>₹{175}
                            </p>
                            <p>
                                <b>Tax</b>₹{110}
                            </p>
                            <p>
                                <b>Total Amount</b>₹{110 + 175 + 1234}
                            </p>
                    </div>
                    <article>
                        <h1>Ordered Items</h1>
                        <div>
                            <h4>Cheese Burger</h4>
                            <div>
                                <span>{12}</span> x <span>{232}</span>
                            </div>
                        </div>
                        <div>
                            <h4>Veg Cheese Burger</h4>
                            <div>
                                <span>{10}</span> x <span>{500}</span>
                            </div>
                        </div>
                        <div>
                            <h4>Burger Fries</h4>
                            <div>
                                <span>{10}</span> x <span>{1800}</span>
                            </div>
                        </div>

                        <div>
                            <h4
                                style={{
                                    fontWeight: 800,
                                }}
                            >
                                Sub Total
                            </h4>
                            <div
                                style={{
                                    fontWeight: 800,
                                }}
                            >
                                ₹{2132}
                            </div>
                        </div>
                    </article>
            </main>
        </section>
    );
};

export default OrderDetails;
