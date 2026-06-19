import { BrowserRouter, Routes, Route } from "react-router-dom"

import PrivateRoute from "./Layouts/PrivateRoute";
import AdminLayout from "./Layouts/AdminLayout";

// Public Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";


// Admin Imports
import AdminContacts from "./pages/AdminContacts";
import AdminUsers from "./pages/AdminUsers";
import AdminRoute from "./Routes/AdminRoute";
import UpdateUser from "./pages/UpdateUser";

import { ToastContainer } from "react-toastify";
import PublicRoute from "./Layouts/PublicRoute";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminRoute />} >
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="/admin/users/:id/edit" element={<UpdateUser />} />
            </Route>
          </Route>

          {/* Error Route */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  )
}

export default App
