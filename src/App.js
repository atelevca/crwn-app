import { Outlet, Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <div>
        <h1> SHOP(!!!!</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
