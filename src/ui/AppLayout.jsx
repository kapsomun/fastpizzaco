import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">
      <Header />
      {isLoading && <Loader />}

      <main>
        <div className="max-w-[1200px] mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
