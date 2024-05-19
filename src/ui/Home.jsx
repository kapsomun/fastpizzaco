import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="py-10 px-4 flex flex-col">
      <h1 className="text-4xl md:text-6xl text-center mb-10">
        The best pizza.
        <br />
        <span className="font-bold text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
  
    </div>
  );
}

export default Home;
