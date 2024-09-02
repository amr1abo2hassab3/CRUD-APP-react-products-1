// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Nav from "./components/navbar/Nav";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         {/* <Nav /> */}
//         <Routes>
//           <Route path="/" element={<Home /> } />
//           <Route path="/menu" element={<h1>this menu page welcom</h1>} />
//           <Route path="/about" element={<h1>this about page welcom</h1>} />
//           <Route path="/book" element={<h1>this book page welcom</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products";
import AddProduct from "./pages/AddProduct";
import ProductShow from "./pages/productShow";
import EditProduct from "./pages/editProduct";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/productShow/:productId" element={<ProductShow />} />
            <Route path="/edit/:productId" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;