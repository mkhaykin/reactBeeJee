import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main role="main" className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
