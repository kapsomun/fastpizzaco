import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="py-10 px-4">
      <h1 className="text-4xl md:text-6xl  mb-10 text-center">
        The best pizza.
        <br />
        <span className="font-bold text-yellow-400">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
