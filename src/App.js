import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Shared/Header/Header";
import Home from "../src/components/pages/Home/Home/Home";
import Login from "../src/components/pages/Login/Login";
import Register from "../src/components/pages/Register/Register";
import AddEvent from "../src/components/pages/AddEvent/AddEvent";
import ManageEvent from "./components/pages/ManageEvent/ManageEvent";
import { HelmetProvider } from "react-helmet-async";
import RegisterActivity from "./components/pages/RegisterActivity/RegisterActivity";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="test">
      <Header></Header>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/registerActivity/:id"
            element={
              <RequireAuth>
                <RegisterActivity></RegisterActivity>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/add" element={<AddEvent></AddEvent>}></Route>
          <Route path="/manage" element={<ManageEvent></ManageEvent>}></Route>
        </Routes>
      </HelmetProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
