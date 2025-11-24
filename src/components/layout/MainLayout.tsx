import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />

      <main className="custom-container pt-4 md:pt-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
