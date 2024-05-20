import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/user/User";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 border-stone-100 bg-yellow-400 p-4">
      <Link
        to="/"
        className="text-l text-center font-semibold uppercase tracking-widest text-stone-800 sm:text-xl"
      >
        Fast Pizza CO.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}
