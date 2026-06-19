import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrivateRoute;