import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/registrationPage/loginPage/LoginPage";
import {useSelector} from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.user); 
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage />} />
          <Route path = "/home" element = {isAuth ? <HomePage /> : <Navigate  to = "/" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
