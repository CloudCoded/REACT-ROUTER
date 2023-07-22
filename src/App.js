import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import About from "./components/About";
import { Admin } from "./components/Admin";
import Products from "./components/Products";
import { Featured } from "./components/Featured";
import  { New } from "./components/New";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import Users from "./components/Users";
import { UserDetails } from "./components/UserDetails";
const LazyAbout = React.lazy(() => import('./components/About'))

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<LazyAbout/>}></Route>
      <Route path="order-summary" element={
        <React.Suspense fallback='loading...'>
         <OrderSummary/>
        </React.Suspense>
      } />
      <Route path="products" element={<Products/>}>
        <Route index element={<Featured />} />
        <Route path="featured" element={<Featured />} />
        <Route path="new" element={<New />} />
      </Route>
      <Route path="users" element={<Users />}>
        <Route path=":userId" element={<UserDetails />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NoMatch/>}></Route>
    </Routes>
    </>
  );
}


export default App;
