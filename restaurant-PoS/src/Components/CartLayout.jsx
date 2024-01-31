import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";

const CartLayout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", quantity: 2, price: 10.99 },
    { id: 2, name: "Item 2", quantity: 1, price: 5.49 },
    { id: 3, name: "Item 3", quantity: 3, price: 8.99 },
  ]);
  const [taxRate] = useState(0.1); // 10% tax rate

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * taxRate;
    return {
      subtotal,
      tax,
      total: subtotal + tax,
    };
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <Card className="bg-green-500 text-white w-96 fixed top-20 right-0">
      <CardBody>
        <table className="w-full">
          <thead>
            <tr>
              <th>Items</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <Button
                    color="gray"
                    onClick={() => handleDeleteItem(item.id)}
                    size="regular"
                    ripple="light"
                    rounded
                  >
                    🗑️
                  </Button>
                  {item.name}
                </td>
                <td>
                  <Button
                    color="gray"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    size="sm"
                    ripple="light"
                  >
                    -
                  </Button>
                  {item.quantity}
                  <Button
                    color="gray"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    size="sm"
                    ripple="light"
                  >
                    +
                  </Button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-summary mt-4">
          <div>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CartLayout;
