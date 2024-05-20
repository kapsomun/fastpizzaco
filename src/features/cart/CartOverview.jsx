import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex p-4 items-center justify-between bg-stone-800 text-stone-100">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link className="uppercase text-sm text-stone-300 hover:text-stone-500 transition-all duration-300" to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
