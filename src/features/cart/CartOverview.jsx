function CartOverview() {
  return (
    <div className="flex p-4 items-center justify-between bg-stone-800 text-stone-100">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
