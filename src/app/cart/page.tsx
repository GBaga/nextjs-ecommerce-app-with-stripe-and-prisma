import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import formatPrice from "@/lib/db/format";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart.items.length && <p> Your Cart is Empty</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
